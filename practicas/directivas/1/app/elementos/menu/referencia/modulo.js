(function () {
    angular.module("LaColaFeliz", []).directive("menu", function () {
        return {
            restrict: 'E',
            templateUrl: 'elementos/menu/referencia/plantilla.html'
        }
    });
})();