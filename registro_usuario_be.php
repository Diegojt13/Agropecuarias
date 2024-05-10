<?php

include 'conexion_be.php';

$signup_nombre = $_POST['signup_nombre'];
$signup_email = $_POST['signup_email'];
$signup_password = $_POST['signup_password'];
$confirm_password = $_POST['confirm_password'];

$query = "INSERT INTO usuarios(signup_nombre, signup_email, signup_password, confirm_password) 
          VALUES ('$signup_nombre', '$signup_email', '$signup_password', '$confirm_password')";

$ejecutar = mysqli_query($conexion, $query);

if($ejecutar){

    echo '
        <script>
            alert("Usuario almacena correctamente");
            window.location="../index.php";

        </script>
    
    
    ';


}


?>
