import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";
export const useUserStore = defineStore("user", () => {
  const user = ref({});
  async function fetchUser() {
    const token = localStorage.getItem("token");

    const responseData = axios
      .get("http://localhost:8080/api/order/user/user-info", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        user.value = res.data.data;
        console.log(res.data.data);
        return res.data;
      });
  }
  return { user, fetchUser };
});
