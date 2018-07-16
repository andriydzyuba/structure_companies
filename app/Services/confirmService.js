(function() {
    'use strict';

    angular
        .module('app')
        .factory('confirmService', confirmService);

    confirmService.$inject = ['$q', '$uibModal', '$uibModalStack'];

    function confirmService($q, $uibModal, $uibModalStack) {
    	var defer;
    	var service = {
    		openConfirmModal: openConfirmModal,
            openRulesConfirmModal: openRulesConfirmModal,
            openAlertModal: openAlertModal,
            createCompanyModal: createCompanyModal,
    		resolve: resolve
    	};

    	return service;

    	function openConfirmModal(message) {
            defer = $q.defer();
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'layout/modals/confirm-modal/confirm-modal.html',
                controller: 'confirmModalController',
                controllerAs: 'vm',
                size: 'md',
                resolve: {
                    message: function() {
                        return message;
                    }
                }
            });
            return defer.promise;
    	}

        function createCompanyModal(parentCompany) {
            defer = $q.defer();
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'projects-state/create-company-modal/create-company-modal.html',
                controller: 'createCompanyModalController',
                controllerAs: 'vm',
                size: 'md',
                resolve: {
                    parentCompany: function() {
                        return parentCompany;
                    }
                }
            });
            return defer.promise;
        }


        function openRulesConfirmModal(type) {
            defer = $q.defer();
            var rulesInstance = $uibModal.open({
                animation: true,
                templateUrl: 'layout/modals/rules-confirm-modal/rules-confirm-modal.html',
                controller: 'RulesConfirmModalController',
                controllerAs: 'vm',
                size: 'lg',
                resolve: {
                    type: function() {
                        return type;
                    }
                }
            });
            return defer.promise;
        }

        function openAlertModal(message) {
            defer = $q.defer();
            var rulesInstance = $uibModal.open({
                animation: true,
                templateUrl: 'layout/modals/alert-modal/alert-modal.html',
                controller: 'AlertModalController',
                controllerAs: 'vm',
                size: 'lg',
                resolve: {
                    message: function() {
                        return message;
                    }
                }
            });
            return defer.promise;
        }

    	
        function resolve(response) {
        	defer.resolve(response);
            $uibModalStack.dismissAll();
        }



    }

})();
