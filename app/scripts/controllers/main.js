'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
  .controller('MainCtrl', ['$http', function ($http) {
      var main = this;
      $http.get('scripts/controllers/tutorials.json').success(function (data) {
          main.tutInfo=data;
      });
  }]);