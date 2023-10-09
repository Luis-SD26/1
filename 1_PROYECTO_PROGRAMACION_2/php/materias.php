<?php


$conexion = mysqli_connect("localhost", "root","", "docente_bd");

// Verificar la conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}
// Obtener los datos del formulario HTML


$materia = $_POST['materia'];
$docente = $_POST['docente'];

// Insertar la asignación en la base de datos
$sql = "INSERT INTO asignaciones (materia, docente) VALUES ('$materia', '$docente')";

if (mysqli_query($conn, $sql)) {
    echo "Asignación guardada correctamente.";
} else {
    echo "Error al guardar la asignación: " . mysqli_error($conexion);
}

// Cerrar la conexión a la base de datos
mysqli_close($conexion);
?>