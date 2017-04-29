import template from "./imageDisplay.html";
import './imageDisplay.less';

export default function imageDisplay(Container, $ionicLoading) {
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
      function refreshData() {
        Container.getFiles({
          container: scope.vnType + "-" + scope.vnId
        }).$promise
        .then(function(images) {
          scope.images = images;
        });
      }

      scope.$watch('imageList', refreshData);
      scope.deleteImage = function(file) {
        $ionicLoading.show({
          template: '<ion-spinner icon="lines"></ion-spinner><p>Deleting Image</p>'
        });

        Container.removeFile({
          file: file.name,
          container: file.container
        }).$promise
          .then(function() {
            var newVal = scope.imageList.filter(function(item) {
              return item.indexOf(file.name) === -1;
            });
            scope.imageList = newVal;
          })
          .finally(function() {
            $ionicLoading.hide();
          })
      }
    }
  }
};
