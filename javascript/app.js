/ PRODUCTOS /

const productos = [
    {
        id: 1,
        nombre: "Remera oversize ",
        imagen: "../img/REMERA-1.jpeg",
        precio: 1600
    },
    {
        id: 2,
        nombre: "Remera algodón",
        imagen: "../img/REMERA-2.jpeg",
        precio: 2000
    },
    {
        id: 3,
        nombre: "Buzo oversize",
        imagen: "../img/BUZO-1.jpeg",
        precio: 4600
    },
    {
        id: 4,
        nombre: "Buzo alogodón",
        imagen: "../img/BUZO-2.jpeg",
        precio: 5000
    },
    {
        id: 5,
        nombre: "Hoodie oversize",
        imagen: "../img/HOODIE-1.jpeg",
        precio: 4900
    },
    {
        id: 6,
        nombre: "Hoodie algodón",
        imagen: "../img/HOODIE-2.jpeg",
        precio: 5500
    },
    {
        id: 7,
        nombre: "Pantalón Clásico oversize",
        imagen: "../img/PANTALON-1.jpeg",
        precio: 6500
    },
    {
        id: 8,
        nombre: "Pantalón Jogger oversize",
        imagen: "../img/PANTALON-2.jpeg",
        precio: 6000
    },
    {
        id: 9,
        nombre: "Remera manga larga",
        imagen: "../img/MANGA-LARGA.jpeg",
        precio: 1250
    },
    {
        id: 10,
        nombre: "Remera tipo top manga larga",
        imagen: "../img/MANGA-LARGA-2.jpeg",
        precio: 2000
    },
    {
        id: 11,
        nombre: "Canguro soft frisado",
        imagen: "../img/CANGURO-1.jpeg",
        precio: 5500
    },
    {
        id: 12,
        nombre: "Canguro wide cut frisado",
        imagen: "../img/CANGURO-2.jpeg",
        precio: 6000
    },
    {
        id: 13,
        nombre: "Outfit remera oversize + Jogger oversize",
        imagen: "../img/OUTFIT-1.jpeg",
        precio: 7000
    },
    {
        id: 14,
        nombre: "Outfit hoodie algodón + jogger oversize",
        imagen: "../img/OUTFIT-2.jpeg",
        precio: 10500
    }
];

function crearTarjetaDeProducto(producto) {
    const divColumna = document.createElement("div");
    const divTarjeta = document.createElement("div");
    const aImagen = document.createElement("a");
    const imgProducto = document.createElement("img");
    const h4Nombre = document.createElement("h4");
    const divRating = document.createElement("div");
    const iEstrella = document.createElement("i");
    const pPrecio = document.createElement("p");
    const botonAgregar = document.createElement("button");

    divColumna.classList.add("col-4");
    divTarjeta.classList.add("tarjeta-de-producto");
    aImagen.href = "#";
    imgProducto.src = producto.imagen;
    h4Nombre.textContent = producto.nombre;
    divRating.classList.add("rating");
    iEstrella.classList.add("fa", "fa-star");
    pPrecio.textContent = `$${producto.precio}`;
    botonAgregar.textContent = "Agregar al carrito";
    botonAgregar.classList.add("boton-agregar");

    divColumna.appendChild(divTarjeta);
    divTarjeta.appendChild(aImagen);
    aImagen.appendChild(imgProducto);
    divTarjeta.appendChild(h4Nombre);
    divTarjeta.appendChild(divRating);
    divRating.appendChild(iEstrella.cloneNode(true));
    divRating.appendChild(iEstrella.cloneNode(true));
    divRating.appendChild(iEstrella.cloneNode(true));
    divRating.appendChild(iEstrella.cloneNode(true));
    divRating.appendChild(iEstrella.cloneNode(true));
    divTarjeta.appendChild(pPrecio);
    divTarjeta.appendChild(botonAgregar);

    botonAgregar.addEventListener("click", () => {
        agregarAlCarrito(producto);
    });

    return divColumna;
}

function crearTarjetasDeProductos() {
    const contenedorDeProductos = document.getElementById("contenedor-de-productos");

    productos.forEach((producto) => {
        const tarjetaDeProducto = crearTarjetaDeProducto(producto);
        contenedorDeProductos.appendChild(tarjetaDeProducto);
    });
}

document.addEventListener("DOMContentLoaded", crearTarjetasDeProductos);