define(function () {
    var app = angular.module('myApp', []);

    app.controller('mainController', function ($scope) {
        $scope.hello  = 'requireJS is ok';
    });

    return app;

})