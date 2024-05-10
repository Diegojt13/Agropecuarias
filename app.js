





const formOpenBtn = document.querySelector("#form-open");
const home = document.querySelector(".home");
const formContainer = document.querySelector(".form_container");
const formCloseBtn = document.querySelector(".form_close");
const signupBtn = document.querySelector("#signup");
const loginBtn = document.querySelector("#login");
const pwShowHide = document.querySelectorAll(".pw_hide");
const productosBtn = document.querySelector("#productos");

// Agregar evento al botón de abrir formulario
formOpenBtn.addEventListener("click", () => home.classList.add("show"));

// Agregar evento al botón de cerrar formulario
formCloseBtn.addEventListener("click", () => {
    home.classList.remove("show");
    formContainer.classList.remove("active");
});

// Agregar evento para mostrar u ocultar contraseña
pwShowHide.forEach((icon) => {
    icon.addEventListener("click", () => {
        let getPwInput = icon.parentElement.querySelector("input");

        if (getPwInput.type === "password") {
            getPwInput.type = "text";
            icon.classList.replace("uil-eye-slash", "uil-eye");
        } else {
            getPwInput.type = "password";
            icon.classList.replace("uil-eye", "uil-eye-slash");
        }
    });
});

// Agregar evento al botón de registro para mostrar el formulario
signupBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    formContainer.classList.add("active");
});

// Agregar evento al botón de login para ocultar el formulario
loginBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    formContainer.classList.remove("active");
});

// Redirigir al hacer clic en el botón de productos
productosBtn.addEventListener('click', function() {
    window.location.href = "inventario.html";
});

// Redirigir al hacer clic en el botón de inicio
document.addEventListener('DOMContentLoaded', function() {
    const inicioBtn = document.getElementById('Inicio');
    inicioBtn.addEventListener('click', function() {
        window.location.href = "inventario.html";
    });
});

