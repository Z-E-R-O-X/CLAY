document.getElementById("bars").addEventListener("click", mostrar_menu);
document.getElementById("back_menu").addEventListener("click", ocultar_menu);


menu = document.getElementById("menu-container");
background_menu = document.getElementById("back_menu");

function mostrar_menu(){
    menu.style.right = "0px";
    background_menu.style.display = "block"
}

function ocultar_menu(){
    menu.style.right = "-250px";
    background_menu.style.display = "none"
}



function button_login(ruta) {
    window.location.href = ruta;
}