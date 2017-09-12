var app = angular.module("tpAngular");


app.controller("inscriptionController", function($scope, Page, signInResource, $location) {
	Page.setTitle("Inscription");

var myJoueur = {};

  $scope.nom="";
  $scope.prenom="";
	$scope.username ="";
	$scope.password ="";


		$scope.inscription = function() {
				var joueur = {nom: this.nom, prenom: this.prenom, username: this.username, password: this.password};

				myJoueur = signInResource.add(joueur);

				$location.path("accueil");

		}
});
