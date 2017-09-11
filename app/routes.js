var app = angular.module("tpAngular");


app.config(function($routeProvider) {
	$routeProvider
		.when("/", {
			templateUrl: "./app/components/home/home.html",
			controller: "homeController"
		})
		.when("/scores", {
			templateUrl: "./app/components/scores/scores.html",
			controller: "scoresController"
		});
});
