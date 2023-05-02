import { defineStore } from "pinia";
import { ref } from "vue";

export const useVendorDetailStore = defineStore("vendor-details", () => {
  const products = ref([]);
  const vendorImage = ref("");
  const vendorName = ref("");

  async function fetchAllProducts(id) {
    const response = await fetch(`http://localhost:8080/api/vendors/${id}`);
    const data = await response.json();
    products.value = data.data.products;
    vendorImage.value = data.data.vendorImage;
    vendorName.value = data.data.vendorName;
  }

  return {
    products,
    fetchAllProducts,
    vendorName,
    vendorImage,
  };
});
