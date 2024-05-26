<script setup>


</script>


<template>
<main class="container">
    <h1>Sobre o site</h1>
    <div class="card p-2">
        <h2>Sobre o desenvolvimento</h2>
        <p>O site foi inteiramente construido por mim, Gustavo Molino Teixeira Alves, para incrição na vaga de desenvolvedor JR na empresa Atech Tech.</p>
    
        <h2>FrontEnd</h2>
        <h3> VueJs + Bootstrap + Vite + axios
        </h3>
        <p>O site foi construido em VueJs, com javascript. O framework de desenvolvimento frontend utilizado foi VueJs3 junto com a biblioteca de componentes Bootstrap.<br>O Portal foi construido primeiramente que a API e preparado para receber os dados</p>

        <h3>Responsividade</h3>
        <p>O site é totalmente responsivo em todas as telas que ele possui. Os formulários e buscas se adaptam conforme o tamanho da tela e as necessidades do usuário.</p>
        
        <h3>Conexão com API</h3>
        <p> Desenvolvi uma API baseada na biblioteca Axios para me comunicar com a API Rest que eu criei para o sistema. ela tem como base url <strong> http://localhost:3333</strong> que é a porta que a API roda</p>
        
        <h2>Backend</h2>
        <h3>NodeJS + SQLite + Knex + Cors</h3>
        <p>O backend foi criado especificamente para esse sistema, de modo que, criei um banco de dados SQLite que possui 2 tabelas, <strong>users</strong> e <strong>tags</strong>. No qual Users registra todos os dados dos usuários e a tabela tags registra o titulo e o user_id de determinada tag.</p>

        <h3>Metodos disponivels</h3>
        <p>A API foi planejada para realizar todas as operações CRUD, de modo que é possivel manejar completamente todos os usuários. Também fiz a adição de alguams features como a pesquisa de usuários e adiçãod e imagens e tags</p>
    
        <h3> Rotas</h3>
        <P> As rotas são:</P>
        <ul>
            <li>Index: GET - localhost:3333/users/?title='' - Utilizado para as pesquisas</li>
            <li>Delete: DELETE - localhost:3333/users/:id'' - Utilizado para deletar usuários</li>
            <li>Show: GET - localhost:3333/users/:id'' - Utilizado para retornar as infos de um único usuários</li>
            <li>UPDATE: PUT - localhost:3333/users/:id'' - Utilizado para editar e alterar os usuários</li>
            <li>CREATE: POST - localhost:3333/users/'' - Utilizado para Criar novos  usuários</li>
            <li>AVATAR: PATCH - localhost:3333/avatar/:id'' - Utilizado para adicionar imagens aos usuários</li>
        </ul>

        
    </div>

</main>


</template>