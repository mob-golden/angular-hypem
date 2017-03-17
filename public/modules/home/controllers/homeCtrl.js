angular.module('homeCtrl', ['homeService','materialApp'])
.controller('homeCtrl', function(Home, $scope) {
	
	self = this;
	Home.all(function(result){
		self.feedItems = result.data;
	});
});