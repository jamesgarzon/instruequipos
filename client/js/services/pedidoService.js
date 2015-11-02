'use strict';
adminApp.factory('pedidoService',function($http){
	return{
		obtener:function(scope){
			var $promise=$http.get('js/serviciosWeb/pedido.json'); //send data to user.php
			$promise.then(function(msg){

				scope.pedido = msg.data;
				scope.pedido.fechaSolicitud = new Date(scope.pedido.fechaSolicitud);
				scope.pedido.fechaEntrega = new Date(scope.pedido.fechaEntrega);
			});
		}

	}

});
