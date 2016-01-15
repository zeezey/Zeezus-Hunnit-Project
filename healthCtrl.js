var app = angular.module('health');
angular.module("health", ["chart.js"]).controller("healthCtrl", function ($scope) {
  $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
  $scope.data = [300, 500, 100];
});
