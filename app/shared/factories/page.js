var app = angular.module("tpAngular");

app.factory('Page', function($location) {
	var _Title = '';
	
	return {
		title: function() {
			return _Title;
		},
		
		setTitle: function(title) {
			_Title = title;
		},
		
		isActive: function(page) {
			return ($location.path() === page) ? 'active' : '';
		}
	};
});