'use strict';

angular.module('tablesjsApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [];
    $scope.catergories = [];
    $http.get('/api/libraries').success(function(libraries) {
      $scope.orginalThings = libraries;
      $scope.awesomeThings = libraries;
    });

    $scope.addFilter = function(filter){
      if($scope.catergories.indexOf(filter) === -1){
        $scope.catergories.push(filter);

      } else{
        _.pull($scope.catergories, filter);
      }

    };

    $scope.categoryFilter = function (library) {
      if(_.every($scope.catergories, function(catergory){
        return _.contains(library.features, catergory);
      })){
        return library;
      }
      return;
    };

  });
