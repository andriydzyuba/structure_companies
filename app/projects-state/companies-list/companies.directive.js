(function () {
    'use strict';

    angular
        .module('app')
        .directive('companies', companies);

    companies.$inject = [];
    /* @ngInject */
    function companies() {
        var directive = {
            replace: true,
            bindToController: true,
            controller: companiesController,
            controllerAs: 'vm',
            restrict: 'E',
            templateUrl: 'projects-state/companies-list/companies-list.view.html',
            scope: {}
        };

        return directive;
    }

    companiesController.$inject = ['companiesService', 'confirmService'];

    function companiesController(companiesService, confirmService) {
        var vm = this;
        vm.createCompany = createCompany;
        vm.getList = getList;
        vm.deleteCompany = deleteCompany;


        activate();

        function activate() {
            companiesService.getChildCompanies(0).then(function (data) {
                vm.companiesList = data.data;
            });
        }

        function createCompany (parentCompany) {
            confirmService.createCompanyModal(parentCompany).then(function(response){
                if (response) {
                }
                setTimeout(activate, 1000);
            });
        }

        function deleteCompany (id) {

            var message = "Edit company. Are you sure?";
            confirmService.openConfirmModal(message).then(function(response){
                if (response) {
                    companiesService.deleteCompany(id).then(function(response){
                        activate();
                    });
                }
            });
        }

        function getList (id){

            companiesService.getChildCompanies(id).then(function (data) {
                let parentId = id;

                for(let i = 0; i < data.data.length; i++){
                    let companyName = data.data[i].name;
                    let companyEarnings = data.data[i].earnings;
                    let companyTotal = data.data[i].total;
                    let companyId = data.data[i].id;
                    let parentId = data.data[i].parent_id;
                    let earningsSum = +companyEarnings + +companyTotal;

                    let ul = document.createElement("ul");

                    let li = document.createElement("li");
                    let liSpan = document.createElement("span");
                    liSpan.setAttribute("class", "nameCompany");
                    liSpan.innerHTML = companyName;
                    li.appendChild(liSpan);
                    li.id = companyId;
                    ul.appendChild(li);

                    let span = document.createElement("span");
                    span.innerHTML = ' | Earnings: ' + companyEarnings + '$ | Total: ' + earningsSum + '$ |';
                    span.id = 'span'+ companyId;
                    li.appendChild(span);

                    let deleteButton = document.createElement("button");
                    deleteButton.addEventListener("click", () => vm.deleteCompany(companyId));
                    deleteButton.setAttribute("class", "btn btn-danger");
                    deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
                    li.appendChild(deleteButton);

                    let editButton = document.createElement("button");
                    editButton.addEventListener("click", () => vm.createCompany({id: companyId, name: companyName, edit: true}));
                    editButton.setAttribute("class", "btn btn-warning");
                    editButton.innerHTML = '<i class="fas fa-edit"></i>';
                    li.appendChild(editButton);

                    let createButton = document.createElement("button");
                    createButton.addEventListener("click", () => vm.createCompany({id: companyId, name: companyName}));
                    createButton.setAttribute("class", "btn btn-success");
                    createButton.innerHTML = '<i class="fas fa-plus"></i>';
                    li.appendChild(createButton);


                    document.getElementById(parentId).appendChild(ul);

                    //just do recursion
                    getList (companyId);
                }
            });

        }

    }

})();