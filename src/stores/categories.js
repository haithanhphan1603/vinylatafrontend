import { defineStore } from "pinia";
import { ref } from "vue";
export const useCategoryStore = defineStore("categories", () => {
  // const categories = ref([
  //   {
  //     id: "c1",
  //     categoryName: "blues",
  //     categoryImage:
  //       "https://m.media-amazon.com/images/I/91Vj9yg7FaL._AC_SL1500_.jpg",
  //   },
  //   {
  //     id: "c28",
  //     categoryName: "rock",
  //     categoryImage:
  //       "https://bizweb.dktcdn.net/100/419/077/products/2ddc391e-1d7d-4ab5-bec9-a91fce7d40e5.jpg?v=1675560485317",
  //   },
  // ]);
  // async function fetchAll() {
  //   const response = await fetch("http://localhost:8080/api/products/16");
  //   const jsonData = await response.json();
  //   console.log(jsonData);
  // }
  const categories = ref([]);
  async function fetchAll() {
    const response = await fetch("http://localhost:8080/api/categories/");
    const data = await response.json();
    categories.value = data.data;
    console.log(data.data);
  }
  return { categories, fetchAll };
});
