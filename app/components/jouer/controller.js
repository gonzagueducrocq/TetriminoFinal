var app = angular.module("tpAngular");


app.controller("jouerController", function($scope, Page, tetrisBoard, ScoresResource, tetrisScore) {
	Page.setTitle("Jouer");



$scope.GO = function() {
  $scope.displayChoose = true;
}

$scope.SOLO = function() {
  $scope.displayBoard = true;
  $scope.displayChoose = false;

  tetrisBoard.start();

  angular.element(tetrisBoard).on('gameOver', this.onGameOver);
}

$scope.VS = function() {
  $scope.displayBoard = true;
  $scope.displayChoose = false;

  tetrisBoard.start();

  angular.element(tetrisBoard).on('gameOver', this.onGameOver);
}




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

    var score = {partie: {
      id:1
    },
    joueur: {
      id:4
    },
    level:tetrisScore.level,
    lines:tetrisScore.lines,
    points: tetrisScore.points
    }
    ScoresResource.add(tetrisScore);
	}
});
