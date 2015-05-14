angular.module('starter.controllers', ['ionic', 'ionic.contrib.ui.tinderCards'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };

})


  .directive('noScroll', function() {
    return {
      restrict: 'A',
      link: function($scope, $element, $attr) {
        $element.on('touchmove', function(e) {
          e.preventDefault();
        });
      }
    }
  })


  .controller('CardsCtrl', function($scope) {
    var cardTypes = [
      { text: 'Heat up leftover pizza in a nonstick skillet on top of the stove; set heat to med-low and heat till warm. This keeps the crust crispy. No soggy micro pizza. I saw this on the cooking channel and it really works.asfdafasfdasdsadfafasfdasdsadasdfasfdasfdasfdasfdasdasdasdfafasgasfasfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasfdafasfdasdsadfafasfdasdsadasdfasfdasfdasfdasfdasdasdasdfafasgasfasfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasfdafasfdasdsadfafasfdasdsadasdfasfdasfdasfdasfdasdasdasdfafasgasfasfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasfdafasfdasdsadfafasfdasdsadasdfasfdasfdasfdasfdasdasdasdfafasgasfasfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasfdafasfdasdsadfafasfdasdsadasdfasfdasfdasfdasfdasdasdasdfafasgasfasfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasfdafasfdasdsadfafasfdasdsadasdfasfdasfdasfdasfdasdasdasdfafasgasfasfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasfdafasfdasdsadfafasfdasdsadasdfasfdasfdasfdasfdasdasdasdfafasasfdafasfdasdsadfafasfdasdsadasdfasfdasfdasfdasfdasdasdasdfafasgasfasfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasfdafasfdasdsadfafasfdasdsadasdfasfdasfdasfdasfdasdasdasdfafasgasfasfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaagasfasfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', title: 'Reheat Pizza'},
      { text: 'Tips coming', title: 'Way too much Sand, right?'},
      { text: 'Tips a', title: 'Beautiful sky from wherever'},
    ];

    $scope.cards = [];

    $scope.addCard = function(i) {
      var newCard = cardTypes[i];
      newCard.id = i;
      $scope.cards.push(angular.extend({}, newCard));
    }

    for(var i = 0; i < 3; i++) $scope.addCard(i);

    $scope.cardSwipedLeft = function(index) {
      console.log('Left swipe');
    }

    $scope.cardSwipedRight = function(index) {
      console.log('Right swipe');
    }

    $scope.cardDestroyed = function(index) {
      $scope.cards.splice(index, 1);
      console.log('Card removed');
    }
  });
