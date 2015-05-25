angular.module('MarineApp.controllers', [])

.controller('HomeCtrl', function($scope, Chats) {
  $scope.do_registration = function(chat) {
    alert("TEst");
  }
});