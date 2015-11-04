<?php
require __DIR__ . "/../ConexionDB.php";


function ActualizarProductoSQL($productoAActualizar){
  $codigo = $productoAActualizar["codigo"];
  $detalle = $productoAActualizar["detalle"];
  $precioVenta = $productoAActualizar["precio_venta"];
  $precioCosto = $productoAActualizar["precio_costo"];
  $iva = $productoAActualizar["iva"];
  $stock = 0;
  $marca = $productoAActualizar["marca"];
  $esMateriaPrima = true;

	//Creamos la conexión con la función anterior
	$conexion = ConectarDB();

	//generamos la consulta
	mysqli_set_charset($conexion, "utf8"); //formato de datos utf8
	$sql = "  UPDATE producto
    SET detalle = '$detalle', precio_venta ='$precioVenta', precio_costo ='$precioCosto', iva ='$iva', stock = '$stock', marca='$marca', es_materia_prima='$esMateriaPrima'
    WHERE codigo = '$codigo';";


	if(!$result = mysqli_query($conexion, $sql)) die(); //si la conexión falla cancelar programa

	desconectarDB($conexion); //desconectamos la base de datos
  return true;
	// print_r($productos); //devolvemos el array
}
?>
