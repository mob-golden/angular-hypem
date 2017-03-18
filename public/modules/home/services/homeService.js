angular.module('homeService', [])
.factory('Home', function($http) {
    
    var homeFactory = {};

    homeFactory.fetchFeed = function(type, pageNum, callback) {
    	$http.get('https://api.hypem.com/playlist/'+ type +'/json/' + pageNum).then(callback);
    };

    return homeFactory;

});