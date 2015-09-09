angular.module('app')
    .factory('User', ['$resource',  function($resource){
        return $resource('data/userdata.json', {}, {
            save: {
                url: '/users/save',
                method: 'POST'
            },
            get: {
                url: '/users/:id',
                method: 'GET'
            }
        });
    }]);