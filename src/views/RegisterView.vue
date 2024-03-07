<script setup>
import BaseInput from "@/components/BaseInput.vue";
import {reactive} from "vue";
import axios from "axios";
import { useUserStore } from '@/stores/user.js'
import { useRouter } from "vue-router";

const user = useUserStore();

const form = reactive({
  name: '',
  email: '',
  password: '',
})

const submit = () => {
  user.register(form);
  // rediriger
/*  router.push('/dashboard')*/
}

</script>

<template>
  <div class="page page-center">
    <div class="container-tight py-4">
      <form @submit.prevent="submit" class="card card-md" action="/register" method="post">
        <div class="card-body">
          <h2 class="card-title text-center mb-4">Créer un nouveau compte</h2>
          
          <div v-if="user.getErrors.length" class="alert alert-danger" role="alert">
            <p v-for="error in user.getErrors">{{ error }}</p>
          </div>
          
          <BaseInput
            v-model="form.name" label="Nom" placeholder="Votre nom" type="text"
          />
          <BaseInput
            v-model="form.email" label="Email" placeholder="exemple@email.com" type="email"
          />
          <BaseInput
            v-model="form.password" label="Mot de passe" placeholder="Mot de passe" type="password"
          />
          <div class="form-footer">
            <button type="submit" class="btn btn-primary w-100">Créer mon compte</button>
          </div>
          
<!--            {{ form.messageSuccess }}-->
        </div>
      </form>
      <div class="text-center text-muted mt-3">
        Vous avez déjà un compte?
        <router-link to="/login">connectez-vous</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-title {
  font-size: 25px;
  font-weight: 700;
}
.success {
  color: #0ca678;
}
</style>
