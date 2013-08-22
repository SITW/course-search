'use strict';

/* Services */

angular.module('department', ['ngResource']).
  factory('Department', function($resource){
	  return $resource('data/course_list.json', {}, {
	    query: {method:'GET', isArray:true}
	  });
	});
