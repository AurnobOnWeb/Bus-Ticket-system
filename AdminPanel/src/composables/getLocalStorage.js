import { ref, watch } from "vue";

export default function (key) {
  // Check if the value exists in localStorage
  const storageVal = localStorage.getItem(key);

  // Use localStorage value if it exists, otherwise use false
  const initialValue = storageVal ? JSON.parse(storageVal) : false;

  const val = ref(initialValue);

  // Watch for changes in localStorage
  watch(
    () => localStorage.getItem(key),
    (newStorageVal) => {
      if (newStorageVal) {
        val.value = JSON.parse(newStorageVal);
      } else {
        val.value = false;
      }
    },
    {
      deep: true,
    }
  );

  return val;
}
