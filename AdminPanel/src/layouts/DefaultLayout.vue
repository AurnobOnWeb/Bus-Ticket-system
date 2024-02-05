<script setup>
import { watch, ref } from "vue";
import { RouterView } from "vue-router";
import SideBar from "@/layouts/SideBar.vue";
import Header from "./Header.vue";
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

        <!-- SideBar -->
        <SideBar> </SideBar>

        <div class="flex-1 h-full overflow-x-hidden overflow-y-auto">
          <!-- Navbar -->
          <Header></Header>
          <!-- Main content -->
          <main class="dark:bg-dark">
            <RouterView />
          </main>

          <!-- Main footer -->
          <footer
            class="flex items-center justify-between p-4 bg-white border-t dark:bg-darker dark:border-primary-darker"
          >
            <div>K-WD &copy; 2021</div>
            <div>
              Made by
              <a
                href="https://github.com/Kamona-WD"
                target="_blank"
                class="text-blue-500 hover:underline"
                >Ahmed Kamel</a
              >
            </div>
          </footer>
        </div>

        <!-- Panels -->

        <!-- Settings Panel -->
        <!-- Backdrop -->
        <SettingsColor></SettingsColor>
        <!-- Panel -->
        <Notifications></Notifications>
      </div>
    </div>
  </template>
</template>
