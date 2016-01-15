var app = angular.module('health');
app.controller("healthCtrl", function ($scope) {
  $scope.labels = ["Weight", "Net Carbs", "Protein"];
  $scope.data = [300, 500, 100];
});
