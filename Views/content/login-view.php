<link rel="stylesheet" href="<?= SERVERURL ?>/Views/css/styles.css">
<div class="container-login">
  <div class="containerc1-login">
    <div class="row">
      <div class="col-md-3">
        <div class="TextLayer-login">
          <div class="Heading-login">¡Bienvenido a nuestro portal de acceso!</div>
          <div class="Paragraph-login">¡Inicia sesión y sumérgete en la experiencia educativa en línea!</div>
        </div>
        <div class="container-imagecollage-login">
          <div class="image-collage-login" id="inferior1"></div>
        </div>
      </div>
      <div class="col-md-9">
        <div class="container-login-der">
          <h2 class="login-title">INICIAR SESIÓN</h2>
          <div class="row">
            <div class="col container-left">
              <div class="form-group">
                <label for="email" class="form-label">Email</label>
                <input type="email" id="email" name="email" class="form-input" required placeholder="Ingrese su correo">
              </div>
            </div>
            <div class="col container-right">
              <div class="form-group">
                <label for="password" class="form-label">Contraseña</label>
                <input type="password" id="password" name="password" class="form-input" required required
                  placeholder="contraseña">
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col"><a class="recuperar-contraseña-login">Recuperar Contraseña</a></div>
            <div class="col text-end"><button class="Button-login" onclick="button_login('<?= SERVERURL ?>perfil/')">Log in</button></div>
          </div>
          <h2 class="login-Paragraph">Inicia con: </h2>
          <div class="row">
            <div class="row">
              <div class="col text-center">
                <div class="contenedor-redsocial mb-4">
                  <img
                    src="https://w7.pngwing.com/pngs/326/85/png-transparent-google-logo-google-text-trademark-logo.png"
                    alt="Nombre de la red social">
                  <span>Google</span>
                </div>
              </div>
              <div class="col">
                <div class="contenedor-redsocial mb-4">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/023/986/613/non_2x/facebook-logo-facebook-logo-transparent-facebook-icon-transparent-free-free-png.png"
                    alt="Nombre de la red social">
                  <span>Facebook</span>
                </div>
              </div>
              <div class="col">
                <div class="contenedor-redsocial mb-4">
                  <img src="https://cdn.freebiesupply.com/images/large/2x/apple-logo-transparent.png"
                    alt="Nombre de la red social">
                  <span>Apple</span>
                </div>
              </div>
            </div>
            <div class="col d-flex">
              <a href="<?= SERVERURL ?>registro/" class="Button-register">Regístrate</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-c7">
      <div class="row align-items-center">
        <div class="col-sm-6">
          <div class="TextLayer">
            <div class="Heading">¡Comienza tu prueba gratuita ahora mismo!</div>
            <div class="Paragraph">¡Regístrate hoy mismo para obtener una prueba gratuita de AUNAR Academy
              Online!</div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="ButtonLayer">
            <button class="Button-plan">Comienza una Prueba Gratuita</button>
          </div>
        </div>
      </div>
      <div class="image-collage" id="inferior"></div>
    </div>
  </div>
  <script src="<?= SERVERURL ?>/Views/js/main.js"></script>