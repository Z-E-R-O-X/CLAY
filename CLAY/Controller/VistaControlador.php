<?php

require_once "./Model/VistaModelo.php";

class VistaControlador extends VistaModelo{

    public function obtener_plantilla_controlador(){

        return require_once "./Views/plantilla.php";
    }

    public function obtener_vista_controlador(){
        
        if(isset($_GET['views'])){

            $ruta = explode("/", $_GET['views']);

            $respuesta = VistaModelo::obtener_vista_modelo($ruta[0]);

        }else{

            $respuesta = "inicio";
        }

        return $respuesta;
    }
}