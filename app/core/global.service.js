(function() {
    'use strict';

    angular
        .module('app')
        .factory('Global', Global);

    Global.$inject = [];

    function Global() {
    	var service = {
            apiUrl: 'http://127.0.0.1:8000/'
    	};

    	return service;
    }

})();
