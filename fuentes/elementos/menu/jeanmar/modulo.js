(function (angular){
	angular.module('LaColaFeliz',['LaColaFeliz']).directive('menu', function(){
		return {
			restrict: 'E',
			templateUrl: 'elementos/menu/jeanmar/plantilla.html'
		}
	}	);
})(angular);