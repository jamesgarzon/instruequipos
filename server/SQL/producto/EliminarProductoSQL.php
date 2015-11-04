<?php
require __DIR__ . "/../ConexionDB.php";

function EliminarProductoSQL($codigo){

	$conexion = ConectarDB();

	//generamos la consulta
	mysqli_set_charset($conexion, "utf8"); //formato de datos utf8
	$sql = "  DELETE FROM producto
    WHERE codigo = '$codigo';";

	if(!$result = mysqli_query($conexion, $sql)) die(); //si la conexión falla cancelar programa

	desconectarDB($conexion); //desconectamos la base de datos
  return true;
	// print_r($productos); //devolvemos el array
}
?>
