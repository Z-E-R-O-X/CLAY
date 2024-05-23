<template>
    <Header />
    <div class="container-login">
        <div class="containerc1-login">
            <div class="row">
                <div class="col-md-3">
                    <div class="TextLayer-login">
                        <div class="Heading-login">¡Bienvenido a nuestro portal de registro!</div>
                        <div class="Paragraph-login">¡Regístrate y accede a una experiencia educativa en línea única!
                        </div>
                    </div>
                    <div class="container-imagecollage-register">
                        <div class="image-collage-register" id="inferior1"></div>
                    </div>
                </div>
                <div class="col-md-9">
                    <div class="container-login-der">
                        <h2 class="login-title">REGISTRARTE</h2>
                        <div class="row">
                            <div class="col container-left">
                                <div class="form-group">
                                    <label for="nombre" class="form-label">Nombres</label>
                                    <input type="text" id="nombre" name="nombre" class="form-input" required
                                        placeholder="Ingrese su nombre">
                                </div>
                                <div class="form-group">
                                    <label for="email" class="form-label">Email</label>
                                    <input type="email" id="email" name="email" class="form-input" required
                                        placeholder="Ingrese su correo">
                                </div>
                                <div class="form-group">
                                    <label for="password" class="form-label">Contraseña</label>
                                    <input type="password" id="password" name="password" class="form-input" required
                                        placeholder="contraseña">
                                </div>
                            </div>
                            <div class="col container-right">
                                <div class="form-group">
                                    <label for="apellido" class="form-label">Apellidos</label>
                                    <input type="text" id="apellido" name="apellido" class="form-input" required
                                        placeholder="Ingrese su apellido">
                                </div>
                                <div class="form-group">
                                    <label for="telefono" class="form-label">Numero Teléfonico</label>
                                    <div class="input-group">
                                        <select class="custom-select" id="pais">
                                            <option selected>&#x1F1E8;&#x1F1F4;</option>
                                            <option value="1">&#x1F1E8;&#x1F1F4;</option> <!-- Colombia -->
                                            <option value="2">&#x1F1FA;&#x1F1F8;</option> <!-- Estados Unidos -->
                                            <option value="3">&#x1F1E6;&#x1F1E9;</option> <!-- Francia -->
                                            <option value="4">&#x1F1EC;&#x1F1E7;</option> <!-- Alemania -->
                                            <option value="5">&#x1F1EE;&#x1F1F3;</option> <!-- Italia -->
                                            <option value="6">&#x1F1EA;&#x1F1FA;</option> <!-- Japón -->
                                            <option value="7">&#x1F1F5;&#x1F1F9;</option> <!-- Corea del Sur -->
                                            <option value="8">&#x1F1F3;&#x1F1F1;</option> <!-- Reino Unido -->
                                            <option value="9">&#x1F1EC;&#x1F1E7;</option> <!-- Argentina -->
                                            <option value="10">&#x1F1E9;&#x1F1EA;</option> <!-- Brasil -->
                                            <option value="11">&#x1F1EE;&#x1F1E9;</option> <!-- Canadá -->
                                            <option value="12">&#x1F1E6;&#x1F1EA;</option> <!-- España -->
                                            <option value="13">&#x1F1EC;&#x1F1ED;</option> <!-- México -->
                                            <option value="14">&#x1F1F0;&#x1F1F7;</option> <!-- Sudáfrica -->
                                            <option value="15">&#x1F1E7;&#x1F1FE;</option> <!-- Rusia -->
                                            <option value="16">&#x1F1FA;&#x1F1F2;</option> <!-- Turquía -->
                                            <option value="17">&#x1F1EA;&#x1F1E8;</option> <!-- China -->
                                            <option value="18">&#x1F1EB;&#x1F1F7;</option> <!-- India -->
                                            <option value="19">&#x1F1EE;&#x1F1F9;</option> <!-- Australia -->
                                            <option value="20">&#x1F1E7;&#x1F1EA;</option> <!-- Nueva Zelanda -->
                                        </select>
                                        <input type="text" id="telefono" name="telefono" class="form-input" required
                                            placeholder="Ingrese su número de teléfono"
                                            style="width: 80%; float: right;">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="password" class="form-label">Repetir Contraseña</label>
                                    <input type="password" id="password" name="password" class="form-input" required
                                        placeholder="contraseña">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <input type="checkbox" id="recuperar" name="recuperar">
                                <a class="recuperar-contraseña-login">Acepto Terminos Y Condiciones</a>
                            </div>
                            <router-link to="/login">
                                <div class="col text-end"><button class="Button-login">Enviar</button></div>
                            </router-link>
                        </div>
                        <h2 class="login-Paragraph">Registrate con: </h2>
                        <div class="row">
                            <div class="row">
                                <div class="col text-center">
                                    <div class="contenedor-redsocial mb-4">
                                        <img src="https://w7.pngwing.com/pngs/326/85/png-transparent-google-logo-google-text-trademark-logo.png"
                                            alt="Nombre de la red social">
                                        <span>Google</span>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="contenedor-redsocial mb-4">
                                        <img src="https://static.vecteezy.com/system/resources/previews/023/986/613/non_2x/facebook-logo-facebook-logo-transparent-facebook-icon-transparent-free-free-png.png"
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
                            <router-link to="/login">
                                <div class="col d-flex">
                                    <a class="Button-register">Ya Tengo Cuenta</a>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-c7">
                <div class="row align-items-center">
                    <div class="col-sm-6">
                        <div class="TextLayer">
                            <div class="Heading">¡Comienza tu prueba gratuita ahora mismo!</div>
                            <div class="Paragraph">¡Regístrate hoy mismo para obtener una prueba gratuita de AUNAR
                                Academy
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
    </div>
    <Footer />
</template>

<script>
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
export default {
    components: { Header, Footer },
    name: 'registro',
};
</script>