'use strict';

/* Services */

angular.module('majorCourse', ['ngResource']).
  factory('Major', function($resource){
	  return $resource('data/:majorId.json', {}, {
	    query: {method:'GET', params:{ majorId: 'majorId'}, isArray:true}
	  });
	});
