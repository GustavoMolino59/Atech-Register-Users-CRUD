<script setup>
const props = defineProps({
    actualPage: String,
})
</script>


<template>
    <ul class="nav nav-tabs m-3">
        <li class="nav-item">
            <RouterLink :class="['nav-link', props.actualPage == 'home'? 'active': '']" aria-current="page" to="/">Home
            </RouterLink>
        </li>
        <li class="nav-item">
            <RouterLink :class="['nav-link', props.actualPage == 'cadastro'? 'active': '']" to="/cadastro">Cadastrar
                usuário</RouterLink>
        </li>
        <li class="nav-item">
            <RouterLink :class="['nav-link', props.actualPage == 'listar'? 'active': '']" to="/listar">Ver todos
            </RouterLink>
        </li>

    </ul>

</template>