// Variable que mantiene el estado visible del carrito
var carritoVisible = false;

// Esperamos a que todos los elementos de la página carguen para ejecutar el script
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

function ready() {
    // Agregamos funcionalidad al botón pagar
    var btnPagar = document.querySelector('.btn-pagar');
    if (btnPagar) {
        btnPagar.addEventListener('click', pagarClicked);
    }

    // Agregamos funcionalidad al botón de agregar al carrito
    var botonesAgregarAlCarrito = document.getElementsByClassName('boton-item');
    for (var i = 0; i < botonesAgregarAlCarrito.length; i++) {
        var button = botonesAgregarAlCarrito[i];
        button.addEventListener('click', agregarAlCarritoClicked);
    }
}

// Eliminamos todos los elementos del carrito y lo ocultamos
function pagarClicked() {
    alert("Gracias por la compra");
    // Eliminamos todos los elementos del carrito
    var carritoItems = document.querySelector('.carrito-items');
    while (carritoItems.firstChild) {
        carritoItems.removeChild(carritoItems.firstChild);
    }
    actualizarTotalCarrito();
    ocultarCarrito();
}

// Función que controla el botón clickeado de agregar al carrito
function agregarAlCarritoClicked(event) {
    var button = event.target;
    var item = button.closest('.item');
    var titulo = item.querySelector('.titulo-item').innerText;
    var precio = item.querySelector('.precio-item').innerText;
    var imagenSrc = item.querySelector('.img-item').src;

    agregarItemAlCarrito(titulo, precio, imagenSrc);
    hacerVisibleCarrito();
}

// Función que hace visible el carrito
function hacerVisibleCarrito() {
    carritoVisible = true;
    var carrito = document.querySelector('.carrito');
    carrito.style.marginRight = '0';
    carrito.style.opacity = '1';

    var items = document.querySelector('.contenedor-items');
    items.style.width = '60%';
}

// Función que agrega un item al carrito
function agregarItemAlCarrito(titulo, precio, imagenSrc) {
    var itemsCarrito = document.querySelector('.carrito-items');

    // Controlamos que el item que intenta ingresar no se encuentre en el carrito
    var nombresItemsCarrito = itemsCarrito.querySelectorAll('.carrito-item-titulo');
    for (var i = 0; i < nombresItemsCarrito.length; i++) {
        if (nombresItemsCarrito[i].innerText == titulo) {
            alert("El item ya se encuentra en el carrito");
            return;
        }
    }

    var item = document.createElement('div');
    item.classList.add('carrito-item');
    var itemCarritoContenido = `
        <div class="carrito-item">
            <img src="${imagenSrc}" width="80px" alt="">
            <div class="carrito-item-detalles">
                <span class="carrito-item-titulo">${titulo}</span>
                <div class="selector-cantidad">
                    <i class="fa-solid fa-minus restar-cantidad"></i>
                    <input type="text" value="1" class="carrito-item-cantidad" disabled>
                    <i class="fa-solid fa-plus sumar-cantidad"></i>
                </div>
                <span class="carrito-item-precio">${precio}</span>
            </div>
            <button class="btn-eliminar">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>
    `;
    item.innerHTML = itemCarritoContenido;
    itemsCarrito.appendChild(item);

    // Agregamos la funcionalidad eliminar al nuevo item
    item.querySelector('.btn-eliminar').addEventListener('click', eliminarItemCarrito);

    // Agregamos la funcionalidad restar cantidad del nuevo item
    item.querySelector('.restar-cantidad').addEventListener('click', restarCantidad);

    // Agregamos la funcionalidad sumar cantidad del nuevo item
    item.querySelector('.sumar-cantidad').addEventListener('click', sumarCantidad);

    // Actualizamos total
    actualizarTotalCarrito();
}

// Aumento en uno la cantidad del elemento seleccionado
function sumarCantidad(event) {
    var buttonClicked = event.target;
    var selector = buttonClicked.parentElement;
    var cantidadActual = parseInt(selector.querySelector('.carrito-item-cantidad').value);
    cantidadActual++;
    selector.querySelector('.carrito-item-cantidad').value = cantidadActual;
    actualizarTotalCarrito();
}

// Resto en uno la cantidad del elemento seleccionado
function restarCantidad(event) {
    var buttonClicked = event.target;
    var selector = buttonClicked.parentElement;
    var cantidadActual = parseInt(selector.querySelector('.carrito-item-cantidad').value);
    cantidadActual--;
    if (cantidadActual >= 1) {
        selector.querySelector('.carrito-item-cantidad').value = cantidadActual;
        actualizarTotalCarrito();
    }
}

// Elimino el item seleccionado del carrito
function eliminarItemCarrito(event) {
    var buttonClicked = event.target;
    buttonClicked.closest('.carrito-item').remove();
    // Actualizamos el total del carrito
    actualizarTotalCarrito();
    // La siguiente función controla si hay elementos en el carrito
    // Si no hay, oculta el carrito
    ocultarCarrito();
}

// Función que controla si hay elementos en el carrito. Si no hay, oculta el carrito.
function ocultarCarrito() {
    var carritoItems = document.querySelector('.carrito-items');
    if (carritoItems.childElementCount == 0) {
        var carrito = document.querySelector('.carrito');
        carrito.style.marginRight = '-100%';
        carrito.style.opacity = '0';
        carritoVisible = false;
        var items = document.querySelector('.contenedor-items');
        items.style.width = '100%';
    }
}

// Actualizamos el total de Carrito
function actualizarTotalCarrito() {
    // Seleccionamos el contenedor carrito
    var carritoContenedor = document.querySelector('.carrito');
    var carritoItems = carritoContenedor.querySelectorAll('.carrito-item');
    var total = 0;
    // Recorremos cada elemento del carrito para actualizar el total
    for (var i = 0; i < carritoItems.length; i++) {
        var item = carritoItems[i];
        var precioElemento = item.querySelector('.carrito-item-precio');
        // Quitamos el símbolo peso y el punto de milesimos.
        var precio = parseFloat(precioElemento.innerText.replace('$', '').replace('.', ''));
        var cantidadItem = item.querySelector('.carrito-item-cantidad');
        var cantidad = parseInt(cantidadItem.value);
        total += precio * cantidad; // Acumulamos el precio total sumando el precio de cada artículo
    }
    total = Math.round(precio * cantidad);

    document.querySelector('.carrito-precio-total').innerText = '$' + total.toLocaleString("es") + ",00";
}


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
