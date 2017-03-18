var homeModule = angular.module('homeCtrl', ['materialApp']);

homeModule.controller('homeCtrl', function(Home, $scope) {
	
	$scope.feedsByLatest = [];
	$scope.pageNumLatest = 1;
	$scope.loadingLatest = false;

	$scope.feedsByLoved = [];
	$scope.pageNumLoved = 1;
	$scope.loadingLoved = false;

	$scope.feedsByPosted = [];
	$scope.pageNumPosted = 1;
	$scope.loadingPosted = false;

	$scope.loadLatest = function() {
		if($scope.loadingLatest) return;
		$scope.loadingLatest = true;
		Home.fetchFeed('latest/all', $scope.pageNumLatest, function(result){
			var newFeeds = Object.keys(result.data).map(function(k) { return result.data[k] });
			newFeeds = newFeeds.slice(0, newFeeds.length - 1);

			var totalFeeds = $scope.feedsByLatest.concat(newFeeds);
			$scope.feedsByLatest = totalFeeds;
			if(newFeeds.length > 0 ) $scope.pageNumLatest++;
			$scope.loadingLatest = false;
		});
	}


	$scope.loadLoved = function() {
		if($scope.loadingLoved) return;
		$scope.loadingLoved = true;
		Home.fetchFeed('loved/alfredogolden', $scope.pageNumLoved, function(result){
			var newFeeds = Object.keys(result.data).map(function(k) { return result.data[k] });
			newFeeds = newFeeds.slice(0, newFeeds.length - 1);

			var totalFeeds = $scope.feedsByLoved.concat(newFeeds);
			$scope.feedsByLoved = totalFeeds;
			if(newFeeds.length > 0 ) $scope.pageNumLoved++;
			$scope.loadingLoved = false;
		});
	}

	$scope.loadPosted = function() {
		if($scope.loadingPosted) return;
		$scope.loadingPosted = true;
		Home.fetchFeed('popular/all', $scope.pageNumPosted, function(result){
			var newFeeds = Object.keys(result.data).map(function(k) { return result.data[k] });
			newFeeds = newFeeds.slice(0, newFeeds.length - 1);

			var totalFeeds = $scope.feedsByPosted.concat(newFeeds);
			$scope.feedsByPosted = totalFeeds;
			if(newFeeds.length > 0 ) $scope.pageNumPosted++;
			$scope.loadingPosted = false;
		});
	}
});