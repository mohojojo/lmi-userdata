angular.module('app').directive('ageValidator', function() {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, element, attr, ctrl) {
            function ageValidator(ngModelValue) {

                if (ngModelValue) {
                    var today = new Date();
                    var birthDate = ngModelValue;
                    var age = today.getFullYear() - birthDate.getFullYear();
                    var m = today.getMonth() - birthDate.getMonth();
                    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                        age--;
                    }

                    if (age < 18) {
                        ctrl.$setValidity('ageValidator', false);
                    } else {
                        ctrl.$setValidity('ageValidator', true);
                    }
                }

                return ngModelValue;
            }

            ctrl.$parsers.push(ageValidator);
        }
    };
});
