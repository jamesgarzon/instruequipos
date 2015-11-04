<?php
require __DIR__ . "/../ConexionDB.php";


function crearProductoSQL($productoACrear){
  $codigo = $productoACrear["codigo"];
  $detalle = $productoACrear["detalle"];
  $precioVenta = $productoACrear["precio_venta"];
  $precioCosto = $productoACrear["precio_costo"];
  $iva = $productoACrear["iva"];
  $stock = 0;
  $marca = $productoACrear["marca"];
  $esMateriaPrima = true;

	//Creamos la conexión con la función anterior
	$conexion = ConectarDB();

	//generamos la consulta
	mysqli_set_charset($conexion, "utf8"); //formato de datos utf8
	$sql = "  INSERT INTO producto (codigo, detalle, precio_venta, precio_costo, iva, stock, marca, es_materia_prima)
    VALUES ('$codigo','$detalle','$precioVenta','$precioCosto','$iva','$stock','$marca','$esMateriaPrima');";


	if(!$result = mysqli_query($conexion, $sql)) die(); //si la conexión falla cancelar programa

	desconectarDB($conexion); //desconectamos la base de datos
  return true;
	// print_r($productos); //devolvemos el array
}
?>
