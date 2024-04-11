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
    "Views/assets/img/curso algebra.jpeg",
    "Views/assets/img/curso c++.jpeg",
    "Views/assets/img/curso calculo.jpeg",
    "Views/assets/img/curso canva.jpeg",
    "Views/assets/img/curso coreano.jpeg",
    "Views/assets/img/curso estres.jpeg",
    "Views/assets/img/curso excel.jpeg",
    "Views/assets/img/curso frances.jpeg",
    "Views/assets/img/curso html.jpeg",
    "Views/assets/img/curso ingles.jpeg",
    "Views/assets/img/curso japon.jpeg",
    "Views/assets/img/curso java.jpeg",
    "Views/assets/img/curso perdida de audición.jpeg",
    "Views/assets/img/curso peligros biologicos.jpeg",
    "Views/assets/img/curso peligros eletricos.jpeg",
    "Views/assets/img/curso photoshop.jpeg",
    "Views/assets/img/curso picmonkey.jpeg",
    "Views/assets/img/curso pixlr.jpeg",
    "Views/assets/img/curso probabilidad.jpeg",
    "Views/assets/img/curso python.jpeg",
    "Views/assets/img/curso sql server.jpeg",
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
        imagenElemento.src = "http://localhost/CLAY/" + obtenerImagenAleatoria();
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

    for (var index = 0; index < 72; index++) {
        var imagenElemento1 = document.createElement('img');
        imagenElemento1.src = "http://localhost/CLAY/" + obtenerImagenAleatoria1();
        contenedor1.appendChild(imagenElemento1);
    }
}
window.onload = function () {
    mostrarImagenesAleatorias('imagen-container1');
    mostrarImagenesAleatorias('imagen-container2');
    mostrarImagenesAleatorias('imagen-container3');
    mostrarImagenesAleatorias1('inferior');
};