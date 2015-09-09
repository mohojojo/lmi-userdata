angular.module('app')
    .factory('Occupation', ['$resource',  function($resource){
        return $resource('data/occupationdata.json', {}, {
            search: {
                url: '/occ/:q',
                method: 'POST',
                isArray: true
            }
        });
    }]);