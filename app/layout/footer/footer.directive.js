(function() {
    'use strict';

    angular
        .module('app')
        .directive('footer', footer);

    footer.$inject = [];
    /* @ngInject */
    function footer() {
        var directive = {
            bindToController: true,
            controller: FooterController,
            controllerAs: 'vm',
            restrict: 'A',
            templateUrl: 'layout/footer/footer.view.html'
        };

        return directive;
    }

    FooterController.$inject = [];
    /* @ngInject */
    function FooterController() {
        var vm = this;

    }
})();