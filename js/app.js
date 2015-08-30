var insuranceApp =angular.module('insuranceApp', ['ngRoute','xeditable','ui.bootstrap'])

insuranceApp.config(function($routeProvider) {
  $routeProvider
    // .when('/', {
    //   controller:'homeController as home',
    //   templateUrl:'views/home.html'
    // })
    .when('/pedidos', {
      controller:'PedidosController as pedidoCtrl',
      templateUrl:'views/ordenes_pedido.html'
    })
    // .when('/pedidos/:idPedido', {
    //   controller:'detallePolizaController as detallePoliza',
    //   templateUrl:'views/detallePoliza.html'
    // })
    // .when('/produccion/:idProduccion', {
    //   controller:'detallePolizaController as detallePoliza',
    //   templateUrl:'views/detallePoliza.html'
    // })
    .otherwise({
      redirectTo:'/'
    });
})



insuranceApp.run(function(editableOptions) {
  editableOptions.theme = 'bs3';
});
