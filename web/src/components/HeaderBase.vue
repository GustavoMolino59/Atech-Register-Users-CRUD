<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-semi-light">
            <div class="container-fluid ">
                <div class="d-flex justify-content-start">
                    <a class="navbar-brand " href="/">
                        <img class="img-fluid " src="..\assets\Logo_Atech.webp" alt="Logotipo atech tech" width="150" />
                    </a>
                </div>
                
                <div class="d-flex justify-content-end w-100">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse " id="navbarSupportedContent">
                        
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <RouterLink class="nav-link" aria-current="page" to="/about">Sobre o Site</RouterLink>
                            </li>

                        </ul>

                    </div>
                </div>
            </div>
        </nav>
       
    </header>
</template>
<script setup>
</script>

<style scoped></style>
