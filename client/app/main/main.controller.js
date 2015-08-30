'use strict';

angular.module('tablesjsApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [];

    $http.get('/api/libraries').success(function(libraries) {
      $scope.awesomeThings = libraries;
    });

  });
