adminApp.controller('ProductosController', function ($scope,ProductoService,MarcaService) {

  ProductoService.listar($scope);
  MarcaService.listar($scope);
  $scope.nuevoProducto = {};
  $scope.nuevoProducto.iva = 0;
  $scope.currentPage
  $scope.currentPage = 1;
  $scope.pageSize = 7;

  $scope.pageChangeHandler = function(num) {
    console.log('meals page changed to ' + num);
  };

  function OtherController(scope) {
    scope.pageChangeHandler = function(num) {
      console.log('going to page ' + num);
    };
  }

  $scope.crearProducto = function(Producto){
    alert("Producto a Crear: "+JSON.stringify(Producto));
  }

  $scope.actualizarProducto = function (Producto) {
    alert("Producto a actualizar: "+JSON.stringify(Producto));
  }

  $scope.cargarInfoProductoAActualizar = function (Producto) {
    $scope.productoAActualizar = angular.copy(Producto);
  }

});
