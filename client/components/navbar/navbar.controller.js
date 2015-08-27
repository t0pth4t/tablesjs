'use strict';

angular.module('tablesjsApp')
  .controller('NavbarCtrl', function ($scope, $location, $http) {

    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
