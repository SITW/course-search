"use strict";angular.module("courseSearchApp",["majorCourse","department"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"mainPage"}).when("/:majorId",{templateUrl:"views/course_list.html",controller:"MajorList"}).otherwise({redirectTo:"/"})}]),angular.module("majorCourse",["ngResource"]).factory("Major",["$resource",function(a){return a("data/:majorId.json",{},{query:{method:"GET",params:{majorId:"majorId"},isArray:!0}})}]),angular.module("department",["ngResource"]).factory("Department",["$resource",function(a){return a("data/course_list.json",{},{query:{method:"GET",isArray:!0}})}]),angular.module("courseSearchApp").controller("MajorList",["$scope","Major","Department","$routeParams",function(a,b,c,d){a.major=b.query({majorId:d.majorId},function(){}),a.department=c.query({},function(){})}]).controller("mainPage",["$scope","Department","$routeParams",function(a,b){a.department=b.query({},function(){})}]);