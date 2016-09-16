(function () {
    angular.module("LaColaFeliz", []).directive("menu", function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/menu.html'
        }
    });
})();