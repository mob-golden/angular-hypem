'use strict';

var materialApp = angular
.module('materialApp', [
    'infinite-scroll',
	'materialApp.directives',
    'materialApp.routes',
    'ui.router',
    'ngMaterial',
    'appCtrl',
    'homeCtrl',
    'homeService'
]).config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('pink');
});
