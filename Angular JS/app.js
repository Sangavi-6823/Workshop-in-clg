const demo = angular.module("demo", []);
demo.controller("demoCtrl", function ($scope) {
  $scope.title = "Demo app";
  $scope.data = [
    { firstName: "John", lastName: "Doe", jobTitle: "Developer", yoe: 3 },
    { firstName: "Jane", lastName: "Doe", jobTitle: "Designer", yoe: 2 },
  ];
  $scope.submit = function () {
    if ($scope.firstName && $scope.lastName && $scope.jobTitle && $scope.yoe) {
      $scope.data.push({
        firstName: $scope.firstName,
        lastName: $scope.lastName,
        jobTitle: $scope.jobTitle,
        yoe: $scope.yoe,
      });
      $scope.firstName = "";
      $scope.lastName = "";
      $scope.jobTitle = "";
      $scope.yoe = "";
    }
  };
});
