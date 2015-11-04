<?php
require('../../SQL/producto/EliminarProductoSQL.php');

$postdata = file_get_contents("php://input");
$datosProducto = json_decode($postdata,true);
$codigo = $datosProducto["codigoProducto"];
$retornoServicio = false;
$retornoServicio["respuestaEliminacion"] = EliminarProductoSQL($codigo);
if ($retornoServicio == null) {
  $retornoServicio = false;
}
echo json_encode($retornoServicio,true);
?>
