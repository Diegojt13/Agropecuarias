<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Agropecuarias Luna EU</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://unicons.iconscout.com/relase/v4.0.0/line.css"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-*****" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>
    <header class="header">
        <nav class="nav">
            <a href="#" class="nav_logo">Agropecuarias Luna EU</a>
            <ul class="nav_items">
                <li>
                    <a href="#" class="nav_link">Inicio</a>
                    <a href="index1.php" class="nav_link" id="productos">Productos</a>
                    <a href="#" class="nav_link">Servicios</a>
                    <a href="#" class="nav_link">Contactos</a>
                </li>
            </ul>
            <button class="button open-form-button" id="form-open">Iniciar Sesión</button>
        </nav>
    </header>
    <section class="home">
        <div class="form_container">
            <button class="form_close">
                <i class="fas fa-times"></i>
            </button>
            
            <div class="form login_form">
                <form action="#">
                    <h2>Iniciar Sesión</h2>
                    <div class="input_box">
                        <label for="email">Correo Electrónico</label>
                        <input type="email" id="email" placeholder="Ingresa tu email" required>
                        <i class="uil uil-envelope alt email"></i>
                    </div>
                    <div class="input_box">
                        <label for="password">Contraseña</label>
                        <input type="password" id="password" placeholder="Ingresa tu contraseña" required>
                        <i class="uil uil-lock password"></i>
                        <i class="uil uil-eye-slash pw_hide"></i>
                    </div>
                    <div class="option_field">
                        <span class="chexbox">
                            <input type="checkbox" id="check">
                            <label for="check">Recordarme</label>
                        </span>
                        <a href="#" class="forgot_pw">¿Olvidaste tu contraseña?</a>
                    </div>
                    <button class="button">Iniciar Sesión</button>
                    <div class="login_signup">¿No tienes una cuenta? <a href="#" id="signup">Registrarse</a></div>
                </form>   
            </div>
            <div class="form signup_form">
                <form action="php/registro_usuario_be.php" method="POST">
                    <h2>Registro</h2>
                    <div class="input_box">
                        <label for="signup_nombre">Nombre completo</label>
                        <input type="text" id="signup_nombre" placeholder="Ingresa el nombre" required name="signup_nombre">
                         <i class="uil uil-envelope alt email"></i>
                    </div>
                    <div class="input_box">
                        <label for="signup_email">Correo Electrónico</label>
                        <input type="email" id="signup_email" placeholder="Ingresa tu email" required name="signup_email">
                        <i class="uil uil-envelope alt email"></i>
                    </div>
                    <div class="input_box">
                        <label for="signup_password">Contraseña</label>
                        <input type="password" id="signup_password" placeholder="Ingresa tu contraseña" required name="signup_password">
                        <i class="uil uil-lock password"></i>
                        <i class="uil uil-eye-slash pw_hide"></i>
                    </div>
                    <div class="input_box">
                        <label for="confirm_password">Confirmar contraseña</label>
                        <input type="password" id="confirm_password" placeholder="Confirmar contraseña" required name="confirm_password">
                        <i class="uil uil-lock password"></i>
                        <i class="uil uil-eye-slash pw_hide"></i>
                    </div>
                    <button class="button">Registrarse</button>
                    <div class="login_signup">¿Tienes una cuenta? <a href="#" id="login">Iniciar Sesión</a></div>
                </form>
            </div>
        </div>
        <div>
        <h2>
            SOBRE EMPRESA INVERSIONES AGROPECUARIAS LUNA EU
        </h2>
        <h1>

            INVERSIONES AGROPECUARIAS LUNA EU Es una empresa dedicada a la fabricación y comercialización de pisos y toda clase de maderas para muebles,construcción y demás usos. Cuenta con un respaldo en conocimiento y experiencia de 30 años en el área de las maderas de su propietario ERNESTO PINZÓN MARTINEZ. 
            Esto brinda credibilidad y confianza a nuestros clientes. INSTALACIONES: La empresa cuenta con una planta principal (fábrica) en el municipio de Cota, y una bodega o almacén en Bogotá.
            
        </h1>

        <h21>
            © INVERSIONES AGROPECUARIAS LUNA EU, EMPRESA
           

        </h21>
        
        <h22>
            11001 CALLE 67A NO. 30-41 CUNDINAMARCA,  BOGOTÁ,  COLOMBIA

        </h22>


        </div>
    </section>

    

    <script src="app.js"></script>
</body>
</html>
