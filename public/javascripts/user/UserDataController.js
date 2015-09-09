var app = angular.module('app');

app.controller('UserDataCtrl', ['$scope', 'User', 'toastr', function ($scope, User, toastr) {
    $scope.currentUser = {};
    $scope.selectedId = 0;

    $scope.users = User.query(function (data) {
        for (var i = 0; i < data.length; i++) {
            data[i].birthday = transformDate(data[i].birthday);
        }

        return data;
    });

    $scope.getUserInfo = function(id) {
        User.get({ id: id }, function(user) {
            user.birthday = transformDate(user.birthday);
            $scope.currentUser = user;
        });
    };

    $scope.saveUser = function () {
        if ($scope.userForm.$valid)
        {
            User.save(null, $scope.currentUser, function success() {
                toastr.success('You are awesome man!!', 'Success!');
            }, function error(data) {
                var error = data.data[0];
                toastr.error(error.param + ':' + error.msg, 'Fail!');
            });
        }
    };

    function transformDate(dateString) {
        return new Date(dateString);
    }
}]);
