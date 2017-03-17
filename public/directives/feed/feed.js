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
            posted: '@'
        }
    };
    return directive;

    function link(scope, element, attrs, controllers) {
        // var appCtrl = controllers[0],
        //     feedCtrl = controllers[1];

        // feedCtrl.options = appCtrl.options;
        // feedCtrl.localUser = appCtrl.localUser;
    }
}

/* @ngInject */
function feedController() {}
