<template>
  <header>
    <nav class="navbar navbar-expand-lg header">
      <div class="container-fluid container_header">
        <router-link to="/">
          <a class="navbar-brand" href="index.html">
          <img
            src="frontend/assets/img/logo2.png"
            alt="Logo"
            width="80"
            height="74"
            class="d-inline-block align-text-top"
          />
        </a>
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="offcanvas offcanvas-end ocultar"
          tabindex="-1"
          id="navbarSupportedContent"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title">Menu</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <div
              class="navbar-nav me-auto mb-2 mb-lg-0 container_menu d-flex justify-content-center"
              id="menu-container"
            >
              <router-link class="iten_menu dk" to="/">Inicio</router-link>
              <router-link class="iten_menu dk" to="/">Cursos y Diplomados</router-link>
              <router-link class="iten_menu dk" to="/">Lives</router-link>
              <router-link class="iten_menu dk" to="/"> Mi lista</router-link>
            </div>

            <div class="container_bus_lon d-flex justify-content-between">
              <form
                class="container_buscador input-group flex-nowrap"
                role="search"
              >
                <input
                  id="inputBuscar"
                  class="form-control"
                  type="search"
                  placeholder="Buscar"
                  aria-label="Buscar"
                  aria-describedby="addon-wrapping"
                  style="display: none"
                />
                <span id="iconoBuscar" class="input-group-text"
                  ><i
                    class="fa-solid fa-magnifying-glass icon icon1"
                    style="color: #ffffff"
                  ></i
                ></span>
              </form>
              <div class="login-container m2">
                <router-link class="login-button" to="/login">Login</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  name: 'Header',
};
</script>
