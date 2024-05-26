<script setup>
import CardComponent from '../components/CardComponent.vue'
import LineItemComponent from '../components/LineItemComponent.vue'
import { PhCards, PhRows } from '@phosphor-icons/vue'
import { ref, onMounted, watch} from 'vue'
import {api} from '../services/api.js'
import NavLinkComponent from '../components/NavLinkComponent.vue'


const title = ref('')
const data = ref([])
onMounted(fetchData)

async function fetchData(){
    try{
        const response = await api.get(`/users/?title=${title.value}`)
        data.value = response.data
        console.log(response.data)
    }catch(error){
        if (error.response) {
            alert(error.response.data.message)
        } else {
            alert("Não foi possível conectar")
        }
    }
}

watch(title, fetchData)

const listVisualization = ref(false)
</script>


<template>
    <NavLinkComponent actualPage="listar"/>
    <main class="container">
        <h1>Usuários Cadastrados</h1>
        <div class="cointainer-fluid card mt-2 p-2">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <label for="search-input" class="form-label">Telefone</label>
                        <input v-model="title"  type="text" class="form-control" id="search-input"
                            placeholder="Busque por Nome, email, telefone ou tags">
                    </div>
                </div>
            </div>
            <div class="container mt-2">
                <div class="row">
                    <div class="col d-flex align-items-baseline justify-content-end gap-2">

                        <p class="fw-lighter fs-6">Visualização</p>
                        <PhCards />
                        <div class="form-check form-switch">
                            <input  v-model="listVisualization" class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                            <label class="form-check-label" for="flexSwitchCheckDefault"></label>
                        </div>
                        <PhRows />
                    </div>
                </div>
                <div  :class="['row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4', listVisualization? 'collapse': '']">
                    <CardComponent v-for="user in data" :userId="user.id" :key="user.id" />
                </div>
                <div :class="['row row-cols-1 p-2', listVisualization? '': 'collapse']">
                    <div class="col container-fluid ">
                        <LineItemComponent v-for="user in data" :userId="user.id" :key="user.id"/>
                    </div>
                </div>
            </div>

        </div>
    </main>
</template>
