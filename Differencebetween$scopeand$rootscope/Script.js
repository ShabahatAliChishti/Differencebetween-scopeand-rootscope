var app = angular
    .module("Demo", [])
    .controller("redColourController", function ($scope, $rootScope) {
        $scope.redColour = "I am red Colour";
        $rootScope.rootScopeColour = "I am root scope controller";
    })
    .controller("greenColourController", function ($scope, $rootScope) {
        $scope.greenColour = "I am green Colour";
        $rootScope.rootScopeColour = "I am root scope controller";
    });


