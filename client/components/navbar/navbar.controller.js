'use strict';

angular.module('tablesjsApp')
  .controller('NavbarCtrl', function ($scope, $location, $http) {
    $http.get('/api/things').success(function(awesomeThings) {
      $scope.menuItems = awesomeThings;
    });

    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
