<script>

</script>

<template>
  <div class="page page-center">
    <div class="container-tight py-4">
      <form class="card card-md" action="." method="post">
        <div class="card-body">
          <h2 class="card-title text-center mb-4">Me connecter</h2>
          <div class="mb-3">
            <label class="form-label">Email</label>
            <input name="email" type="email" class="form-control" placeholder="exemple@email.com">
          </div>
          <div class="mb-3">
            <label class="form-label">Mot de passe</label>
            <div class="input-group input-group-flat">
              <input name="password" type="password" class="form-control"  placeholder="Mot de passe"  autocomplete="off">
              <span class="input-group-text">
                  <a href="#" class="link-secondary" title="Show password" data-bs-toggle="tooltip"><!-- Download SVG icon from http://tabler-icons.io/i/eye -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><circle cx="12" cy="12" r="2" /><path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7" /></svg>
                  </a>
                </span>
            </div>
          </div>
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
