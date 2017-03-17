angular.module('homeService', [])
.factory('Home', function($http) {
    
    var homeFactory = {};

    homeFactory.all = function(callback) {
    	$http.get('/hypemdata')
    		.then(callback);
    };

    return homeFactory;

});