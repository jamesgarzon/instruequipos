<?php

function ConectarDB(){
	echo "adfasdfadf";
	$conexion = mysqli_connect("1","root","root","Ventas") or die("Error " . mysqli_error($conexion));     
    return $conexion;
}

?>