import template from "./template.html";
import './fileUpload.less';

var mime_type = "image/jpg";
//taken https://github.com/brunobar79/J-I-C/
function compress(source_img_obj){
  var cvs = document.createElement('canvas');

  cvs.width = source_img_obj.naturalWidth/3;
  cvs.height = source_img_obj.naturalHeight/3;
  var ctx = cvs.getContext("2d");
  ctx.drawImage(source_img_obj,  0, 0, cvs.width, cvs.height);
  var newImageData = cvs.toDataURL(mime_type);
  var result_image_obj = new Image();
  result_image_obj.src = newImageData;
  return result_image_obj;
}

function dataURItoFile(dataURI, name) {
    var binary = atob(dataURI.split(',')[1]);
    var array = [];
    for(var i = 0; i < binary.length; i++) {
        array.push(binary.charCodeAt(i));
    }
    return new File([new Uint8Array(array)], name, {type: mime_type})
}

export default function fileUpload(Customer, Venture, $http, $q, $ionicLoading) {
  return {
    replace: true,
    restrict: 'E',
    template: template,
    scope: {
      vnType: '=',
      vnId: '=',
      imageList: '='
    },
    link: function(scope, el, attr) {
      var objectOptions = {
        'venture': Venture,
        'customer': Customer
      };



      el.bind('change', function(event) {
        scope.processFiles(event.target.files);
      });

      var uploadFileToUrl = function(file, uploadUrl){

        var compressionPromise = new Promise(function(resolve, reject) {
          var fd = new FormData();
          var img = document.createElement('img');
          img.src = URL.createObjectURL(file);
          img.onload = function() {
            // resolve promise
            var newImagesrc = compress(img).src;
            fd.append('file', dataURItoFile(newImagesrc, file.name.split('.')[0] + '.jpg'  ));
            URL.revokeObjectURL(img.src);
            resolve(fd);
          };

        });


        return compressionPromise.then(function(formData) {
          // console.log(file)
          return $http.post(uploadUrl, formData, {
              headers: {
                'Content-Type': undefined,
                "access-control-allow-origin": "https://api.venturenative.com",
                "access-control-allow-credentials": "true",
              }
          });

        });


      }

      var processFile = function(file){
        let entity = scope.vnType;
        let id = scope.vnId;
        let url = `https://api.venturenative.com/api/Containers/${entity}-${id}/upload`;
        console.log(url);
        return uploadFileToUrl(file, url);
      };

      scope.processFiles = function(files) {
        let promises = [];
        let results = [];
        if(!files.length) return;

        $ionicLoading.show({
          template: '<ion-spinner icon="lines"></ion-spinner><p>Uploading Images</p>'
        });

        for(var i = 0; i < files.length; i++) {
          promises.push(processFile(files[i]));
        }

        $q.all(promises).then(function(data) {
          var imageList = data.map(function(item){
            var i = item.data.result.files.file[0];
            return `https://s3.amazonaws.com/${i.container}/${i.name}`
          })

          // add to existing array of images and make sure they have unique names
          scope.imageList = scope.imageList
                                  .concat(imageList)
                                  .filter((elem, pos, arr) => {
              return arr.indexOf(elem) == pos;
            });

          $ionicLoading.hide();
        });
      }


    }
  }
};
