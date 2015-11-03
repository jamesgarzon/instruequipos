'use strict';
adminApp.factory('MarcaService',function($http){
	return{
		listar:function(scope){
			var $promise=$http.get('http://localhost/instruequipos/server/services/marcas/listarMarcas.php'); //send data to user.php
			$promise.then(function(msg){
				scope.marcas = msg.data;
			});
		}

	}

});
