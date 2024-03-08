<script setup>

</script>

<template>
  <div class="page page-center">
    <div class="container-tight py-4">
      <div class="empty">
        <div class="empty-header">404</div>
        <p class="empty-title">Oops.. Vous venez de trouver une page d’erreur</p>
        <p class="empty-subtitle text-muted">
          Nous sommes désolés mais la page que vous recherchez n’a pas été trouvée
        </p>
        <div class="empty-action">
          <RouterLink :to="{name: 'home' }" class="btn btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M5 12l4 4" /><path d="M5 12l4 -4" /></svg>
            Retour à l'accueil
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
