var app = angular.module('health', ['chart.js']);
angular.module("app", ["chart.js"]).controller("PieCtrl", function ($scope) {
  $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
  $scope.data = [300, 500, 100];
});
