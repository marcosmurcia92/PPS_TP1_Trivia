angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('mainTabs.author', {
    url: '/Tabs/Author',
    views: {
      'tab1': {
        templateUrl: 'templates/author.html',
        controller: 'authorCtrl'
      }
    }
  })

  .state('mainTabs.game', {
    url: '/Tabs/Game',
    views: {
      'tab2': {
        templateUrl: 'templates/game.html',
        controller: 'gameCtrl'
      }
    }
  })

  .state('mainTabs.leaderBoards', {
    url: '/Tabs/Leaderboards',
    views: {
      'tab3': {
        templateUrl: 'templates/leaderBoards.html',
        controller: 'leaderBoardsCtrl'
      }
    }
  })

  .state('mainTabs', {
    url: '/Tabs',
    templateUrl: 'templates/mainTabs.html',
    abstract:true
  })

  .state('login', {
    url: '/Login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('mainTabs.trivia', {
    url: '/Game/Trivia',
    views: {
      'tab2': {
        templateUrl: 'templates/trivia.html',
        controller: 'triviaCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/Login')

  

});