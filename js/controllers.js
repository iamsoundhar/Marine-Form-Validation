angular.module('MarineApp.controllers', [])
.directive('ensureUnique', ['$http', function($http) {
  return {
    require: 'ngModel',
    link: function(scope, ele, attrs, c) {
      scope.$watch(attrs.ngModel, function() {
        $http({
          method: 'POST',
          url: 'email.php',
          data: {'email': scope.$eval(attrs.ensureUnique)}
        }).success(function(data, status, headers, cfg) {
          c.$setValidity('unique', data.isUnique);
        }).error(function(data, status, headers, cfg) {
          c.$setValidity('unique', false);
        });
      });
    }
  }
}])
.controller('HomeCtrl', function($scope, Chats) {
  $scope.do_registration = function(chat) {
    alert("TEst");
  }
});