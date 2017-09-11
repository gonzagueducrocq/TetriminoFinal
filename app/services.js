app.factory('ScoresResource', ['$resource', 'API_URL', function($resource, API_URL) {

  return $resource(API_URL + '/score', null, {
  });
}]);
