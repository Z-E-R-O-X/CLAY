<template>
    <Header />
  <div class="container-RecuContra">
    <h2>Recuperación de Contraseña</h2>
    <form id="recoveryForm">
      <label for="email">Correo Electrónico con el que se registro:</label>
      <input type="email" id="email" name="email" required>
      <router-link  to="/login">
        <button class="button-recuperar" type="submit">Recuperar Contraseña</button>
 </router-link>
    </form>
    <div id="message"></div>
  </div>
  <Footer />
</template>

<script>
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
export default {
  components: { Header, Footer },
  name: 'recuperarclave',
};
</script>