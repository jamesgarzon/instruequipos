adminApp.controller('ProductosController', function ($scope,ProductoService,MarcaService) {

  ProductoService.listar($scope);
  MarcaService.listar($scope);
  $scope.nuevoProducto = {};
  productoAActualizar = {};
  $scope.nuevoProducto.iva = 0;
  $scope.currentPage = 1;
  $scope.pageSize = 7;

  $scope.crearProducto = function(producto){
    ProductoService.crear($scope, producto)
  }

  $scope.actualizarProducto = function (Producto) {
  ProductoService.actualizar($scope, Producto)
  }

  $scope.cargarInfoProductoAActualizar = function (Producto) {
    $scope.productoAActualizar = angular.copy(Producto);
  }


$scope.eliminarProducto = function (producto) {
  ProductoService.eliminar($scope, producto.codigo);
}
});
