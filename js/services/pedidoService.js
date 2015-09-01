'use strict';
insuranceApp.factory('pedidoService',function($http){
	return{
		obtener:function(scope){
			var $promise=$http.get('js/serviciosWeb/pedido.json'); //send data to user.php
			$promise.then(function(msg){

				scope.pedido = msg.data;
			});
		}
	
	}

});