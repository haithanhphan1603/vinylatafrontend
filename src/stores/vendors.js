import { defineStore } from "pinia";
import { ref } from "vue";
export const useVendorStore = defineStore("vendors", () => {
  const vendors = ref([]);
  async function fetchAll() {
    const response = await fetch("http://localhost:8080/api/vendors/");
    const data = await response.json();
    vendors.value = data.data;
    console.log(data.data);
  }
  return { vendors, fetchAll };
});
