(function () {
    angular.module("LaColaFeliz", []).directive("menu", ['servicioDeMenu', function () {
        return {
            bindToController: true,
            controllerAs: 'ctrl',
            controller: function (servicioDeMenu) {
                this.obtenerEspecialidades = servicioDeMenu.obtenerEspecialidades;
            },
            restrict: 'E',
            scope: {},
            templateUrl: 'elementos/menu/referencia/plantilla.html'
        }
    }]).factory('servicioDeMenu', ['$http', function ($http) {

        var menu;

        $http({ method: "GET", url: "menu.json" }).then(function (dataHttp) {
            menu = dataHttp.data;
        }, function () {
            new Error('Archivo json de menu no encontrado')
        })

        function obtenerEspecialidades() {
            return menu.filter(function (especialidad) {
                return especialidad.activo
            });
        }

        return {
            obtenerEspecialidades: obtenerEspecialidades
        }
    }]);
})();