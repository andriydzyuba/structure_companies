(function(){
    'use strict';

    angular
        .module('app')
        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('projects', {
                    url:'/projects',
                    templateUrl: 'projects-state/projects.view.html',
                    controller: 'ProjectsController',
                    controllerAs: 'vm'
                })
        }])
})();