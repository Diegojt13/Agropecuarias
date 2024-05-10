<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-*****" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="estilo.css">
    <title>Agropecuarias Luna EU </title>
</head>
<body>
    <header>
        <h1>Productos</h1>
        
        <nav class="nav">
            <ul class="nav_items">
                <li>
                    <a href="index.php" class="nav_link" id="Inicio">Inicio</a>
                    <a href="index1.php" class="nav_link" id="productos">Productos</a>
                    <a href="#" class="nav_link">Servicios</a>
                    <a href="#" class="nav_link">Contactos</a>
                </li>
            </ul>
            <button class="button open-form-button" id="form-open">Iniciar Sesión</button>
        </nav>
    </header>

    <section class="contenedor">
        <!-- Contenedor de elementos -->
        <div class="contenedor-items">
            <div class="item">
                <span class="titulo-item">Madera Blanca</span>
                <img src="https://i.imgur.com/Tf5rYDM.jpeg" alt="" class="img-item">
                <span class="precio-item">$15.000</span>
                <button class="boton-item">Agregar al Carrito</button>
            </div>
        </div>
        <!-- Carrito de Compras -->
        <div class="carrito" id="carrito">
            <div class="header-carrito">
                <h2>Tu Carrito</h2>
            </div>

            <div class="carrito-items">
                <!-- Aquí van los elementos del carrito -->
            </div>
            <div class="carrito-total">
                <div class="fila">
                    <strong>Tu Total</strong>
                    <span class="carrito-precio-total">
                        $0,00
                    </span>
                </div>
                <button class="btn-pagar">Pagar <i class="fa-solid fa-bag-shopping"></i> </button>
            </div>
        </div>
    </section>

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
    </section>

    <script src="app1.js"></script>
</body>
</html>
