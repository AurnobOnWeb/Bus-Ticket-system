<template>
  <button
    role="menuitem"
    class="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-light dark:hover:bg-primary w-full text-start rounded-md"
  >
    {{ label }}
  </button>
</template>

<script setup>
defineProps({
  label: String,
});
</script>

<style lang="scss" scoped></style>
