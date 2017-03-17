angular.module('homeService', [])
.factory('Home', function($http) {
    
    var homeFactory = {};

    homeFactory.fetchFeed = function(orderBy, pageNum, callback) {
    	$http({
		    url: '/hypemdata', 
		    method: "GET",
		    params: {order_by: orderBy, page_num: pageNum}
		 })
    	.then(callback);
    };

    return homeFactory;

});