<?php
require('../../SQL/marcas/ListarMarcasSQL.php');

//Variables Globales
$retornoServicio = array();


 $marcas = listarMarcasSQL();
// print_r($marcas);
for($i = 0; $i < sizeof($marcas);$i++) {

	$retornoServicio[$i]["marca"] = $marcas[$i]["marca"];

}

echo json_encode($retornoServicio);
?>
