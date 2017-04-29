import template from "./vn-city-select.html";
import './vn-city-select.less';

export default function fileUpload(City) {
  return {
    replace: true,
    require:'ngModel',
    restrict: 'E',
    template: template,
    scope: {
      ngModel: '='
    },
    link: function(scope, el, attr, ngModel) {
      el.bind('change', function(event) {
         ngModel.$setViewValue(event.target.value);
      });

      City.find({
        filter: {
          where: { featured: true}
        }
      }).$promise
        .then((cities)=> {
          if(!ngModel.$modelValue) {
            ngModel.$setViewValue(cities[0].id)
          }
          scope.cities = cities;
        });
    }
  }
};

