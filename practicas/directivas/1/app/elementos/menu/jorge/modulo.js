//1
(function (angular){
    //2
    angular.module('LaColaFeliz',[
      
    ]).directive('menu', function(){ //3
        return{
            restrict: 'E', //4
            templateUrl: 'elementos/menu/jorge/plantilla.html'
        }
    });
    
})(angular);


//1. iife, para evitar que las varibales queden globalizadas.
//2. Siempre se debe declarar obligatoriamente al menos un módulo
//3. Se normaliza el nombre de la directiva en camelCasse porque no es posible colocarlo así en HTML
//4. Evita que busque los elementos, es importante para ayudar al performance de la app (E, A, C, M)


//*** Notas: ***
//Las directivas se cargan en el DOM una vez que son definidas.
//Camellcase = agregarFuncion
//Inyección de dependencias: se refiere a la necesidad de elementos dentro de una función para su funcionamiento y privacidad. Ejemplo: function suma(a,b){ return a+b; } la función depende del envío de a y b para poder ejecutarse
//Elementos del Restrict:
    //E=elemento html
    //A=Atributos
    //C=clases css
    //M=comentarios HTML

//El módulo inicial se llama desde el ng-app, desde ahí se pueden referenciar el resto de los módulos 
//Poliformismo como práctica, poder reorganizar componentes llamando uno u otros según lo necesites. Ej: src="mensaje.js" o src="mensaje2.js" teniendo ambos el mismo contenido pero con funcionabiliad distinta.