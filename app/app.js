'use strict';

// Declare app level module which depends on views, and components
angular
    .module('app', [
      'ui.router',
      'ui.router.state.events',
      'ui.bootstrap',
      'ngCropper',
      'summernote',
      'ngStorage'
    ])

    .config(['$urlRouterProvider', '$sceDelegateProvider',
        function($urlRouterProvider, $sceDelegateProvider) {
           $urlRouterProvider.otherwise("projects");

            // $sceDelegateProvider.resourceUrlWhitelist([   //White list for wether api
            //     // Allow same origin resource loads.
            //     'self',
            //     // Allow loading from our assets domain.  Notice the difference between * and **.
            //     'http://api.openweathermap.org/**']);
    }]);
