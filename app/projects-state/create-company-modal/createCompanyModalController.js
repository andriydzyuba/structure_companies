(function () {
    'use strict';

    angular
        .module('app')
        .controller('createCompanyModalController', createCompanyModalController);


    createCompanyModalController.$inject = ['$scope', 'parentCompany', 'modalService', 'confirmService', 'companiesService'];

    function createCompanyModalController($scope, parentCompany, modalService, confirmService, companiesService) {
        var vm = this;
        vm.parentCompany = parentCompany;
        vm.company = {
            name: '',
            earnings: 0,
            parent_id: vm.parentCompany.id
        };
        vm.respond = respond;
        vm.createCompany = createCompany;
        vm.editCompany = editCompany;


        activate();

        function activate() {
            if(!vm.parentCompany.edit){
                vm.message = 'Create child company from parent company - '+ vm.parentCompany.name + '.';
            } else {
                vm.message = 'Edit company.';
                companiesService.getCompany(vm.parentCompany.id).then(function (data) {
                    vm.company.name = data.data.name;
                    vm.company.earnings = +data.data.earnings;
                    vm.company.id = +data.data.id;
                    vm.company.parent_id = +data.data.parent_id;
                });
            }
        }
        
        function respond(response) {
           confirmService.resolve(response);
        }

        function createCompany() {
            companiesService.createCompany(vm.company).then(function(response) {
                updateTree(vm.parentCompany.id, vm.company.earnings);
            });

            confirmService.resolve(true);
        }

        function editCompany() {
            companiesService.editCompany(vm.company, vm.company.id).then(function(response) {
                companiesService.getCompany(vm.company.parent_id).then(function (data) {
                    updateTree(vm.company.parent_id, vm.company.earnings);
                });
            });

            confirmService.resolve(true);
        }

        function updateCompanyEarnings(param, id) {
            companiesService.updateCompanyEarnings({earnings: param.earnings, id: id}).then(function(response) {
            });           
        }

        function updateTree(id, thisEarnings){

            if(id > 0)  {
		    	companiesService.getCompany(id).then(function (data) {
		    		let parentEarnings = data.data.earnings;
		    		let sum = +parentEarnings + +thisEarnings;
		    		updateCompanyEarnings({earnings: sum, id: id}, data.data.parent_id);
		    		updateTree(data.data.parent_id, sum);
		        });
		    }
        }
    }



})();
