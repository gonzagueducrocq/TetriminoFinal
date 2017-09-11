app.factory("tetriminosResource", function($resource, API_URL) {
    return $resource(API_URL + "/tetrimino");
});
