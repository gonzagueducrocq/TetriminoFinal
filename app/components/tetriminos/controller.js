var app = angular.module("tpAngular");


app.controller("tetriminosController", function($scope, Page, tetriminosResource, tetris) {
	Page.setTitle("Liste des tetriminos");

	$scope.tetriminos = tetriminosResource.query();
});
