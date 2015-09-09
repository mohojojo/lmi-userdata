var app = angular.module('app', ['ngMessages', 'ngResource', 'toastr', 'ngAnimate', 'ui.bootstrap']);

app.filter("dateFilter", function () {
    return function (item) {
        if (item != null) {
            return new Date(item);
        }
        return new Date();
    };
});