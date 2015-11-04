'use strict';
adminApp.factory('ProductoService',function($http, $route){
	var servicio = {};

	servicio.listar = function(scope){
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

	servicio.crear =function(scope, nuevoProducto){
		var data = {"producto":nuevoProducto}
		var $promise=$http.post('http://localhost/instruequipos/server/services/productos/CrearProducto.php', data);
		$promise.then(function(msg){
		var	respuesta = msg.data;
			if (respuesta.respuestaCreacion) {
				alert("Producto creado exitosamente");
				scope.nuevoProducto = {};
				servicio.listar(scope);

			}else {
				alert("Error creando el producto")
				$route.reload();
			}
		});
	}

	servicio.actualizar =function(scope, productoAActualizar){
		var data = {"producto":productoAActualizar}
		var $promise=$http.post('http://localhost/instruequipos/server/services/productos/ActualizarProducto.php', data);
		$promise.then(function(msg){
		var	respuesta = msg.data;
			if (respuesta.respuestaActualizacion) {
				alert("Producto actualizado exitosamente");
				servicio.listar(scope);

			}else {
				alert("Error al actualizar el producto")
				servicio.listar(scope);
			}
		});
	}

	servicio.eliminar =function(scope, codigoProducto){
		var data = {"codigoProducto":codigoProducto}
		var $promise=$http.post('http://localhost/instruequipos/server/services/productos/EliminarProducto.php', data);
		$promise.then(function(msg){
		var	respuesta = msg.data;
			if (respuesta.respuestaEliminacion) {
				alert("Producto eliminado exitosamente");
				servicio.listar(scope);

			}else {
				alert("Error al eliminar el producto")
				servicio.listar(scope);
			}
		});
	}

	return servicio;
});




//
// 'use strict';
// adminApp.factory('ProductoService',function($http, $route){
// 	var servicio = {};
//
// 	servicio.listar = function () {
//
// 	}
//
// 	return{
// 		listar:function(scope){
// 			var $promise=$http.get('http://localhost/instruequipos/server/services/productos/listarProductos.php'); //send data to user.php
// 			$promise.then(function(msg){
// 				scope.productos = msg.data;
// 				scope.aaaa = msg.data;
// 				for (var i = 0; i < scope.productos.length; i++) {
// 					scope.productos[i].precio_venta = parseInt(scope.productos[i].precio_venta);
// 					scope.productos[i].precio_costo = parseInt(scope.productos[i].precio_costo);
// 					scope.productos[i].iva = parseInt(scope.productos[i].iva);
// 				}
// 			});
// 		},
// 		crear:function(scope, nuevoProducto){
// 			var data = {"producto":nuevoProducto}
// 			var $promise=$http.post('http://localhost/instruequipos/server/services/productos/CrearProducto.php', data); //send data to user.php
// 			$promise.then(function(msg){
// 			var	respuesta = msg.data;
// 			alert(respuesta);
// 				if (respuesta.respuestaCreacion) {
// 					alert("Producto creado exitosamente");
// 					this.listar(scope);
//
// 				}else {
// 					alert("Error creando el producto")
// 					$route.reload();
// 				}
// 			});
// 		}
//
// 	}
//
// });
