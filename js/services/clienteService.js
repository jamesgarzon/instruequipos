'use strict';
insuranceApp.factory('clienteService',function($http){
	return{
		listarClientes:function(scope){
			var $promise=$http.get('js/servicios Web/clientes.json'); //send data to user.php
			$promise.then(function(msg){
				scope.clientes = msg.data.CLIENTES;
			});
		}
	
	}

});