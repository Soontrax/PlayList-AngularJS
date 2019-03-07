//Para cargar las vistas
var app = angular.module("Main", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "html/main.html"
        })
        .when("/playlist", {
            templateUrl: "html/playlist.html"
        })
        .when("/canciones", {
            templateUrl: "html/canciones.html"
        });
});

app.controller('songsJSON', function ($scope, $http) {
    $http.get('JSON/Canciones.json').success(function (response) {
        $scope.myData = response.text;
        console.log($scope.myData);
    });
});

//Para cargar el JSON
/* myApp = angular.module('JSON', []);
myApp.controller('songsJSON', function ($scope, $http) {
    $http.get('JSON/Canciones.json').success(function (response) {
        $scope.myData = response.text;
        console.log($scope.myData);
    });
});*/