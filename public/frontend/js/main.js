function button_login(url) {
    window.location.href = url;
}


//------------------------------------------------------------------------------------//
function manejarInputBuscar() {
    var inputBuscar = document.getElementById('inputBuscar');
    var iconoBuscar = document.getElementById('iconoBuscar');

    iconoBuscar.addEventListener('click', function (event) {
        inputBuscar.style.display = 'block';
        inputBuscar.disabled = false;
        inputBuscar.focus();
        event.stopPropagation();
    });

    document.addEventListener('click', function (event) {
        if (event.target !== inputBuscar && event.target !== iconoBuscar) {
            inputBuscar.style.display = 'none';
        }
    });
}
document.addEventListener('DOMContentLoaded', manejarInputBuscar);
//------------------------------------------------------------------------------------//

var imagenes = [
    "frontend/assets/img/curso algebra.jpeg",
    "frontend/assets/img/curso c++.jpeg",
    "frontend/assets/img/curso calculo.jpeg",
    "frontend/assets/img/curso canva.jpeg",
    "frontend/assets/img/curso coreano.jpeg",
    "frontend/assets/img/curso estres.jpeg",
    "frontend/assets/img/curso excel.jpeg",
    "frontend/assets/img/curso frances.jpeg",
    "frontend/assets/img/curso html.jpeg",
    "frontend/assets/img/curso ingles.jpeg",
    "frontend/assets/img/curso japon.jpeg",
    "frontend/assets/img/curso java.jpeg",
    "frontend/assets/img/curso perdida de audición.jpeg",
    "frontend/assets/img/curso peligros biologicos.jpeg",
    "frontend/assets/img/curso peligros eletricos.jpeg",
    "frontend/assets/img/curso photoshop.jpeg",
    "frontend/assets/img/curso picmonkey.jpeg",
    "frontend/assets/img/curso pixlr.jpeg",
    "frontend/assets/img/curso probabilidad.jpeg",
    "frontend/assets/img/curso python.jpeg",
    "frontend/assets/img/curso sql server.jpeg",
];
function obtenerImagenAleatoria() {
    if (imagenesCopia.length === 0) {
        imagenesCopia = imagenes.slice();
    }
    var indiceAleatorio = Math.floor(Math.random() * imagenesCopia.length);
    return imagenesCopia.splice(indiceAleatorio, 1)[0];
}

var imagenesCopia = imagenes.slice(); 

function mostrarImagenesAleatorias(contenedorId) {
    var contenedor = document.getElementById(contenedorId);
    contenedor.innerHTML = ''; 

    for (var index = 0; index < 7; index++) {
        var imagenElemento = document.createElement('img');
        imagenElemento.src = obtenerImagenAleatoria();
        contenedor.appendChild(imagenElemento);
    }
}
//------------------------------------------------------------------------------------//
function obtenerImagenAleatoria1() {
    var indiceAleatorio1 = Math.floor(Math.random() * imagenes.length);
    return imagenes[indiceAleatorio1];
}

function mostrarImagenesAleatorias1(contenedorId) {
    var contenedor1 = document.getElementById(contenedorId);
    contenedor1.innerHTML = '';

    for (var index = 0; index < 86; index++) {
        var imagenElemento1 = document.createElement('img');
        imagenElemento1.src = obtenerImagenAleatoria1();
        contenedor1.appendChild(imagenElemento1);
    }
}

window.onload = function () {
    var contenedor1 = document.getElementById('imagen-container1');
    if (contenedor1) {
        mostrarImagenesAleatorias('imagen-container1');
    }
    var contenedor2 = document.getElementById('imagen-container2');
    if (contenedor2) {
        mostrarImagenesAleatorias('imagen-container2');
    }
    var contenedor3 = document.getElementById('imagen-container3');
    if (contenedor3) {
        mostrarImagenesAleatorias('imagen-container3');
    }
    var inferior = document.getElementById('inferior');
    if (inferior) {
        mostrarImagenesAleatorias1('inferior');
    }
    var inferior1 = document.getElementById('inferior1');
    if (inferior1) {
        mostrarImagenesAleatorias1('inferior1');
    }
};