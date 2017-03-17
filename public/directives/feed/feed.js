angular
    .module('materialApp.directives', [])
    .directive('feedItem', feedItem);

/* @ngInject */
function feedItem() {
    var directive = {
        bindToController: true,
        controller: feedController,
        controllerAs: 'feed',
        link: link,
        restrict: 'EA',
        require: ['feedItem'],
        templateUrl: 'directives/feed/feed.html',
        scope: {
            url: '@',
            title: '@',
            loved: '@',
            posted: '@',
            description: '@',
            posturl: '@',
            artist: '@',
            sitename: '@',
            posturl: '@',
            time: '@'
        }
    };
    return directive;

    function link(scope, element, attrs, controllers) {
        var time = scope.feed.time;
        var string = "";
        var min = Math.floor(time/60);
        var sec = Math.floor(time%60);
        if(sec < 10) {
            string = min + ":0"+ sec; 
        }
        else {
            string = min + ":"+ sec; 
        }
        scope.feed.nTime = string;
        // scope.apply();
        // var appCtrl = controllers[0],
        //     feedCtrl = controllers[1];

        // feedCtrl.options = appCtrl.options;
        // feedCtrl.localUser = appCtrl.localUser;
    }
}

/* @ngInject */
function feedController() {}
