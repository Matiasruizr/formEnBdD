<?php

$nombre = $_POST['nombre'];
$nombreEmpresa = $_POST['nombreEmpresa'];
$email  = $_POST['email'];
$telefono = $_POST['telefono'];

//Enviar Mail
$para      = 'matiasruizr@hotmail.cl';
$titulo    = 'Correo enviado por '.$nombre;
$mensaje   = 'Nombre: '.$nombre."\n".
             'Nombre empresa:'.$nombreEmpresa."\n".
             'Email:'.$email."\n".
             'Telefono'.$telefono;
$cabeceras = 'From: correo@example.com'."\r\n" .
    'Reply-To: correo@example.com' . "\r\n";

mail($para, $titulo, $mensaje, $cabeceras);


//Conectar a sql
$con = mysqli_connect('localhost','user','pass');
mysqli_select_db( $con,'ejemploBD');


//Guardar datos en sql 
$GUARDAR_SQL =  mysqli_query($con,"INSERT INTO formulario (nombre,nombreEmpresa,email,telefono) VALUES ('$nombre','$nombreEmpresa','$email','$telefono')");    

    if (!$GUARDAR_SQL) {    //Si no guarda, retornar error
        die('Consulta no válida: ' . mysqli_error($con) );
    }else{
        echo "Se agrego!";
    }
    
?>
