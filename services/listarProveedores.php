<?php
require('../SQL/ListarProveedoresSQL.php');


//Variables Globales
$retornoServicio = array();

 
$listaReservas = listarProveedoresSQL();

for($i = 0; $i < sizeof($listaReservas);$i++) {
	
	$retornoServicio[$i]["NITProveedor"] = $listaReservas[$i]["NITProveedor"];
    $retornoServicio[$i]["nombre"] = $listaReservas[$i]["nombre"];
    $retornoServicio[$i]["direccion"] = $listaReservas[$i]["direccion"];    
    $retornoServicio[$i]["telefono"] = $listaReservas[$i]["telefono"]; 
    $retornoServicio[$i]["email"] = $listaReservas[$i]["email"];
  
}

echo(json_encode($retornoServicio));
?>