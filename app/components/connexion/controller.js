var app = angular.module("tpAngular");


app.controller("connexionController", function($scope, Page, userService, logInResource, $location) {
	Page.setTitle("Se connecter");

	$scope.username ="";
	$scope.password ="";

		$scope.connexion = function() {
				var joueur = {username: this.username, password: this.password};

				userService.user = logInResource.logIn(joueur);

				$location.path("jouer");

		}
});
