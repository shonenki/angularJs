// JavaScript Document
(function(angular){
	
	angular.module('LaColaFeliz',[]).directive('menu',function(){
		return {
			restrict:'E',
		template:'<h1>MENU DEL RESTAURANTE</h1><ul><li>Hamburguesa</li><li>Normal-2500Bs</li><li>Especial-3500Bs</li><li>Full equipo-4000Bsf</li></ul><br><ul><li>Perros caliente</li><li>Normal - 1500bsf</li><li>Especial-2000BSF</li><li>Fullequipo-2500BSF.</li></ul><br><ul><li>Bebidas</li><li>Normal-800BSF</li><li>Mediana - 1200BSF.</li><li>Grande-1600BSF.</li></ul>'
		
		}})
	
	
	}
	)(angular);
	
	