(function () {
    angular.module("LaColaFeliz", []).directive("menu", function () {
        return {
            bindToController: true,
            controllerAs: 'ctrl',
            controller: function () {
                var menu = [
                    {
                        nombre: 'Hamburguesas',
                        tipos: [
                            {
                                nombre: 'Normal',
                                precio: 2500
                            },
                            {
                                nombre: 'Especial',
                                precio: 3500
                            },
                            {
                                nombre: 'Full Equipo',
                                precio: 4000
                            }
                        ]
                    }, {
                        nombre: 'Perros Calientes',
                        tipos: [
                            {
                                nombre: 'Normal',
                                precio: 1500
                            },
                            {
                                nombre: 'Especial',
                                precio: 2000
                            },
                            {
                                nombre: 'Full Equipo',
                                precio: 2500
                            }
                        ]
                    }, {
                        nombre: 'Bebidas',
                        tipos: [
                            {
                                nombre: 'Normal',
                                precio: 800
                            },
                            {
                                nombre: 'Mediano',
                                precio: 1200
                            },
                            {
                                nombre: 'Grande',
                                precio: 1600
                            }
                        ]
                    },
                ]

                this.obtenerEspecialidades = function () {
                    return menu;
                }                
            },
            restrict: 'E',
            scope: {},
            templateUrl: 'elementos/menu/referencia/plantilla.html'
        }
    });
})();