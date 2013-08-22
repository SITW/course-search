'use strict';

angular.module('courseSearchApp')
  .controller('MajorList', function ($scope, Major, Department, $routeParams) {
    $scope.major = Major.query({majorId: $routeParams.majorId}, function(major) {
  	});
  	$scope.department = Department.query({}, function(dep) {
  	});
  })
  .controller('mainPage', function ($scope, Department, $routeParams) {
  	$scope.department = Department.query({}, function(dep) {
  	});
  });

