// useLocalStorageStore.js
import { defineStore } from "pinia";
import { watch } from "vue";

export const useLocalStorageStore = defineStore("localStorage", {
  state: () => ({
    val: false, // Default value for dark mode
  }),
  actions: {
    init(initialValue, key) {
      const storageVal = localStorage.getItem(key);
      this.val = storageVal ? JSON.parse(storageVal) : initialValue;

      // Watch for changes and update localStorage
      watch(
        () => this.val,
        (val) => {
          localStorage.setItem(key, JSON.stringify(val));
        },
        { deep: true }
      );
    },
    toggleDarkMode() {
      this.val = !this.val;
    },
  },
});
