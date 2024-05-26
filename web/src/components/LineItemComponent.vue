<script setup>
import {ref, onMounted} from 'vue'
import {api} from '../services/api.js'
import { RouterLink } from 'vue-router';
const props = defineProps({
    userId:Number,
})


const userData = ref({})
const tagsData = ref([])
const avatarUrl = ref('src/assets/avatar_placeholder.svg') 
onMounted(fetchData)

async function fetchData(){
    try{
        const response = await api.get(`/users/${props.userId}`)
        userData.value = response.data.user
        tagsData.value = response.data.tags
        avatarUrl.value = response.data.user.avatar ? `${api.defaults.baseURL}/files/${response.data.user.avatar}`:'src/assets/avatar_placeholder.svg'

    }catch(error){
        if (error.response) {
            alert(error.response.data.message)
        } 
    }
}
</script>

<template>
    <div class="row mb-4">
        <div
            class="col-md-4 col-12 d-flex flex-md-row gap-2 align-items-md-start  mb-3 mb-md-0 align-itens-center justify-content-center">
            <div class="d-flex ratio ratio-1x1 container-img-list-item-image align-self-center">
                <img :src="avatarUrl" alt=""
                    class="img-fluid object-fit-cover border rounded-circle">
            </div>
            <div class="align-self-center">
                <p class="mb-0">{{ userData.name }}</p>
                <small class="text-body-secondary">Ultimo mudança {{ userData.updated_at }}</small>
            </div>
        </div>
        <div class="col-md-2 col-4">
            <p class="m-auto">Criado em {{ userData.created_at }}</p>
        </div>
        <div class="col-md-2 p-0 col-4 text-center">
            <p class="m-auto"> {{userData.role}}</p>
        </div>
        <div class="col-md-2 p-0 col-4 text-center">
            <p class="small"> {{userData.email}}</p>
            <p class="small"> {{userData.phone }}</p>
        </div>

        <div class="col-md-2 col text-center m-auto">
            <RouterLink :to="`/editar/${props.userId}`" class="btn btn-primary ">Editar</RouterLink>
        </div>
    </div>
</template>