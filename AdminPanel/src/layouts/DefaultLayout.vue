<script setup>
import { watch, ref } from "vue";
import { RouterView } from "vue-router";
import SideBar from "@/layouts/SideBar.vue";
import Header from "./Header.vue";
import Foot from "./Foot.vue";

import Notifications from "@/components/Notifications.vue";
import SettingsColor from "@/components/SettingsColor.vue";
import { useAuthStore } from "@/stores/auth";
import { useLocalStorageStore } from "@/stores/useLocalStorageStore";
const localStorageStore = useLocalStorageStore();
localStorageStore.init(false, "dark");

const authStore = useAuthStore();
</script>
<template>
  <template v-if="authStore.isAuthenticated === true">
    <div :class="{ dark: localStorageStore.val }">
      <div
        class="flex h-screen antialiased text-gray-900 bg-gray-100 dark:bg-dark dark:text-light"
      >
        <!-- Loading screen -->
        <!-- Loading screen -->
        <!-- SideBar -->
        <SideBar> </SideBar>
        <!-- SideBar -->
        <div class="flex-1 h-full overflow-x-hidden overflow-y-auto">
          <!-- Navbar -->
          <Header></Header>
          <!-- Navbar -->
          <!-- Main content -->
          <main class="dark:bg-dark">
            <RouterView />
          </main>
          <!-- Main content -->
          <!-- Footer -->
          <Foot />
          <!-- Footer -->
        </div>
        <!-- SidePanel -->
        <SettingsColor></SettingsColor>
        <Notifications></Notifications>
        <!-- SidePanel -->
      </div>
    </div>
  </template>
  <template v-if="authStore.isAuthenticated === false">
    <RouterView />
  </template>
</template>
