app.factory('faqResource', ['$resource', 'API_URL', function($resource, API_URL) {

  return $resource(API_URL + '/faq', null, {
  });
}]);
