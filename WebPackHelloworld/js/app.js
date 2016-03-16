import angular from 'angular';
import appSass from '../sass/app.scss';

class PrenomController {
  constructor($scope) {

    $scope.prenoms = [];

    $scope.ajouter = function() {
      $scope.prenoms.unshift($scope.prenom);
    };

    $scope.supprimer = function(i) {
      $scope.prenoms.splice(i, 1);
    };

  }
}

angular.module('app', [])
.controller('PrenomController', ['$scope', PrenomController]);

