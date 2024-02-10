<template>
  <UserButton label="Logout" @click="handleLogout"></UserButton>
</template>

<script setup>
import UserButton from "@/components/UserButton.vue";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";
const router = useRouter();
const authStore = useAuthStore();
const handleLogout = async () => {
  await authStore.logout();
  if (authStore.isAuthenticated === false) {
    router.push({ name: "Login" });
  }
};
</script>

<style lang="scss" scoped></style>
