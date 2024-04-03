<link rel="stylesheet" href="<?= SERVERURL ?>/Views/css/styles.css">
</head>
<body>
<div class="center-container">
  <div class="form-container">
    <h2>Iniciar Sesion</h2>
    <form action="home-view.php" method="GET">
      <div class="mb-3">
        <label for="email">Correo Electronico:</label>
        <input type="email" class="form-control" id="email" placeholder="Ingrese el correo" name="email">
      </div>
      <div class="mb-3">
        <label for="pwd">Contraseña:</label>
        <input type="password" class="form-control" id="pwd" placeholder="Ingrese la contraseña" name="pswd">
      </div>
      <button type="submit" class="btn btn-primary">Iniciar Sesion</button>
      <p class="mt-3">O</p>
      <button type="submit" class="btn btn-secundario">Ingresar con codigo</button>
      <p class="mt-3"><a href="recuperar-contrasena.php">¿Olvidaste tu contraseña? </a></p>
      <div class="form-check mb-3">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" name="remember"> Recuerdame
        </label>
      </div>
    </form>
    <p class="mt-3">¿No tienes una cuenta? <a href="registro.php">Crea una aquí</a>.</p>
  </div>
</div>