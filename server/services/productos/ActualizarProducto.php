<?php
require('../../SQL/producto/ActualizarProductoSQL.php');

$postdata = file_get_contents("php://input");
$datosProducto = json_decode($postdata,true);
$productoAActualizar = $datosProducto["producto"];
$retornoServicio = false;
$retornoServicio["respuestaActualizacion"] = actualizarProductoSQL($productoAActualizar);
if ($retornoServicio == null) {
  $retornoServicio = false;
}
echo json_encode($retornoServicio,true);
?>
