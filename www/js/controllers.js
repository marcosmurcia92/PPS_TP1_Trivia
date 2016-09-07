angular.module('app.controllers', [])
  
.controller('authorCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('gameCtrl', ['$scope', '$state', '$stateParams' , '$timeout', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $state, $stateParams, $timeout) {
$scope.PreguntasTrivia = [];
	var VariableFireBase = new Firebase('https://tp-trivia-pps.firebaseio.com/TriviaData/');
  VariableFireBase.on('child_added', function (snapshot) {
    $timeout(function(){
      var preg = snapshot.val();
      $scope.PreguntasTrivia.push(preg);
      console.log(preg.id);
  console.log($scope.PreguntasTrivia.length);
    });
  });

  $scope.Jugar = function(){
  	$state.go('mainTabs.trivia',{pregId: $scope.PreguntasTrivia[0].id});
  };

}])
   
.controller('leaderBoardsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
      
.controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('triviaCtrl', ['$scope','$state', '$stateParams', '$timeout',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope,$state, $stateParams, $timeout) {
	$scope.PreguntasTrivia = [];
	$scope.IdxActual;
	$scope.TotalPregs;
	$scope.TextoPregunta;
	$scope.OpcionA;
	$scope.OpcionB;
	$scope.OpcionC;
	$scope.OpcAStyle = 'button-royal';
	$scope.OpcBStyle = 'button-royal';
	$scope.OpcCStyle = 'button-royal';
	$scope.OpcCorrecta;
	$scope.CanInteract = true;
	var VariableFireBase = new Firebase('https://tp-trivia-pps.firebaseio.com/TriviaData/');
  VariableFireBase.on('child_added', function (snapshot) {
    $timeout(function(){
      var preg = snapshot.val();
      $scope.PreguntasTrivia.push(preg);
      $scope.TotalPregs = $scope.PreguntasTrivia.length;
      console.log(preg.id);
      if(preg.id == $stateParams.pregId){
      	$scope.IdxActual = $scope.PreguntasTrivia.length;
      	$scope.TextoPregunta = preg.pregunta;
      	$scope.OpcionA = preg.opcA;
      	$scope.OpcionB = preg.opcB;
      	$scope.OpcionC = preg.opcC;
      	$scope.OpcCorrecta = preg.correcta;
      }
    });
  });

  	$scope.Answer = function($answer){
  		if($scope.CanInteract){
  			$scope.CanInteract = false;
	  		if ($answer == $scope.OpcCorrecta) {
	  			if($answer == 'A'){
	  				$scope.OpcAStyle = 'button-balanced';
	  			}else if($answer == 'B'){
	  				$scope.OpcBStyle = 'button-balanced';
	  			}else if($answer == 'C'){
	  				$scope.OpcCStyle = 'button-balanced';
	  			}
	  		}else{
	  			if($answer == 'A'){
	  				$scope.OpcAStyle = 'button-assertive';
	  			}else if($answer == 'B'){
	  				$scope.OpcBStyle = 'button-assertive';
	  			}else if($answer == 'C'){
	  				$scope.OpcCStyle = 'button-assertive';
	  			}
	  		}
	  		
	  		$timeout(function(){
	  			if(($scope.IdxActual + 1) > $scope.TotalPregs){
	  				//RESULTS SCREEN
	  			}else{
					// $scope.OpcAStyle = 'button-royal';
					// $scope.OpcBStyle = 'button-royal';
					// $scope.OpcCStyle = 'button-royal';
	  				$state.go('mainTabs.trivia',{pregId: $scope.PreguntasTrivia[$scope.IdxActual].id});
	  			}
	  		},1000);
  		}else{
  			$state.go('mainTabs.trivia',{pregId: $scope.PreguntasTrivia[$scope.IdxActual].id});
  		}		
  	};

}])
 