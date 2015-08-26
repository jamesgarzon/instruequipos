'use strict';
insuranceApp.factory('productoService',function($http){
	return{
		listarProductos:function(scope){
			var $promise=$http.get('js/servicios Web/productos.json'); //send data to user.php
			$promise.then(function(msg){
				scope.productos = msg.data.PRODUCTOS;
			});
		}
	
	}

});