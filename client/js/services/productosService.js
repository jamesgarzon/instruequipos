'use strict';
adminApp.factory('ProductoService',function($http){
	return{
		listar:function(scope){
			var $promise=$http.get('http://localhost/instruequipos/server/services/productos/listarProductos.php'); //send data to user.php
			$promise.then(function(msg){
				scope.productos = msg.data;
				scope.aaaa = msg.data;
				for (var i = 0; i < scope.productos.length; i++) {
					scope.productos[i].precio_venta = parseInt(scope.productos[i].precio_venta);
					scope.productos[i].precio_costo = parseInt(scope.productos[i].precio_costo);
					scope.productos[i].iva = parseInt(scope.productos[i].iva);
				}
			});
		}

	}

});
