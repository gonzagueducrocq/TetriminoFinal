var app = angular.module("tpAngular");

app.controller("jouerController", function($scope, Page, tetrisBoard, ScoresResource, tetrisScore, userService, partieResource) {
	Page.setTitle("Jouer");

var myPartie = {};

$scope.GO = function() {
  $scope.displayChoose = true;
}

$scope.SOLO = function() {
  $scope.displayBoard = true;
  $scope.displayChoose = false;

	$scope.start();

}

$scope.VS = function() {
  $scope.displayBoard = true;
  $scope.displayChoose = false;

	$scope.start();

}




	/*
	 * Fonction de démarrage de la partie
	 */
	$scope.start = function() {
		tetrisBoard.start();

		angular.element(tetrisBoard).on('gameOver', this.onGameOver);

			var partie = { joueur1: {
				id: userService.user.id
				}
			}
				myPartie = partieResource.add(partie);
	};



	/*
	 * Fonction de game over
	 */
	$scope.onGameOver = function() {
		angular.element(tetrisBoard).off('gameOver', this.onGameOver);
		alert('Game Over ! (débrouillez-vous ...)');

    var score = {partie: {
      id: myPartie.id
    },
    joueur: {
      id: userService.user.id
    },
    level:tetrisScore.level,
    lines:tetrisScore.lines,
    points: tetrisScore.points
    }
    ScoresResource.add(score);
	}
});
