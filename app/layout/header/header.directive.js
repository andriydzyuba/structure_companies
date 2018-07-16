(function() {
    'use strict';

    angular
        .module('app')
        .directive('header', header);

    header.$inject = [];
    /* @ngInject */
    function header() {
        var directive = {
            bindToController: true,
            controller: headerController,
            controllerAs: 'vm',
            restrict: 'A',
            templateUrl: 'layout/header/header.view.html'
        };

        return directive;
    }

    headerController.$inject = [];
    /* @ngInject */
    function headerController() {
        var vm = this;

    }

})();