var oxiNewsApp = angular.module('oxiNewsApp', []);

oxiNewsApp.controller('NewListController', function ($scope, $http) {
	$http.get("http://localhost:8080/OXIWebService/getNews")
  .success(function(response) {$scope.news = response;});

});



oxiNewsApp.controller("categoryController", function($scope, $http) {
  $http.get("http://localhost:8080/OXIWebService/getCategories")
  .success(function(response) {$scope.categories = response;});
});