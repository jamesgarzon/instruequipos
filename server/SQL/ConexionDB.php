 <?php

function ConectarDB(){
	$conexion = mysqli_connect("127.0.0.1:3306","root","root","administracion") or die("Error " . mysqli_error($conexion));
	return $conexion;
}

function desconectarDB($conexion){

    $close = mysqli_close($conexion);

//     if($close){
//         echo 'La desconexión de la base de datos se ha hecho satisfactoriamente
// ';
//     }else{
//         echo 'Ha sucedido un error inesperado en la desconexión de la base de datos
// ';
//     }

    return $close;
}
?>
