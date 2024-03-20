<?php

require_once "./Configuration/App.php";

require_once "./Controller/VistaControlador.php";

$plantillas = new VistaControlador();

$plantillas->obtener_plantilla_controlador();