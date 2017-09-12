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
		})
		.when("/faq", {
			templateUrl: "./app/components/faq/faqs.html",
			controller: "faqController"
		})
		.when("/jouer", {
			templateUrl: "./app/components/jouer/jouer.html",
			controller: "jouerController"
		})
		.when("/connexionJoueur", {
			templateUrl: "./app/components/connexion/connexion.html",
			controller: "connexionController"
		})
		.when("/accueil", {
			templateUrl: "./app/components/accueil/Accueil.html",
			controller: "accueilController"
		})
		.when("/inscription", {
			templateUrl: "./app/components/inscription/inscription.html",
			controller: "inscriptionController"
		});
});
