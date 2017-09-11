var app = angular.module("tpAngular");

app.controller("faqController", function($scope, Page, faqResource) {

Page.setTitle("FAQ");
$scope.faqs = faqResource.query();

});
