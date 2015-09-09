angular.module('app').controller('OccupationPickerCtrl', ['$scope', 'Occupation', function($scope, Occupation) {

    $scope.occupationSearch = function(userInputString) {
            return Occupation.search({ q: userInputString }).$promise;
    }

}]);