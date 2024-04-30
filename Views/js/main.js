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
    "../assets/img/curso algebra.jpeg",
    "../assets/img/curso c++.jpeg",
    "../assets/img/curso calculo.jpeg",
    "../assets/img/curso canva.jpeg",
    "../assets/img/curso coreano.jpeg",
    "../assets/img/curso estres.jpeg",
    "../assets/img/curso excel.jpeg",
    "../assets/img/curso frances.jpeg",
    "../assets/img/curso html.jpeg",
    "../assets/img/curso ingles.jpeg",
    "../assets/img/curso japon.jpeg",
    "../assets/img/curso java.jpeg",
    "../assets/img/curso perdida de audición.jpeg",
    "../assets/img/curso peligros biologicos.jpeg",
    "../assets/img/curso peligros eletricos.jpeg",
    "../assets/img/curso photoshop.jpeg",
    "../assets/img/curso picmonkey.jpeg",
    "../assets/img/curso pixlr.jpeg",
    "../assets/img/curso probabilidad.jpeg",
    "../assets/img/curso python.jpeg",
    "../assets/img/curso sql server.jpeg",
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