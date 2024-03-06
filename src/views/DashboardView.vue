<script setup>
import { useUserStore } from "@/stores/user.js";

const user = useUserStore();
</script>

<template>
  <div>
    <h1>
      {{ user.getUser.name}}
     </h1>
  </div>
</template>
