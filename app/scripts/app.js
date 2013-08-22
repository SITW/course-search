'use strict';

angular.module('courseSearchApp', ['majorCourse'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'mainPage'
      })
      .when('/:majorId', {
        templateUrl: 'views/course_list.html',
        controller: 'MajorList'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
