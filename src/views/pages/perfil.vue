<template>
       <Header />
           <div class="perfil">
        <div class="container-c1">
            <div class="row gutters-sm">
                <div class="col-md-4 mb-3">
                    <div class="card parte-1">
                        <div class="card-body">
                            <div class="d-flex flex-column align-items-center text-center">
                                <img src="frontend/assets/img/perfil.jpg" class="rounded-circle" width="200"
                                    style="border: 2px solid black;">
                                <span class="badge bg-white rounded-circle">
                                    <i class="fa-solid fa-pencil" style="color: #FFD43B;"></i>
                                </span>
                                <div class="mt-3">
                                    <h4>Camilo Ramirez</h4>
                                    <p class="mb-1">Estudiente</p>
                                    <button class="btn mensaje">Mensaje</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card parte-1-1">
                        <h3 class="card-header d-flex justify-content-between">Sobre Mi <small
                                style="font-size: 20px;">Editar <i class="fa-solid fa-pencil"
                                    style="color: #FFD43B;"></i></small></h3>
                        <div class="card-body">
                            <p class="card-text">Soy programador con pasión por el desarrollo móvil y web. Aunque
                                todavía
                                sigo estudiando mi carrera, estoy ansioso por aprender y crecer en estas áreas. Mi
                                objetivo
                                es adquirir experiencia y habilidades para crear aplicaciones emocionantes que impacten
                                positivamente en los usuarios.</p>
                        </div>
                    </div>
                    <div class="card mt-3 parte-2">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                <h6 class="mb-0"><span><i class="fa-solid fa-globe"></i></span>Website</h6>
                                <span class="text-secondary">https://zerox.com</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                <h6 class="mb-0"><span><i class="fa-brands fa-github"></i></span>Github</h6>
                                <span class="text-secondary">zerox</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                <h6 class="mb-0"><span><i class="fa-brands fa-square-x-twitter"></i></span>Twitter</h6>
                                <span class="text-secondary">@zerox</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                <h6 class="mb-0"><span><i class="fa-brands fa-square-instagram"></i></span>Instagram
                                </h6>
                                <span class="text-secondary">zerox</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                <h6 class="mb-0"><span><i class="fa-brands fa-square-facebook"></i></span>Facebook</h6>
                                <span class="text-secondary">zerox</span>
                            </li>
                            <li
                                class="list-group-item d-flex justify-content-between align-items-center flex-wrap editar">
                                <h6 class="mb-0"><span><i class="fa-solid fa-pencil"
                                            style="color: #FFD43B;"></i></span>Editar</h6>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="card mb-3 parte-3">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-sm-3 t1">
                                    <h6 class="mb-0">Nombre:</h6>
                                </div>
                                <div class="col-sm-9 r1">
                                    Camilo Ramirez
                                </div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-sm-3 t1">
                                    <h6 class="mb-0">Email:</h6>
                                </div>
                                <div class="col-sm-9 r1">
                                    zerox000@gmail.com
                                </div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-sm-3 t1">
                                    <h6 class="mb-0">Celular:</h6>
                                </div>
                                <div class="col-sm-9 r1">
                                    (+57) 3208674534
                                </div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-sm-3 t1">
                                    <h6 class="mb-0">Pais:</h6>
                                </div>
                                <div class="col-sm-9 r1">
                                    Colombia
                                </div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-sm-12">
                                    <a class="btn editar">Editar</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card mb-3 parte-4">
                        <div class="card-body">
                            <div class="row text-center">
                                <div class="col">
                                    <h1>02 <span><i class="fa-solid fa-user-plus"></i></span></h1>
                                    <h6>Cursos inscritos</h6>
                                </div>
                                <div class="col">
                                    <h1>01 <span><i class="fa-solid fa-check-double"></i></span></h1>
                                    <h6>Cursos completados</h6>
                                </div>
                                <div class="col">
                                    <h1>00 <span><i class="fa-solid fa-graduation-cap"></i></span></h1>
                                    <h6>Diplomas obtenidos</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card mb-3 parte-5">
                        <div class="card-header">
                            Mis cursos
                        </div>
                        <div class="row text-center">
                            <div class="col d-flex flex-wrap">
                                <div class="curso c1 mb-3 me-3 flex-fill">
                                    <img src="frontend/assets/img/curso python.jpeg" class="text-center"
                                        style="width: 180px; height: 180px;">
                                    <h5 class="card-title">Python</h5>
                                    <p class="card-text">332 Alumnos inscritos</p>
                                    <p><i class="fa-solid fa-star" style="color: #FFFF00;"></i> 4.78<i
                                            class="fa-solid fa-arrows-rotate estado" style="color: blue;"></i> En
                                        proceso
                                    </p>
                                    <a href="#" class="btn curbtn">Continuar</a>
                                </div>
                                <div class="curso mb-3 me-3 flex-fill">
                                    <img src="frontend/assets/img/curso java.jpeg" class="text-center"
                                        style="width: 180px; height: 180px;">
                                    <h5 class="card-title">Java</h5>
                                    <p class="card-text">251 Alumnos inscritos</p>
                                    <p><i class="fa-solid fa-star" style="color: #FFFF00;"></i> 4.52<i
                                            class="fa-solid fa-arrows-rotate estado" style="color: blue;"></i> En
                                        proceso
                                    </p>
                                    <a href="#" class="btn curbtn">Continuar</a>
                                </div>
                                <div class="curso mb-3 me-3 flex-fill">
                                    <img src="frontend/assets/img/curso html.jpeg" class="text-center"
                                        style="width: 180px; height: 180px;">
                                    <h5 class="card-title">HTML</h5>
                                    <p class="card-text">543 Alumnos inscritos</p>
                                    <p><i class="fa-solid fa-star" style="color: #FFFF00;"></i> 4.87<i
                                            class="fa-solid fa-circle-check estado" style="color: green;"></i>
                                        Completado
                                    </p>
                                    <a href="#" class="btn curbtn">Revisar curso</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
  name: 'perfil',
};
</script>