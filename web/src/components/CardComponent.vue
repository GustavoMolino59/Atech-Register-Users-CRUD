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
    <div class="col">
        <div class="card h-100 ">
            <div class="ratio ratio-1x1">
                <img :src="avatarUrl" class="card-img-top"
                    :alt="`foto de perfil`">
            </div>
            <div class="card-body">
                <h5 class="card-title">{{userData.name}}</h5>
                <div class="d-flex justify-content-between gap-2">
                    <div>
                        <small class=" text-body-secondary">Nome</small>
                        <p class="small">{{userData.name}}</p>
                    </div>
                    <div>
                        <small class=" text-body-secondary">Email</small>
                        <p class="small">{{userData.email}}</p>
                    </div>
                    <div>
                        <small class=" text-body-secondary">Telefone</small>
                        <p class="small ">{{userData.phone}}</p>
                    </div>
                </div>
                <div class="d-flex">
                    <p>
                        {{userData.description}}
                    </p>
                </div>
                <div class="d-flex border rounded p-2 flex-wrap gap-1" style="min-height: 40px;">
                    <span v-for="tag in tagsData" :key="tag.id" class="badge rounded-pill text-bg-secondary">{{ tag.title }}</span>
                </div>
                <div class="d-flex align-items-center justify-content-center">
                    <RouterLink :to="`/editar/${props.userId}`" class="btn btn-primary btn-lg mt-3">Editar</RouterLink>
                </div>
                
            </div>
            <div class="card-footer">
                <small class="text-body-secondary">Last updated  {{ userData.updated_at }}</small>
            </div>
        </div>
    </div>

</template>