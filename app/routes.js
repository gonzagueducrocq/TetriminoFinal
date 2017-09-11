var app = angular.module("tpAngular");


app.config(function($routeProvider) {
	$routeProvider
		.when("/", {
			templateUrl: "./app/components/home/home.html",
			controller: "homeController"
		})
		.when("/listeTetriminos", {
			templateUrl: "./app/components/tetriminos/tetriminos.html",
			controller: "tetriminosController"
		})
		.when("/scores", {
			templateUrl: "./app/components/scores/scores.html",
			controller: "scoresController"
		});
});
