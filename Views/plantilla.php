<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
        <?= COMPANY ?>
    </title>
    <script src="https://kit.fontawesome.com/9b2b8e0f24.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="<?= SERVERURL ?>/Views/css/styles.css">
    <div class="header">
        <div class="logo-container">
            <div class="logo-text">AUNAR ACADEMY ONLINE</div>
            <img src="<?= SERVERURL ?>/Views/assets/img/logo.png">
        </div>
        <div class="menu-container">
            <button class="menu-item button button1 id="inicio"">Inicio</button>
            <button class="menu-item button">Cursos y Diplomados</button>
            <button class="menu-item button">Lives</button>
            <button class="menu-item button">Mi lista</button>
        </div>
        <div class="login-container">
            <i class="fa-solid fa-magnifying-glass icon" style="color: #ffffff;"></i>
            <i class="fa-regular fa-bell icon" style="color: #ffffff;"></i>
            <button class="login-button" onclick="button_login('<?=SERVERURL?>login/')">Login</button>
        </div>
    </div>
</head>

<body>
    <?php

    require_once "./Controller/VistaControlador.php";

    $IVC = new VistaControlador();

    $vistasPaginas = $IVC->obtener_vista_controlador();

    if ($vistasPaginas == "inicio" || $vistasPaginas == "404") {

        require_once "./Views/content/" . $vistasPaginas . "-view.php";

    } else {

        include $vistasPaginas;
    }

    ?>
<script src="<?= SERVERURL ?>/Views/js/main.js"></script>
</body>

</html>