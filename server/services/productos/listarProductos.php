<?php
require('../../SQL/producto/ListarProductosSQL.php');

//Variables Globales
$retornoServicio = array();


 $Productos = listarProductosSQL();
// print_r($Productos);
for($i = 0; $i < sizeof($Productos);$i++) {

	$retornoServicio[$i]["codigo"] = $Productos[$i]["codigo"];
    $retornoServicio[$i]["detalle"] = $Productos[$i]["detalle"];
    $retornoServicio[$i]["precio_costo"] = $Productos[$i]["precio_costo"];
    $retornoServicio[$i]["precio_venta"] = $Productos[$i]["precio_venta"];
    $retornoServicio[$i]["iva"] = $Productos[$i]["iva"];
    $retornoServicio[$i]["stock"] = $Productos[$i]["stock"];
    $retornoServicio[$i]["es_materia_prima"] = $Productos[$i]["es_materia_prima"];
    $retornoServicio[$i]["marca"] = $Productos[$i]["marca"];

}

echo json_encode($retornoServicio);
?>
