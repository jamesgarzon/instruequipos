var adminApp =angular.module('adminApp', ['ngRoute','xeditable','ngStorage','angularUtils.directives.dirPagination'])

adminApp.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller:'HomeController as home',
      templateUrl:'client/views/home.html'
    })
    .when('/pedidos', {
      controller:'PedidosController as pedidosCtrl',
      templateUrl:'client/views/RegistrarOrdenPedido.html'
    })
    .when('/productos', {
      controller:'ProductosController as productosCtrl',
      templateUrl:'client/views/productos/Productos.html'
    })
    .when('/pedido/:idPedido', {
      controller:'PedidoController as pedidoCtrl',
      templateUrl:'client/views/PedidoImpresion.html'
    })
    .when('/produccion/:idProduccion', {
      controller:'detallePolizaController as detallePoliz',
      templateUrl:'client/views/DetallePoliza.html'
    })
    .when('/login', {
      controller:'loginController as loginCtrl',
      templateUrl:'client/views/Login.html'
    })
    .otherwise({
      redirectTo:'/'
    });
})



adminApp.run(function( $localStorage, $rootScope, editableOptions) {
  editableOptions.theme = 'bs3';
  $rootScope.logueado = true;
   $rootScope.$storage = $localStorage.$default({
            items: '[]'
          });
});


adminApp.filter('numberFixedLen', function () {
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

    angular.module('adminApp').directive('ngReallyClick', [function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind('click', function() {
                var message = attrs.ngReallyMessage;
                if (message && confirm(message)) {
                    scope.$apply(attrs.ngReallyClick);
                }
            });
        }
    }
}]);
