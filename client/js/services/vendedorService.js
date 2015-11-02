'use strict';
adminApp.factory('vendedorService',function($http){
	return{
		listarVendedores:function(scope){
			var $promise=$http.get('js/serviciosWeb/vendedores.json'); //send data to user.php
			$promise.then(function(msg){
				scope.vendedores = msg.data.vendedores;
			});
		}
	
	}

});