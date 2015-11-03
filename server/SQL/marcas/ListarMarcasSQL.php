<?php
// require('/opt/lampp/htdocs/instruequipos/server/SQL/ConexionDB.php');
// require("../ConexionDB.php");
require __DIR__ . "/../ConexionDB.php";

function listarMarcasSQL(){
	//Creamos la conexión con la función anterior
	$conexion = ConectarDB();

	//generamos la consulta
	mysqli_set_charset($conexion, "utf8"); //formato de datos utf8
	$sql ="SELECT *	FROM marca";

	if(!$result = mysqli_query($conexion, $sql)) die(); //si la conexión falla cancelar programa

	$marca = array(); //creamos un array

	//guardamos en un array multidimensional todos los datos de la consulta
	$i=0;
	while($row = mysqli_fetch_array($result,MYSQL_ASSOC))
	{
		$marca[$i] = $row;
		$i++;
	}

	desconectarDB($conexion); //desconectamos la base de datos

	return $marca; //devolvemos el array
}

?>
