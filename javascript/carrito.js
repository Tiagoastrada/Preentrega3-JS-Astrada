const cartSubtotal = document.getElementById('subtotal');
const cartTax = document.getElementById('tax');
const cartTotal = document.getElementById('total');

let carritoDeCompras = [];

function agregarAlCarrito(producto) {
    const productoEnCarrito = carritoDeCompras.find((p) => p.id === producto.id);

    if (productoEnCarrito) {
        productoEnCarrito.cantidad++;
    } else {
        carritoDeCompras.push({
            id: producto.id,
            nombre: producto.nombre,
            imagen: producto.imagen,
            precio: producto.precio,
            cantidad: 1
        });
    }

    localStorage.setItem("carrito", JSON.stringify(carritoDeCompras));

    mostrarProductosEnCarrito();
    actualizarTotal();
}

function mostrarProductosEnCarrito() {
    const tablaDeCarrito = document.getElementById("tabla-de-carrito");

    while (tablaDeCarrito.rows.length > 1) {
        tablaDeCarrito.deleteRow(1);
    }

    carritoDeCompras.forEach((producto) => {
        const fila = tablaDeCarrito.insertRow();
        const celdaImagen = fila.insertCell();
        const celdaNombre = fila.insertCell();
        const celdaCantidad = fila.insertCell();
        const celdaPrecio = fila.insertCell();
        const celdaEliminar = fila.insertCell();

        celdaImagen.innerHTML = `<img src="${producto.imagen}" alt="${producto.nombre}">`;
        celdaNombre.textContent = producto.nombre;
        celdaCantidad.innerHTML = `<input type="number" value="${producto.cantidad}" min="1">`;
        celdaPrecio.textContent = `$${producto.precio * producto.cantidad}`;
        celdaEliminar.innerHTML = `<a href="#" class="eliminar-producto">Eliminar</a>`;

        const botonEliminar = celdaEliminar.querySelector(".eliminar-producto");
        botonEliminar.addEventListener("click", () => {
            eliminarDelCarrito(producto.id);
        });

        const inputCantidad = celdaCantidad.querySelector("input");
        inputCantidad.addEventListener("change", () => {
            cambiarCantidadEnCarrito(producto.id, inputCantidad.value);
        });
    });
}

function eliminarDelCarrito(id) {
    carritoDeCompras = carritoDeCompras.filter((producto) => producto.id !== id);

    localStorage.setItem("carrito", JSON.stringify(carritoDeCompras));

    mostrarProductosEnCarrito();
    actualizarTotal();
}

function cambiarCantidadEnCarrito(id, cantidad) {
    const productoEnCarrito = carritoDeCompras.find((p) => p.id === id);

    productoEnCarrito.cantidad = parseInt(cantidad);

    localStorage.setItem("carrito", JSON.stringify(carritoDeCompras));

    mostrarProductosEnCarrito();
    actualizarTotal();
}

function vaciarCarrito() {
    carritoDeCompras = [];
    localStorage.removeItem("carrito");

    mostrarProductosEnCarrito();
    actualizarTotal();
}

const carritoEnAlmacenamientoLocal = localStorage.getItem("carrito");
if (carritoEnAlmacenamientoLocal) {
    carritoDeCompras = JSON.parse(carritoEnAlmacenamientoLocal);
}

function actualizarTotal() {
    let subtotal = 0;

    carritoDeCompras.forEach((productos) => {
        subtotal += productos.precio * productos.cantidad;
    });

    const tax = subtotal * 0.105;
    const total = subtotal + tax;

    cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
    cartTax.textContent = `$${tax.toFixed(2)}`;
    cartTotal.textContent = `$${total.toFixed(2)}`;
}

mostrarProductosEnCarrito();
actualizarTotal();