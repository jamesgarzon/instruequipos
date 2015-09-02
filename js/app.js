var insuranceApp =angular.module('insuranceApp', ['ngRoute','xeditable','ngStorage'])

insuranceApp.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller:'homeController as home',
      templateUrl:'views/home.html'
    })
    .when('/pedidos', {
      controller:'PedidosController as pedidosCtrl',
      templateUrl:'views/RegistrarOrdenPedido.html'
    })
    .when('/pedido/:idPedido', {
      controller:'PedidoController as pedidoCtrl',
      templateUrl:'views/pedidoImpresion.html'
    })
    .when('/produccion/:idProduccion', {
      controller:'detallePolizaController as detallePoliza',
      templateUrl:'views/detallePoliza.html'
    })
    .otherwise({
      redirectTo:'/'
    });
})



insuranceApp.run(function( $localStorage, $rootScope, editableOptions) {
  editableOptions.theme = 'bs3';

   $rootScope.$storage = $localStorage.$default({
            items: '[]'
          });
});


insuranceApp.filter('numberFixedLen', function () {
        return function (n, len) {
            var num = parseInt(n, 10);
            len = parseInt(len, 10);
            if (isNaN(num) || isNaN(len)) {
                return n;
            }
            num = ''+num;
            while (num.length < len) {
                num = '0'+num;
            }
            return num;
        };
    });