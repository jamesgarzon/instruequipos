'use strict';
insuranceApp.factory('clienteService',function($http){
	return{
		listarClientes:function(scope){
			var $promise=$http.get('services/listarProveedores.php'); //send data to user.php
			$promise.then(function(msg){
				alert(JSON.stringify(msg.data))
				scope.clientes = msg.data;
			});
		}
	
	}

});