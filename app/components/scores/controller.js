var app = angular.module("tpAngular");


app.controller("scoresController", function($scope, Page, ScoresResource) {

Page.setTitle("Top scores");
$scope.scores = ScoresResource.query();

});
