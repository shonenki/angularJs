//1
(function (angular){
    //2
    angular.module('LaColaFeliz',[]).directive('menu', function(){ //3
        return{
            BindtoController: true,
            controllerAs: 'menuVm',
            controller: function(servicioDeMenu){
                vm = this;
                vm.flagEditaMenu = false;
                
                //Funciones para el flag que cambia el menú a partir del resultado booleano al ng-if
                vm.editarMenu = function(){ vm.flagEditaMenu = true; };
                vm.vistaMenu = function(){ vm.flagEditaMenu = false; };
  
                //Se hace una promesa de devolución de resultado del objeto que se retorna desde el factory           
                servicioDeMenu.listarEspecialidades().then(function(resultado){
                    //Retorna a la plantilla para ser leída con ng-repeat
                    vm.menu = resultado.data;
                });
                

            },
            restrict: 'E', //4
            templateUrl: 'elementos/menu/jorge/plantilla.html',
            scope: {} //5 y 6
        }
    }).factory("servicioDeMenu", function($http){ //Inyecto el servicio $http de Angular
        //Creo una función que se llama desde el contrlador que leerá el JSON
        function listarEspecialidades(){
            return  $http.get('elementos/menu/jorge/menu.json');
        }
        //Retorna una variable que es igual al resultado de la función
        return {listarEspecialidades:listarEspecialidades}
    });    
})(angular);


//1. iife, para evitar que las varibales queden globalizadas.
//2. Siempre se debe declarar obligatoriamente al menos un módulo
//3. Se normaliza el nombre de la directiva en camelCasse porque no es posible colocarlo así en HTML
//4. Evita que busque los elementos, es importante para ayudar al performance de la app (E, A, C, M)

//*** 5 ****
//En el Scope guardo elementos de JS y puedo embeberlos en HTML
//Al definir un ng-app se crea un Scope root, al usar un controlador se hereda ese scope
//ng-repeat cumple la función de un foreach
//El ng-repeat sólo lee objetos en JS

//*** 6 ***
//BindtoController, scope {} (vacio) y ControllerAs: true. De esta manera aislo el scope padre y creo un scope exclusivo para la misma directiva
//De esta forma se amplia el poliformismo, debido a que es posible crear los elementos dentro de la directiva sin tener ningún tipo de dependencia externa


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
//El Ngmodel es un two way databine (puedo busca referencias en W3C)
//El scope es lo que permite enlazar el JS con HTML a través de Angular.
//El ng-app va siempre pegado a un módulo, tanto las directivas como los controladores van a un módulo, por ende es necesario tener siempre al menos un módulo.
//Estado Global NO!
//Modelo: Vista Modelo / Modelo Vista (investigar)
//ngif ejecuta algo en base a una condición booleana (ver ejemplo de la práctica2 del repositorio)
//menu.filter (función de JavaScript para permitir filtrar elementos de un arreglo)
//Definir fronteras es la finalidad de la Arquitectura de Software
// Directivas - Controladores - Servicios
//El factory devuelve un objeto, los servicios devuelven una función constructora.
//Los servicios propios de AngularJS incluyen $. Ej: $http, $log.
//Operador ternario (un if para true o false, donde el priemro siempre es true)
//vm.flagEditaMenu ? vm.menu=menu : vm.menu=menu.filter(function(especialidad){return especialidad.activo;})