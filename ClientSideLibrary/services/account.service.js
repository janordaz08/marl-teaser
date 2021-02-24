(function() {
	'use strict';
	
	angular
		.module('clientside.services')
		.factory('accountService', ['$http', '$log', '$q', 'Constants', accountService]);

	function accountService($http, $log, $q, Constants) {
		var basePath = Constants.Urls.BaseUrl + Constants.Urls.AccountApi;
		return {
			getLevel: getLevel,
			complete: complete
		}		
		
		function getLevel(data) {
			return $http.post(basePath + 'getLevel', data)
			.then(success)
			.catch(fail);
			
			function success(response) {
				$log.info("getLevel: ", response.data);
				return response.data;				
			}
			
			function fail(error) {
				$log.error(error);
				return $q.reject(error.data);
			}
		}
		
		function complete(data) {
			return $http.post(basePath + 'complete', data)
			.then(success)
			.catch(fail);
			
			function success(response) {
				$log.info("complete: ", response.data);
				return response.data;				
			}
			
			function fail(error) {
				$log.error(error);
				return $q.reject(error.data);
			}
		}

	}
	
})();