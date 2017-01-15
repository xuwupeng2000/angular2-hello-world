(function (app) {
  app.AppComponent = 
    ng.core.Component({
      selector: 'my-ng-app',
      template: '<h1> Hellow Angular 2</h1>'
    })
    .Class({
      constructor: function () {

      }
    });
})(window.app || (window.app = {}));
