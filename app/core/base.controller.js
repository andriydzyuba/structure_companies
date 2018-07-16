(function () {
    'use strict';

    angular
        .module('app')
        .controller('BaseController', BaseController);

    BaseController.$inject = ['$state', '$rootScope'];
    /* @ngInject */
    function BaseController($state, $rootScope) {
        var vm = this;

    }
})();

