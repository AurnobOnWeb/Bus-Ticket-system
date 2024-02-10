<template>
  <aside
    class="flex-shrink-0 hidden w-64 bg-white border-r dark:border-primary-darker dark:bg-darker md:block"
  >
    <div class="flex flex-col h-full">
      <!-- Sidebar links -->
      <div class="w-full">
        <div
          class="p-2 py-4 flex items-center justify-center gap-4 dark:text-light font-bold"
        >
          <h1 class="text-2xl">Admin Panel</h1>
        </div>
      </div>
      <hr />
      <nav
        aria-label="Main"
        class="flex-1 px-2 py-4 space-y-2 overflow-y-hidden hover:overflow-y-auto mt-2"
      >
        <RouterLink :to="{ name: 'Dashboard' }">
          <SideBarButton
            label="Dashboards"
            :class="{
              'bg-primary-100 dark:bg-primary': $route.name === 'Dashboard',
            }"
          >
            <template #icon>
              <Dashboard></Dashboard>
            </template>
          </SideBarButton>
        </RouterLink>

        <!-- Add more Dropdown components as needed -->
        <Dropdown label="Another Dropdown">
          <template #icon>
            <HomeIcon />
          </template>
          <template #item>
            <DropdownButton label="Default"></DropdownButton>
            <DropdownButton label="ecommerce"></DropdownButton>
          </template>
        </Dropdown>

        <!-- Sidebar Footer -->
        <div class="flex-shrink-0 px-2 py-4 space-y-2">
          <button
            @click="Settings.isSettings = true"
            type="button"
            class="flex items-center justify-center w-full px-4 py-2 text-sm text-white rounded-md bg-primary hover:bg-primary-dark focus:outline-none focus:ring focus:ring-primary-dark focus:ring-offset-1 focus:ring-offset-white dark:focus:ring-offset-dark gap-2"
          >
            <span aria-hidden="true">
              <SettingsIcon />
            </span>
            <span>Customize</span>
          </button>
        </div>
      </nav>
    </div>
  </aside>
</template>

<script setup>
import Dropdown from "@/components/Dropdown.vue";
import DropdownButton from "@/components/DropdownButton.vue";
import SideBarButton from "@/components/SideBarButton.vue";
import { RouterLink } from "vue-router";
import { Settings } from "@/stores/Settings.js";
import Dashboard from "@/assets/icons/DashboardIcon.vue";
import HomeIcon from "@/assets/icons/HomeIcon.vue";
import SettingsIcon from "@/assets/icons/SettingsIcon.vue";
</script>
