angular.module('app', [])
.controller('PrenomController', function($scope) {

  $scope.prenoms = [];

  $scope.ajouter = function() {
    $scope.prenoms.unshift($scope.prenom);
  };

  $scope.supprimer = function(i) {
    $scope.prenoms.splice(i, 1);
  };

});
