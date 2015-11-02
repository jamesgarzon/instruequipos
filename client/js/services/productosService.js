'use strict';
adminApp.factory('ProductoService',function($http){
	return{
		listar:function(scope){
			var $promise=$http.get('http://localhost/instruequipos/server/services/listarProductos.php'); //send data to user.php
			$promise.then(function(msg){
				scope.productos = msg.data;
			});
		}

	}

});
