(function () {
    angular.module("LaColaFeliz", []).directive("menu", ['servicioDeMenu', function () {
        return {
            bindToController: true,
            controllerAs: 'ctrl',
            controller: function (servicioDeMenu) {
                var vm = this;
                var menu = servicioDeMenu.obtenerEspecialidades();
                this.menu = menu;
                this.activarEdicion = function () { return vm.editable = true };
                this.desactivarEdicion = function () { return vm.editable = false };
                this.resetEspecialidad = function (indiceDeEspecialidadEnMenu) {
                    var especialidad = especialidades[indiceDeEspecialidadEnMenu];
                    especialidad.nombre = '';
                    for (var i = 0; i < especialidad.tipos.length; i++) {
                        especialidad.tipos[i].nombre = '';
                        especialidad.tipos[i].precio = ''
                    }
                };
                this.actualizarMenu = function (menuActualizado) {
                    servicioDeMenu.actualizarMenu(menuActualizado);
                    menu = menuActualizado;
                    this.editable=false;
                }
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

        function actualizarMenu(menuActualizado) {
            menu = menuActualizado;
        }

        return {
            obtenerEspecialidades: obtenerEspecialidades,
            actualizarMenu: actualizarMenu
        }
    }]);
})();