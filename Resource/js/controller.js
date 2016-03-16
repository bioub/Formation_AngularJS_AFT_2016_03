angular.module('app', ['contactService'])
.controller('ContactController', ['$scope', 'Contact', function($scope, Contact) {

  $scope.contacts = Contact.query();

  $scope.ajouter = function() {
    var newContact = $scope.contact;

    var contact = new Contact($scope.contact);
    contact.$save(function(contact) {
      console.log(contact);
    });
  };

  $scope.supprimer = function(i) {
   // $scope.prenoms.splice(i, 1);
  };

}]);
