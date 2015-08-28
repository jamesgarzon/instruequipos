<?php

function ConectarDB(){
	$conexion = mysqli_connect("localhost","root","","ventas") or die("Error " . mysqli_error($conexion));     
    return $conexion;
}

?>