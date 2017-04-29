import template from "./venture-card-list.html";

export default function fileUpload(Container) {
  return {
    replace: true,
    restrict: 'E',
    scope: {ventures: '='},
    template: template
  }
};
