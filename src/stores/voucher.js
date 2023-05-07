import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";
export const useVoucherStore = defineStore("voucher", () => {
  const vouchers = ref([]);
  async function fetchAllVouchers() {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:8080/api/voucher/user/all", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        vouchers.value = res.data.data;
        console.log(res.data.data);
        return res.data;
      });
  }
  return { vouchers, fetchAllVouchers };
});
