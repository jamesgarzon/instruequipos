insuranceApp.controller('PedidosController', function (clienteService, vendedorService, productoService) {
	
	this.Items = [];
	this.total = 0;
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


	


});