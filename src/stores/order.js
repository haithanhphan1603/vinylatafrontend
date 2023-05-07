import axios from "axios";
import { computed, ref } from "vue";
import { defineStore } from "pinia";
export const useOrderStore = defineStore("order", () => {
  const checkoutList = ref([]);
  const token = localStorage.getItem("token");
  async function fetchCheckoutList() {
    axios
      .get("http://localhost:8080/api/order/user/myorder", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        checkoutList.value = res.data.data;
        console.log(res.data.data);
        return res.data;
      });
  }
  async function pushCheckoutItem(checkoutItem) {
    axios
      .post("http://localhost:8080/api/order/user/confirm", checkoutItem, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log("Success");
        return res.data;
      });
  }
  const hasOrder = computed(() => {
    return checkoutList.value.length;
  });
  return { hasOrder, fetchCheckoutList, checkoutList, pushCheckoutItem };
});
