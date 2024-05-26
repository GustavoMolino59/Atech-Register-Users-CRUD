<script setup>
import { PhUpload, PhPlus } from '@phosphor-icons/vue'
import { ref } from 'vue'
import { api } from '../services/api.js'
import { vMaska } from "maska"
import NavLinkComponent from '../components/NavLinkComponent.vue'

const email = ref('')
const name = ref('')
const phone = ref('')
const role = ref('')
const actualTag = ref('')
const tags = ref([])
const description = ref('')
const avatarUrl = ref('src/assets/avatar_placeholder.svg')


//validations
const emailError = ref(false)
const nameError = ref(false)


const avatarFile = ref(null)

function handleAppendTag() {
    tags.value.push(actualTag.value);
}

function removeTag(tag) {
    tags.value = tags.value.filter(t => t !== tag);
}

function handleFileChange(event) {
    const file = event.target.files[0]
    avatarFile.value = file

}

async function handleUser() {
    try {
        validateForm()
        if (!emailError.value && !nameError.value) {
            const response = await api.post('/users', {
                email: email.value,
                name: name.value,
                phone: phone.value,
                role: role.value,
                description: description.value,
                tags: tags.value
            })
            if (avatarFile.value) {
                const fileUploadForm = new FormData() //Classe utilizado para conjunto chave:valor usada pra enviar fomulario e upload
                fileUploadForm.append("avatar", avatarFile.value) //Adiciona a chave/valor avatar: avatar file
                console.log(fileUploadForm)
                const response2 = await api.patch(`/users/avatar/${response.data}`, fileUploadForm) //Faz o upload
                avatarUrl.value = `${api.defaults.baseURL}/files/${response2.data.avatar}`
                //Pega o local onde foi armazenado o file e passa para user avatar
            }
            alert('user cadastrado com sucesso')
        }
    } catch (error) {
        if (error.response) {
            alert(error.response.data.message)
        } else {
            alert("Não foi possível conectar")
        }
    }
}


function validateForm() {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    emailError.value = emailPattern.test(email.value) ? false : true;

    const namePattern = /^(?:[a-zA-ZÀ-ÖØ-öø-ÿ]+\s(?:[a-zA-ZÀ-ÖØ-öø-ÿ]+\s?)+)$/;
    nameError.value = namePattern.test(name.value) ? false : true;


}

</script>


<template>
    <NavLinkComponent actualPage="cadastro" />
    <div :class="['toast align-items-center position-fixed bottom-0 end-0 p-3 z-3',avatarFile? 'show':'' ]" role="alert" aria-live="assertive"
        aria-atomic="true">
        <div class="d-flex">
            <div class="toast-body">
                Foto Enviada
            </div>
            <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
    </div>
    <main class="container ">

        <h1 class="text-dark">Cadastro de Usuário</h1>
        <div class="cointainer-fluid card mt-2 p-2">
            <div class="row d-flex align-items-center justify-content-center">
                <div class="col ratio ratio-1x1 container-img-profile flex-fill">
                    <img :src="avatarUrl" class="img-fluid rounded-circle">
                </div>
            </div>

            <form id="registration-form needs-validation" novalidate @submit.prevent="onSubmit">
                <div class="container-fluid mt-2 p-2 ">
                    <div class="row mb-2">
                        <div class="col ">
                            <div class="d-flex pt-4">
                                <div class="input-group d-flex align-itens-center justify-content-center">
                                    <span class="input-group-text ">
                                        <PhUpload :size="15" />
                                    </span>
                                    <label for="input-user-image" class="p-2 border ">imagem do usuário</label>
                                    <input type="file" @change="handleFileChange" class="form-control collapse"
                                        id="input-user-image">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4 col-12">
                            <div class="mb-3">
                                <label for="email-input" class="form-label">Email do usuário</label>
                                <input type="email" :class="['form-control', emailError ? 'is-invalid' : '']"
                                    id="email-input" placeholder="joao@email.com" required v-model="email">
                                <div :id="`passwordHelpBlock-email`" class="form-text">
                                    *Obrigatório
                                </div>
                                <div class="invalid-feedback">
                                    Adicione um email válido
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-12">
                            <div class="mb-3">
                                <label for="name-input" class="form-label">Nome do usuário</label>
                                <input type="text" :class="['form-control', nameError ? 'is-invalid' : '']"
                                    id="name-input" placeholder="joao da silva" required v-model="name">
                                <div :id="`passwordHelpBlock-name`" class="form-text">
                                    *Obrigatório
                                </div>
                                <div class="invalid-feedback">
                                    Adicione um nome válido
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-12">
                            <div class="mb-3">
                                <label for="phone-input" class="form-label">Telefone</label>
                                <input v-maska data-maska="(##)# ####-####" type="text" class="form-control"
                                    id="phone-input" placeholder="(99)99999999" v-model="phone">
                                <div class="invalid-feedback">
                                    Adicione um telefone válido
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4 col-12 mt-4">
                            <label for="cargo-dropdown">Cargo</label>
                            <select id="cargo-dropdown" class="form-select bg-semi-light"
                                aria-label="Default select example" v-model="role">

                                <option value="Diretor">Diretor</option>
                                <option value="Coordenador">Coordenador</option>
                                <option value="Gerente">Gerente</option>
                                <option value="Analista">Analista</option>
                                <option value="Estagiario" selected>Estagiário</option>
                            </select>
                        </div>
                        <div class="col-md-8 col-12">
                            <label>Habilidades</label>
                            <div class="d-flex flex-wrap gap-2 border rounded p-2">
                                <div class="" style="width:150px;">
                                    <div class="input-group">
                                        <input type="text" class="form-control" placeholder="NodeJS"
                                            aria-label="Recipient's username" aria-describedby="button-addon2"
                                            v-model="actualTag">
                                        <button @click="handleAppendTag" class="btn btn-outline-secondary" type="button"
                                            id="button-addon2">
                                            <PhPlus />
                                        </button>
                                    </div>
                                </div>
                                <span v-for="tag in tags" :key="tag.id"
                                    class="badge text-bg-secondary d-flex align-items-center justify-content-center gap-1">{{
                                        tag }}
                                    <button @click="removeTag(tag)" class="bg-light btn-close">
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col">
                            <div class="form-floating">
                                <textarea style="height: 100px" class="form-control" placeholder="Leave a comment here"
                                    id="floatingTextarea" v-model="description"></textarea>
                                <label for="floatingTextarea">Descrição do usuário</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 text-center mt-5">
                    <button class="btn btn-secondary btn-lg" type="submit" @click="handleUser">Cadastrar
                        Usuário</button>
                </div>


            </form>
        </div>
    </main>
</template>