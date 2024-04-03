//------------------------------------------------------------------------------------//
function manejarInputBuscar() {
    // Obtener referencias a los elementos del DOM
    var inputBuscar = document.getElementById('inputBuscar');
    var iconoBuscar = document.getElementById('iconoBuscar');

    // Agregar controlador de eventos de clic al ícono de búsqueda
    iconoBuscar.addEventListener('click', function (event) {
        // Mostrar el input
        inputBuscar.style.display = 'block';
        // Habilitar el input para escribir
        inputBuscar.disabled = false;
        // Poner el foco en el input
        inputBuscar.focus();
        // Detener la propagación del evento para evitar que se propague al document
        event.stopPropagation();
    });

    // Agregar controlador de eventos de clic al document
    document.addEventListener('click', function (event) {
        // Ocultar el input si se hace clic en cualquier parte del documento excepto en el input
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
    "Views/assets/img/curso kotlin.jpeg",
];
function obtenerImagenAleatoria() {
    var indiceAleatorio = Math.floor(Math.random() * imagenes.length);
    return imagenes.splice(indiceAleatorio, 1)[0];
}
function mostrarImagenesAleatorias(contenedorId) {
    var contenedor = document.getElementById(contenedorId);
    contenedor.innerHTML = ''; 

    for (var index = 0; index < 7; index++) {
        var imagenElemento = document.createElement('img');
        imagenElemento.src = "http://localhost/CLAY/" + obtenerImagenAleatoria();
        contenedor.appendChild(imagenElemento);
    }
}
window.onload = function() {
    mostrarImagenesAleatorias('imagen-container1');
    mostrarImagenesAleatorias('imagen-container2');
    mostrarImagenesAleatorias('imagen-container3');
};
//------------------------------------------------------------------------------------//