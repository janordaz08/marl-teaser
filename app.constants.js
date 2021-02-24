(function() {
	'use strict';
	
	angular
		.module('user.portal')
		.constant('Constants', {
			Urls: {
				BaseUrl: "http://localhost/marlboro/api/",
				AccountApi: "account/",
				GameOverRedirectLink: "https://marlboro.ph/register"
			},
			
			Guide: 0
		});
	
})();