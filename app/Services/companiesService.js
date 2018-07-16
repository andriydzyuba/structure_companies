(function() {
    'use strict';

    angular
        .module('app')
        .factory('companiesService', companiesService);

    companiesService.$inject = ['$q', '$http'];
    /* @ngInject */
    function companiesService($q, $http) {

        var service = {
            data: {},
            //getCompanies: getCompanies,
            createCompany: createCompany,
            editCompany: editCompany,
            getCompany: getCompany,
            getParentCompany: getParentCompany,
            getChildCompanies: getChildCompanies,
            deleteCompany: deleteCompany,
            updateCompanyEarnings: updateCompanyEarnings
        };

        return service;

        function createCompany(company) {
            var defered = $q.defer();
            var query = 'api/companies/createCompany.php';
            $http.post(query, company).then(function(data){
                defered.resolve(data);
            });
            return defered.promise;
        }

        function updateCompanyEarnings(earnings, id) {
            var defered = $q.defer();
            var query = 'api/companies/updateCompanyEarnings.php';

            $http.post(query, earnings, id).then(function(data){
                defered.resolve(data);
            });
            return defered.promise;
        }

        function editCompany(company, id) {
            var defered = $q.defer();
            var query = 'api/companies/editCompany.php';

            $http.post(query, company, id).then(function(data){
                defered.resolve(data);
            });
            return defered.promise;
        }

        // function getCompanies() {
        //     var defered = $q.defer();
        //     var query= 'api/companies/getCompanies.php';
        //
        //     $http.post(query).then(function(data){
        //         defered.resolve(data);
        //     });
        //
        //     return defered.promise;
        // }

        function getCompany(id) {
            var defered = $q.defer();
            var query = 'api/companies/getCompany.php', id;

            $http.post(query, id).then(function(data){
                defered.resolve(data);
            });
            return defered.promise;
        }

        function getParentCompany(id) {
            var defered = $q.defer();
            var query = 'api/companies/getParentCompany.php', id;

            $http.post(query, id).then(function(data){
                defered.resolve(data);
            });
            return defered.promise;
        }

        function getChildCompanies(id) {
            var defered = $q.defer();
            var query= 'api/companies/getChildCompanies.php';

            $http.post(query, id).then(function(data){
                defered.resolve(data);
            });

            return defered.promise;
        }

        function deleteCompany(id) {
            var defered = $q.defer();
            var query = 'api/companies/deleteCompany.php', id;

            $http.post(query, id).then(function(data){
                defered.resolve(data);
            });
            return defered.promise;
        }

    }
})();


