app.factory('signInResource', ['$resource', 'API_URL', function($resource, API_URL) {

  return $resource(API_URL + '/joueur/inscription', null, {

    'add': { method:'PUT' }

  });
}]);
