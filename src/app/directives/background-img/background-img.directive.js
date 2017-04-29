
import './background-img.less'

export default function imageDisplay() {
  return {
    restrict: 'A',
    scope: {
      image: '=bgImage'
    },
    link: function(scope, el) {
      function update() {
        el[0].setAttribute('style', 'background-image: url(' + scope.image + ')');
      }

      update();

    }
  }
};
