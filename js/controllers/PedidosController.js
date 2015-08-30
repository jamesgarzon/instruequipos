insuranceApp.controller('PedidosController', function (clienteService, vendedorService, productoService) {
	
	this.Items = [];
	this.total = 0;
	this.user = {};
	this.user.name="James"

	clienteService.listarClientes(this);
	

	vendedorService.listarVendedores(this);
	

	productoService.listarProductos(this);

	
	this.agregarItem = function (productoSeleccionado) {
	
		this.Items.push({
			CODIGO:this.productoSeleccionado.CODIGO,
			DESCRIPCION:this.productoSeleccionado.DESCRIPCION,
			VENTA:this.productoSeleccionado.VENTA,
			IVA:this.productoSeleccionado.IVA,
			CANTIDAD:this.productoSeleccionado.CANTIDAD
		});
		this.productoSeleccionado = {};
		this.calcularTotal();
	}

	this.calcularTotal = function () {
			this.total = 0;
		for (var i = this.Items.length - 1; i >= 0; i--) {
			this.total += this.Items[i]['VENTA'] * (this.Items[i]['IVA']+100)/100 * this.Items[i]['CANTIDAD'];
		};
	}


		  this.agregarItem2 = function() {
    	this.Items.push({
			CODIGO:'',
			DESCRIPCION:'',
			VENTA:'',
			IVA:null,
			CANTIDAD:null
		});

		this.productoSeleccionado = {};
		this.calcularTotal();
  };

   this.eliminarItem = function(index) {
    this.Items.splice(index, 1);
  };

  this.guardarItem = function (item) {
  	
  }


   this.saveUser = function(data, id) {
    //$scope.user not updated yet
    angular.extend(data, {id: id});
    return $http.post('/saveUser', data);
  };




});