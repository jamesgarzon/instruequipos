<?php
require('../SQL/ListarProductosSQL.php');



//Variables Globales
$retornoServicio = array();

 
$listaReservas = listarProductosSQL();

for($i = 0; $i < sizeof($listaReservas);$i++) {
	
	$retornoServicio[$i]["NITProveedor"] = $listaReservas[$i]["NITProveedor"];
    $retornoServicio[$i]["nombre"] = $listaReservas[$i]["nombre"];
    $retornoServicio[$i]["direccion"] = $listaReservas[$i]["direccion"];    
    $retornoServicio[$i]["telefono"] = $listaReservas[$i]["telefono"]; 
    $retornoServicio[$i]["email"] = $listaReservas[$i]["email"];
  
}

echo(json_encode($retornoServicio));
?>