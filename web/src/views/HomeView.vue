<script setup>
import { PhPlus } from '@phosphor-icons/vue'
import { RouterLink } from 'vue-router';
import NavLinkComponent from '../components/NavLinkComponent.vue'
</script>

<template>
  <NavLinkComponent actualPage="home" />
  <main class="container ">

    <div class="d-flex justify-content-between ">
      <h1>Sistema de Cadastro de usuários</h1>
      <RouterLink class="btn btn-secondary" to="/cadastro">
        <ph-plus :size="20" />
        Adicionar Usuário
      </RouterLink>
    </div>
    <div class="container-fluid card mt-2 ">
      <div class="d-flex flex-column gap-2 p-2 ali">
        <h2>Como funciona?</h2>
        <div class="d-flex align-items-center justify-content-center gap-1 flex-md-row flex-column">
          <p>O sistema apresenta três abas na partede cima, por meio delas você pode efetuar o cadastro do usuário e a
            visualização do usuário</p>
          <div class=" d-flex justify-content-center align-items-center ">
            <img src="..\assets\navbar-exemple.webp" alt="Imagem da Navbar" class="img-fluid">
          </div>
        </div>
        <div class="mt-2 gap-1 d-flex align-items-center justify-content-center flex-md-row flex-column-reverse">
          <div class=" d-flex justify-content-center align-items-center">
            <img src="..\assets\RegisterPagePrint.webp" alt="Imagem da página de registros" class="img-fluid">
          </div>
          <p>Na tela de Usuário basta preencher os dados do usuário corretamente e clicar em cadastrar, que o usuário
            será registrado na API e no banco de dados</p>
        </div>
        <div class="mt-2 gap-1 d-flex align-items-center justify-content-center flex-md-row flex-column">
          <p>Na tela de Listagem, você pode ver todos os usuários atuais no sistema, de modo que pode-se editar os dados
            de um respectivo usuário clicando em editar. É possível alternar o modo de visualização entre cards e
            linhas. Ficando a cargo do usuário</p>
          <div class=" d-flex flex-column gap-1 justify-content-center align-items-center">
            <img src="..\assets\ListaUsersPrint.webp" alt="Lista usuarios como card" class="img-fluid">
            <img src="..\assets\UserListPrint.webp" alt="Lista de usuários como List" class="img-fluid">
          </div>
        </div>
        <div class="mt-2 gap-1 d-flex align-items-center justify-content-center flex-md-row flex-column">
          <div class=" d-flex flex-column gap-1 justify-content-center align-items-center">
            <img src="..\assets\CadastroUserPrint.webp" alt="Imagem da tela de edição" class="img-fluid">
          </div>
          <p>Ao clicar em Editar, você será direcionado a uma tela semelhante a tela de Registro, contudo já com os dados daquele usuário cadastrados e com a posibilidade de atualziar e/ou remover o usuário</p>
        </div>
      </div>
    </div>
  </main>

</template>
