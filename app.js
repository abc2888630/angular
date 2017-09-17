define(['uiRouter'],function (uiRouter) {
    var app = angular.module('myApp', []);

    app.controller('mainController', function ($scope) {
        $scope.hello  = 'requireJS is ok';
        console.log($scope.hello);
    });

    return app;

})