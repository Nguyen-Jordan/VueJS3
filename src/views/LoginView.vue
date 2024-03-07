<script setup>
import BaseInput from "@/components/BaseInput.vue";
import {reactive} from "vue";
import {useUserStore} from "@/stores/user.js";

const user = useUserStore();

const form = reactive({
  email: '',
  password: '',
})

const submit = () => {
  user.login(form);
}

</script>

<template>
  <div class="page page-center">
    <div class="container-tight py-4">
      <form @submit.prevent="submit" class="card card-md" action="." method="post">
        <div class="card-body">
          <h2 class="card-title text-center mb-4">Me connecter</h2>
          
          <div v-if="user.getErrors.length" class="alert alert-danger" role="alert">
            <p v-for="error in user.getErrors">{{ error }}</p>
          </div>
          
          <BaseInput
            v-model="form.email" label="Email" placeholder="exemple@email.com" type="email"
          />
          
          <BaseInput
            v-model="form.password" label="Mot de passe" placeholder="Mot de passe" type="password"
          />
          
          <div class="form-footer">
            <button type="submit" class="btn btn-primary w-100">Je me connecte</button>
          </div>
        </div>
      </form>
      <div class="text-center text-muted mt-3">
        Vous n’avez pas encore de compte ? <router-link to="/register">Créer un compte</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>

.card-title {
  font-size: 25px;
  font-weight: 700;
}
</style>
