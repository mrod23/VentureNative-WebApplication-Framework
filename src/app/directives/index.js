import citySelect from './vn-city-select/vn-city-select.js'
import bgImage from './background-img/background-img.directive.js';
import fileUpload from './vn-fileupload/fileUpload.js';
import imageDisplay from './vn-imageDisplay/imageDisplay.js';
import ventureCard from './ventureCard/venture.card.directive.js';
import ventureCardList from './ventureCardList/venture-card-list.js';
import stripePayment from './stripe-payment/stripe.directive.js';



export default angular
  .module('sos.directives', [])
  .directive('vnFileUpload', fileUpload)
  .directive('vnImageDisplay', imageDisplay)
  .directive('ventureCard', ventureCard)
  .directive('vnCitySelect', citySelect)
  .directive('ventureCardList', ventureCardList)
  .directive('bgImage', bgImage)
  .directive('stripePayment', stripePayment);