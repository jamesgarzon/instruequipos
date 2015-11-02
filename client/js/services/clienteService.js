'use strict';
adminApp.factory('clienteService',function($http){
	return{
		listarClientes:function(scope){
			var $promise=$http.get('http://localhost/instruequipos/server/services/listarProductos.php'); //send data to user.php
			$promise.then(function(msg){
				scope.clientes = msg.data;
			});
		}

	}

});
