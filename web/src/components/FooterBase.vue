<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>

    <footer class="container-fluid mt-4 bg-semi-light">
        <div class="row">
            <div class="col-2 d-flex justify-content-center align-items-center">
                <img class="img-fluid" src="..\assets\Logo_Atech.webp" alt="Logotipo atech tech" />
            </div>
            <div class="col-8">
                <ul>
                    <p class="fw-bold fs-5">Explore o site</p>
                    <nav class="nav flex-column">
                        <RouterLink class="nav-link text-dark" to="/cadastro">Cadastro de usuário</RouterLink>
                        <RouterLink class="nav-link text-dark" to="/listar">Listar usuário</RouterLink>
                        <RouterLink class="nav-link text-dark" to="/about">Sobre o site</RouterLink>
                    </nav>
                </ul>
            </div>
            <div class="col-2 d-flex flex-column justify-content-end align-items-end">
                <p>Feito por</p>
                <p class="fw-bold">Gustavo Molino</p>
            </div>
        </div>
    </footer>

</template>