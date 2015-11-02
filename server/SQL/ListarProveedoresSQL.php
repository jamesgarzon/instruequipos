<?php
require('ConexionDB.php');

function listarProveedoresSQL(){
	$conexion = ConectarDB();
	$sql ="SELECT *
	FROM Proveedor
	WHERE 1";
	$resultadoDatos = mysqli_query($conexion, $sql);

	$resultadoDatosRetornar = mysqli_fetch_all($resultadoDatos,MYSQLI_ASSOC);	
	mysqli_close($conexion);
	return $resultadoDatosRetornar;
 }   
?>  		
