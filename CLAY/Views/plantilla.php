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
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

    <nav class="navbar navbar-expand-lg fixed-top header">
        <div class="container-fluid container_header">
            <a class="navbar-brand" href="#">
                <img src="<?= SERVERURL ?>/Views/assets/img/logo2.png" alt="Logo" width="80" height="74"
                    class="d-inline-block align-text-top">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="navbarSupportedContent">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title">Menu</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div class="navbar-nav me-auto mb-2 mb-lg-0 container_menu d-flex justify-content-center"
                        id="menu-container">
                        <button class="iten_menu dk">Inicio</button>
                        <button class="iten_menu dk">Cursos y Diplomados</button>
                        <button class="iten_menu dk">Lives</button>
                        <button class="iten_menu dk">Mi lista</button>
                    </div>

                    <div class="container_bus_lon d-flex justify-content-between">
                        <form class="container_buscador input-group flex-nowrap" role="search">
                            <span class="input-group-text" id="addon-wrapping"><i class="fa-solid fa-magnifying-glass icon icon1" style="color: #FFFFFF;"></i></span>
                            <input class="form-control" type="search" placeholder="Buscar" aria-label="Buscar"
                                aria-describedby="addon-wrapping">
                            <button class="btn" type="submit">Buscar</button>
                        </form>

                        <div class="login-container m2">
                            <button class="login-button" onclick="button_login('<?= SERVERURL ?>login/')">Login</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </nav>


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>
    <script src="<?= SERVERURL ?>/Views/js/main.js"></script>

<body>

</body>

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
</body>

</html>