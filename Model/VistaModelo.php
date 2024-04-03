<?php

class VistaModelo{

    protected static function obtener_vista_modelo($vista){
        $listaPaginas = ["login","lives"];
        if(in_array($vista, $listaPaginas)){

            if(is_file("./Views/content/".$vista."-view.php")){

                $contenido = "./Views/content/".$vista."-view.php";
            }else{
                $contenido = "404";
            }
        }elseif($vista=="inicio" || $vista == "index"){
            
            $contenido = "inicio";

        }else{

            $contenido = "404";
        }

        return $contenido;
    }
}