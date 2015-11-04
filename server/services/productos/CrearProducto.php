<?php
require('../../SQL/producto/CrearProductoSQL.php');

$postdata = file_get_contents("php://input");
$datosProducto = json_decode($postdata,true);
$productoACrear = $datosProducto["producto"];
$retornoServicio = false;
$retornoServicio["respuestaCreacion"] = crearProductoSQL($productoACrear);
if ($retornoServicio == null) {
  $retornoServicio = false;
}
echo json_encode($retornoServicio,true);
?>
