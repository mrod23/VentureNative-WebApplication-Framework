import './venture-card.less';
import template from './venture-card.html';

export default function ventureCardDirective(Container) {
  return {
    template: template,
    scope: {
      'booking': '='
    },
    replace: true
  }
}