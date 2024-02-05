<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";
const isAutenticated = ref(false);
</script>
<template>
  <header v-if="isAutenticated">
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
