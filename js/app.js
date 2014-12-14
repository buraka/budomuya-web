var oxiNewsApp = angular.module('oxiNewsApp', ["ui.bootstrap"]);

oxiNewsApp.controller("navMainController", function($scope, $http) {
    $http.get("http://localhost:8080/OXIWebService/getMenu")
        .success(function(response) {$scope.menu = response;});
});

oxiNewsApp.controller('NewListController', function ($scope, $http) {
	$http.get("http://localhost:8080/OXIWebService/getNews")
        .success(function(response) {$scope.news = response;});

});

oxiNewsApp.controller('CarouselCtrl', function ($scope, $http) {

    $scope.myInterval = 5000;
	$http.get("http://localhost:8080/OXIWebService/getNews")
        .success(function(response) {

            $scope.news = response;

        });

});

oxiNewsApp.controller("categoryController", function($scope, $http) {
    $http.get("http://localhost:8080/OXIWebService/getCategories")
        .success(function(response) {$scope.categories = response;});
});