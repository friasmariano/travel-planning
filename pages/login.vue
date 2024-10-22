<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { required, email, sameAs, minLength, helpers } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { useLocalStore } from '@/stores/useLocalStore'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const localStore = useLocalStore()
const router = useRouter()

definePageMeta({
  layout: 'public',
  middleware: [
    function(to, from) {
        if (localStore.isLoggedIn) {
            router.push('/')
        }
    }
  ]
})

onMounted(() => {
    // console.log('Token default value:' + localStore.token)
})

const formData =  reactive({
    email: '',
    password: ''
})

const rules = computed(() => {
  return {
    email: { 
        required: helpers.withMessage('El campo email es requerido.', required), 
        email: helpers.withMessage('El formato del email no es válido.', email) 
    },
    password: { 
        required: helpers.withMessage('El campo password es requerido.', required), 
        minLength: helpers.withMessage('La contraseña debe tener 6 o más caracteres.', minLength(6) )
    }
  };
});

const v$ = useVuelidate(rules, formData)

const errors = ref([])
const clearErrors = () => {
    errors.value = []
}

const submit = async () => {
    const local = this

    v$.value.$validate();
    if (!v$.value.$error) {
        await axios.post('http://localhost:5021/Login?Email='+formData.email+'&'+'Password='+formData.password)
        .then(function (response) {
            const token = response.data.token;
            console.log(response.data.token);

            localStore.setToken(token);
            localStore.setLoginStatus();

            router.push('/')
        })
        .catch(function (error) {
            console.log(error);
            setTimeout(() => { clearErrors() }, 5000);
        });
    } 
    else {
        alert('Hay errores de validación.')
    }
}
</script>

<template>
    <div class="loginDiv has-box-shadow">
        <div class="loginSection" style="margin-top: 40px; margin-bottom: 20px;">
            <div style="display: flex; align-items: center;  justify-content: center;">
                <img id="brandLogo" class="h-10 w-10" src="/img/logo.png" alt="Logo">
                <p style="font-size: 1.5rem; font-weight: 500; color: #207987;">TravelPlanner</p>
            </div>
        </div>
        <hr />
        <form @submit.prevent="submit">
            <p class="loginSection" style="font-size: 1.2rem; margin-top: 20px;">Iniciar sesión</p>
            <div class="loginSection" style="margin-top: 30px;">
                <label for="email">Email:</label>
                <input 
                      v-model="formData.email"
                      :class="{
                                'border-red-500 focus:border-red-500': v$.email.$error,
                                'border-[#42d392] ': !v$.email.$invalid,
                      }"
                      type="text" 
                      id="email" 
                      name="email" 
                      placeholder="micorreo@dominio.com"
                      @change="v$.email.$touch" />
            </div>
            <div class="loginSection" style="margin-top: 20px;">
                <label for="password">Password:</label>
                <input 
                      v-model="formData.password" 
                      :class="{
                                'border-red-500 focus:border-red-500': v$.password.$error
                      }"
                      type="password" 
                      id="password" 
                      name="password"
                      @change="v$.password.$touch" />
            </div>
            <div class="loginSection" style="margin-top: 20px;">
                <p v-for="error in v$.$errors" class="errors">
                    <FontAwesomeIcon :icon="['fas', 'info-circle']" />
                    {{ error.$message }}
                </p>
                <div v-if="errors.length > 0" class="errors">
                    <p v-for="error in errors">
                        <FontAwesomeIcon :icon="['fas', 'info-circle']" />
                        {{ error }}
                    </p>
                </div>
            </div>
            <div class="loginSection" style="margin-top: 30px;">
                <button 
                        type="submit"
                        class="c-button is-blue"
                        :class="{ 'disabled': v$.$invalid }">Entrar</button>
            </div>
        </form>
    </div>
</template>

<style lang="scss" scoped>
.loginDiv { 
    width: 65vw; 
    height: 50vh; 

    background-color: whitesmoke;

    margin-left: auto;
    margin-right: auto;

    margin-top: 25vh;
    margin-bottom: auto;

    align-items: center;
    justify-content: center;

    flex-direction: column;

    border-radius: 20px;
}

.loginSection {
    display: flex; text-align: center; align-items: center; margin-left: auto; flex-direction: column;
}
</style>