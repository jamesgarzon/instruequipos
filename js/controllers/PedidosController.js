insuranceApp.controller('PedidosController', function (clienteService, vendedorService, productoService, pedidoService,$localStorage) {
	
	this.Items = [];
	this.total = 0;
	this.user = {};
	this.user.name="James"

	clienteService.listarClientes(this);
	
	vendedorService.listarVendedores(this);
	
	productoService.listarProductos(this);

	

	this.mostrarItems = function () {
		this.Items = JSON.parse($localStorage.items);
	}


	this.mostrarItems();

	this.actualizarItems = function () {
		$localStorage.items =JSON.stringify(this.Items);
		this.calcularTotal();
	}

	this.agregarItem = function (productoSeleccionado) {
		alert($localStorage.items);
		this.Items = {}
		this.Items = JSON.parse($localStorage.items);

		this.Items.push({
			CODIGO:this.productoSeleccionado.CODIGO,
			DESCRIPCION:this.productoSeleccionado.DESCRIPCION,
			VENTA:this.productoSeleccionado.VENTA,
			IVA:this.productoSeleccionado.IVA,
			CANTIDAD:this.productoSeleccionado.CANTIDAD
		});

		this.productoSeleccionado = {};

		this.calcularTotal();
		var local = JSON.stringify(this.Items);
		$localStorage.items = local;
	}


	this.calcularTotal = function () {
			this.total = 0;
		for (var i = this.Items.length - 1; i >= 0; i--) {
			this.total += this.Items[i]['VENTA'] * (this.Items[i]['IVA']+100)/100 * this.Items[i]['CANTIDAD'];
		};
	}
	this.calcularTotal();

   this.eliminarItem = function(index) {
    this.Items.splice(index, 1);
    this.actualizarItems();
  };


});