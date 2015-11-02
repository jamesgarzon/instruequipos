<?php
require('../SQL/ListarProveedoresSQL.php');


//Variables Globales
$retornoServicio = array();


$Proveedores = listarProveedoresSQL();

for($i = 0; $i < sizeof($Proveedores);$i++) {

	$retornoServicio[$i]["NITProveedor"] = $Proveedores[$i]["NITProveedor"];
    $retornoServicio[$i]["nombre"] = $Proveedores[$i]["nombre"];
    $retornoServicio[$i]["direccion"] = $Proveedores[$i]["direccion"];
    $retornoServicio[$i]["telefono"] = $Proveedores[$i]["telefono"];
    $retornoServicio[$i]["email"] = $Proveedores[$i]["email"];
}

echo(json_encode($retornoServicio));
?>
