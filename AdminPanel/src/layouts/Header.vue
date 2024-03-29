<script setup>
import { ref } from "vue";
import { Panel } from "@/stores/Panel.js";
import { Settings } from "@/stores/Settings.js";
import UserMenu from "@/components/UserMenu.vue";
import MenuButton from "@/components/MenuButton.vue";
import MenuRounded from "@/components/MenuRounded.vue";
import { RouterLink } from "vue-router";
const isMobileSubMenuOpen = ref(false);
const isMobileMainMenuOpen = ref(false);
import { useLocalStorageStore } from "@/stores/useLocalStorageStore";
const localStorageStore = useLocalStorageStore();
localStorageStore.init(false, "dark");
const toggle = () => {
  localStorageStore.toggleDarkMode();
};
</script>

<template>
  <header class="relative bg-white dark:bg-darker">
    <div
      class="flex items-center justify-between p-2 border-b dark:border-primary-darker"
    >
      <!-- Mobile menu button -->
      <MenuButton @click="isMobileMainMenuOpen = !isMobileMainMenuOpen">
        <span class="sr-only">Open main manu</span>
        <span aria-hidden="true">
          <svg
            class="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </span>
      </MenuButton>
      <!-- Brand -->
      <RouterLink
        :to="'/'"
        class="inline-block text-2xl font-bold tracking-wider uppercase text-primary-dark dark:text-light"
      >
      </RouterLink>
      <!-- Mobile sub menu button -->
      <MenuButton @click="isMobileSubMenuOpen = !isMobileSubMenuOpen">
        <span class="sr-only">Open sub manu</span>
        <span aria-hidden="true">
          <svg
            class="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </span>
      </MenuButton>
      <!-- Desktop Right buttons -->
      <nav
        aria-label="Secondary"
        class="hidden space-x-2 md:flex md:items-center"
      >
        <!-- Toggle dark theme button -->
        <button
          aria-hidden="true"
          class="relative focus:outline-none"
          x-cloak
          @click="toggle"
        >
          <div
            class="w-12 h-6 transition rounded-full outline-none bg-primary-100 dark:bg-primary-lighter"
          ></div>
          <div
            class="absolute top-0 left-0 inline-flex items-center justify-center w-6 h-6 transition-all duration-150 transform scale-110 rounded-full shadow-sm"
            :class="{
              'translate-x-0 -translate-y-px  bg-white text-primary-dark':
                localStorageStore.val,
              'translate-x-6 text-primary-100 bg-primary-darker':
                localStorageStore.val,
            }"
          >
            <svg
              v-if="!localStorageStore.val"
              class="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
            <svg
              v-if="localStorageStore.val"
              class="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
          </div>
        </button>

        <!-- Notification button -->
        <MenuRounded @click="Panel.isPanelOpen = !isPanelOpen">
          <svg
            class="w-7 h-7"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </MenuRounded>
        <!-- Settings button -->
        <MenuRounded @click="Settings.isSettings = true">
          <svg
            class="w-7 h-7"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </MenuRounded>
        <!-- User avatar button -->
        <div class="relative">
          <UserMenu></UserMenu>
        </div>
      </nav>

      <!-- Mobile sub menu -->

      <transition name="fade" mode="out-in">
        <nav
          v-if="isMobileSubMenuOpen"
          class="absolute flex items-center p-4 bg-white rounded-md shadow-lg dark:bg-darker top-16 inset-x-4 md:hidden"
          aria-label="Secondary"
        >
          <div class="space-x-2">
            <!-- Toggle dark theme button -->
            <button
              aria-hidden="true"
              class="relative focus:outline-none"
              x-cloak
              @click="
                localStorageStore.val.isDark = !localStorageStore.val.isDark
              "
            >
              <div
                class="w-12 h-6 transition rounded-full outline-none bg-primary-100 dark:bg-primary-lighter"
              ></div>
              <div
                class="absolute top-0 left-0 inline-flex items-center justify-center w-6 h-6 transition-all duration-150 transform scale-110 rounded-full shadow-sm"
                :class="{
                  'translate-x-0 -translate-y-px  bg-white text-primary-dark':
                    !localStorageStore.val.isDark,
                  'translate-x-6 text-primary-100 bg-primary-darker':
                    localStorageStore.val.isDark,
                }"
              >
                <svg
                  v-if="!localStorageStore.val.isDark"
                  class="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
                <svg
                  v-if="localStorageStore.val.isDark"
                  class="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </div>
            </button>

            <!-- Notification button -->
            <MenuRounded @click="Panel.isPanelOpen = !isPanelOpen">
              <svg
                class="w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </MenuRounded>
            <!-- Settings button -->
            <MenuRounded @click="Settings.isSettings = true">
              <svg
                class="w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </MenuRounded>
          </div>

          <!-- User avatar button -->
          <div class="relative ml-auto">
            <UserMenu></UserMenu>
          </div>
        </nav>
      </transition>
    </div>
    <!-- Mobile main manu -->
    <div
      class="border-b md:hidden dark:border-primary-darker"
      v-if="isMobileMainMenuOpen"
      @click.away="isMobileMainMenuOpen = false"
    >
      <nav aria-label="Main" class="px-2 py-4 space-y-2">
        <!-- Dashboards links -->
        <div x-data="{ isActive: true, open: true}">
          <!-- active & hover classes 'bg-primary-100 dark:bg-primary' -->
          <a
            href="#"
            @click="
              $event.preventDefault();
              open = !open;
            "
            class="flex items-center p-2 text-gray-500 transition-colors rounded-md dark:text-light hover:bg-primary-100 dark:hover:bg-primary"
            :class="{
              'bg-primary-100 dark:bg-primary': isActive || open,
            }"
            role="button"
            aria-haspopup="true"
            :aria-expanded="open || isActive ? 'true' : 'false'"
          >
            <span aria-hidden="true">
              <svg
                class="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </span>
            <span class="ml-2 text-sm"> Dashboards </span>
            <span class="ml-auto" aria-hidden="true">
              <!-- active class 'rotate-180' -->
              <svg
                class="w-4 h-4 transition-transform transform"
                :class="{ 'rotate-180': open }"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </a>
          <div
            role="menu"
            x-show="open"
            class="mt-2 space-y-2 px-7"
            aria-label="Dashboards"
          >
            <!-- active & hover classes 'text-gray-700 dark:text-light' -->
            <!-- inActive classes 'text-gray-400 dark:text-gray-400' -->
            <a
              href="index.html"
              role="menuitem"
              class="block p-2 text-sm text-gray-700 transition-colors duration-200 rounded-md dark:text-light dark:hover:text-light hover:text-gray-700"
            >
              Default
            </a>
            <a
              href="#"
              role="menuitem"
              class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700"
            >
              Project Mangement (soon)
            </a>
            <a
              href="#"
              role="menuitem"
              class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700"
            >
              E-Commerce (soon)
            </a>
          </div>
        </div>

        <!-- Components links -->
        <div x-data="{ isActive: false, open: false }">
          <!-- active classes 'bg-primary-100 dark:bg-primary' -->
          <a
            href="#"
            @click="
              $event.preventDefault();
              open = !open;
            "
            class="flex items-center p-2 text-gray-500 transition-colors rounded-md dark:text-light hover:bg-primary-100 dark:hover:bg-primary"
            :class="{
              'bg-primary-100 dark:bg-primary': isActive || open,
            }"
            role="button"
            aria-haspopup="true"
            :aria-expanded="open || isActive ? 'true' : 'false'"
          >
            <span aria-hidden="true">
              <svg
                class="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
            </span>
            <span class="ml-2 text-sm"> Components </span>
            <span aria-hidden="true" class="ml-auto">
              <!-- active class 'rotate-180' -->
              <svg
                class="w-4 h-4 transition-transform transform"
                :class="{ 'rotate-180': open }"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </a>
          <div
            x-show="open"
            class="mt-2 space-y-2 px-7"
            role="menu"
            arial-label="Components"
          >
            <!-- active & hover classes 'text-gray-700 dark:text-light' -->
            <!-- inActive classes 'text-gray-400 dark:text-gray-400' -->
            <a
              href="#"
              role="menuitem"
              class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:text-gray-400 dark:hover:text-light hover:text-gray-700"
            >
              Alerts (soon)
            </a>
            <a
              href="#"
              role="menuitem"
              class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:text-gray-400 dark:hover:text-light hover:text-gray-700"
            >
              Buttons (soon)
            </a>
            <a
              href="#"
              role="menuitem"
              class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700"
            >
              Cards (soon)
            </a>
            <a
              href="#"
              role="menuitem"
              class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700"
            >
              Dropdowns (soon)
            </a>
            <a
              href="#"
              role="menuitem"
              class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700"
            >
              Forms (soon)
            </a>
            <a
              href="#"
              role="menuitem"
              class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700"
            >
              Lists (soon)
            </a>
            <a
              href="#"
              role="menuitem"
              class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700"
            >
              Modals (soon)
            </a>
          </div>
        </div>

        <!-- Pages links -->
        <div x-data="{ isActive: false, open: false }">
          <!-- active classes 'bg-primary-100 dark:bg-primary' -->
          <a
            href="#"
            @click="
              $event.preventDefault();
              open = !open;
            "
            class="flex items-center p-2 text-gray-500 transition-colors rounded-md dark:text-light hover:bg-primary-100 dark:hover:bg-primary"
            :class="{
              'bg-primary-100 dark:bg-primary': isActive || open,
            }"
            role="button"
            aria-haspopup="true"
            :aria-expanded="open || isActive ? 'true' : 'false'"
          >
            <span aria-hidden="true">
              <svg
                class="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </span>
            <span class="ml-2 text-sm"> Pages </span>
            <span aria-hidden="true" class="ml-auto">
              <!-- active class 'rotate-180' -->
              <svg
                class="w-4 h-4 transition-transform transform"
                :class="{ 'rotate-180': open }"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </a>
          <div
            x-show="open"
            class="mt-2 space-y-2 px-7"
            role="menu"
            arial-label="Pages"
          >
            <!-- active & hover classes 'text-gray-700 dark:text-light' -->
            <!-- inActive classes 'text-gray-400 dark:text-gray-400' -->
            <a
              href="pages/blank.html"
              role="menuitem"
              class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:text-gray-400 dark:hover:text-light hover:text-gray-700"
            >
              Blank
            </a>
            <a
              href="pages/404.html"
              role="menuitem"
              class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:text-gray-400 dark:hover:text-light hover:text-gray-700"
            >
              404
            </a>
            <a
              href="pages/500.html"
              role="menuitem"
              class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:text-gray-400 dark:hover:text-light hover:text-gray-700"
            >
              500
            </a>
            <a
              href="#"
              role="menuitem"
              class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:text-gray-400 dark:hover:text-light hover:text-gray-700"
            >
              Profile (soon)
            </a>
            <a
              href="#"
              role="menuitem"
              class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700"
            >
              Pricing (soon)
            </a>
            <a
              href="#"
              role="menuitem"
              class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700"
            >
              Kanban (soon)
            </a>
            <a
              href="#"
              role="menuitem"
              class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700"
            >
              Feed (soon)
            </a>
          </div>
        </div>

        <!-- Authentication links -->
        <div x-data="{ isActive: false, open: false}">
          <!-- active & hover classes 'bg-primary-100 dark:bg-primary' -->
          <a
            href="#"
            @click="
              $event.preventDefault();
              open = !open;
            "
            class="flex items-center p-2 text-gray-500 transition-colors rounded-md dark:text-light hover:bg-primary-100 dark:hover:bg-primary"
            :class="{
              'bg-primary-100 dark:bg-primary': isActive || open,
            }"
            role="button"
            aria-haspopup="true"
            :aria-expanded="open || isActive ? 'true' : 'false'"
          >
            <span aria-hidden="true">
              <svg
                class="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </span>
            <span class="ml-2 text-sm"> Authentication </span>
            <span aria-hidden="true" class="ml-auto">
              <!-- active class 'rotate-180' -->
              <svg
                class="w-4 h-4 transition-transform transform"
                :class="{ 'rotate-180': open }"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </a>
          <div
            x-show="open"
            class="mt-2 space-y-2 px-7"
            role="menu"
            aria-label="Authentication"
          >
            <!-- active & hover classes 'text-gray-700 dark:text-light' -->
            <!-- inActive classes 'text-gray-400 dark:text-gray-400' -->
            <a
              href="auth/register.html"
              role="menuitem"
              class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700"
            >
              Register
            </a>
            <a
              href="auth/login.html"
              role="menuitem"
              class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700"
            >
              Login
            </a>
            <a
              href="auth/forgot-password.html"
              role="menuitem"
              class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700"
            >
              Forgot Password
            </a>
            <a
              href="auth/reset-password.html"
              role="menuitem"
              class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700"
            >
              Reset Password
            </a>
          </div>
        </div>

        <!-- Layouts links -->
        <div x-data="{ isActive: false, open: false}">
          <!-- active & hover classes 'bg-primary-100 dark:bg-primary' -->
          <a
            href="#"
            @click="
              $event.preventDefault();
              open = !open;
            "
            class="flex items-center p-2 text-gray-500 transition-colors rounded-md dark:text-light hover:bg-primary-100 dark:hover:bg-primary"
            :class="{
              'bg-primary-100 dark:bg-primary': isActive || open,
            }"
            role="button"
            aria-haspopup="true"
            :aria-expanded="open || isActive ? 'true' : 'false'"
          >
            <span aria-hidden="true">
              <svg
                class="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                />
              </svg>
            </span>
            <span class="ml-2 text-sm"> Layouts </span>
            <span aria-hidden="true" class="ml-auto">
              <!-- active class 'rotate-180' -->
              <svg
                class="w-4 h-4 transition-transform transform"
                :class="{ 'rotate-180': open }"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </a>
          <div
            x-show="open"
            class="mt-2 space-y-2 px-7"
            role="menu"
            aria-label="Layouts"
          >
            <!-- active & hover classes 'text-gray-700 dark:text-light' -->
            <!-- inActive classes 'text-gray-400 dark:text-gray-400' -->
            <a
              href="layouts/two-columns-sidebar.html"
              role="menuitem"
              class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:text-gray-400 dark:hover:text-light hover:text-gray-700"
            >
              Two Columns Sidebar
            </a>
            <a
              href="layouts/mini-plus-one-columns-sidebar.html"
              role="menuitem"
              class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:text-gray-400 dark:hover:text-light hover:text-gray-700"
            >
              Mini + One Columns Sidebar
            </a>
            <a
              href="layouts/mini-column-sidebar.html"
              role="menuitem"
              class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:text-gray-400 dark:hover:text-light hover:text-gray-700"
            >
              Mini Column Sidebar
            </a>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
