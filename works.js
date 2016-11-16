(function () {
    var worksModule = angular.module('worksModule',[]);
    worksModule.controller('WorksCtrl',['$scope','$routeParams','$rootScope',function ($scope,$routeParams,$rootScope) {

        $rootScope.category = $routeParams.category;
    }])
})();
