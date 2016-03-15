angular.module('app', [])
.controller('ContactController', ['$scope', '$http', function($scope, $http) {

  $http.get('http://localhost:3000/api/v1/contacts')
    .then(function(response) {
      $scope.contacts = response.data;
    });

  $scope.ajouter = function() {
    var newContact = $scope.contact;

    $http.post('http://localhost:3000/api/v1/contacts', newContact)
      .then(function(response) {
        $scope.contacts.push(response.data);
      });
   // $scope.prenoms.unshift($scope.prenom);
  };

  $scope.supprimer = function(i) {
   // $scope.prenoms.splice(i, 1);
  };

}]);
