<?php

include 'conexion_db.php';

$usuario = $_POST['usuario'];
$nombre = $_POST['nombre'];
$fecha_nacimiento = $_POST['fecha_nacimiento'];
$correo_electronico = $_POST['correo_electronico'];
$telefono_celular = $_POST['telefono_celular'];

$query= "INSERT INTO Estudiantes (usuario, nombre, fecha_nacimiento, correo_electronico, telefono_celular)
VALUES ('$usuario', '$nombre', '$fecha_nacimiento', '$correo_electronico', '$telefono_celular')";

$ejecutar = mysqli_query($query);


?>