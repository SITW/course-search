'use strict';

angular.module('courseSearchApp')
  .controller('MajorList', function ($scope, Major, $routeParams) {
    $scope.major = Major.query({majorId: $routeParams.majorId}, function(major) {
  	});
  })
  .controller('mainPage', function ($scope, Major) {
  });

