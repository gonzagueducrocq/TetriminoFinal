var app = angular.module("tpAngular");



app.controller("tetrisController", function($scope, Page, tetrisBoard, scoreResource) {
	Page.setTitle("Jouer");


	/*
	 * Fonction de démarrage de la partie
	 */
	$scope.start = function() {
		tetrisBoard.start();

		angular.element(tetrisBoard).on('gameOver', this.onGameOver);
	};



	/*
	 * Fonction de game over
	 */
	$scope.onGameOver = function() {
		angular.element(tetrisBoard).off('gameOver', this.onGameOver);
		alert('Game Over ! (débrouillez-vous ...)');

	}
});
