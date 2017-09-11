app.factory('jouerResource', ['$resource', 'API_URL', function($resource, API_URL) {

  return $resource(API_URL + '/jouer', null, {
  });
}]);
