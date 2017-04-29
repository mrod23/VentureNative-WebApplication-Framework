
export default function stripePayment() {
  return {
    template: '<button ng-click="initStripe()">send booking request</button>',
    restrict: 'E',
    scope: {
      callback: "=",
      price: "=" 
    },
    link: function(scope, el, attr) {
      var handler = StripeCheckout.configure({
        key: 'ENTER YOUR OWN',
        image: 'LINK TO A IMAGE FILE',
        locale: 'auto',
        token: function(token) {
          scope.callback(token);
          // You can access the token ID with `token.id`.
          // Get the token ID to your server-side code for use.
        }
      });
      scope.initStripe= function() {
          handler.open({
            name: 'Venture Native, Inc',
            description: '2 widgets',
            amount: scope.price * 100
          });
      };
    }
  }
};

