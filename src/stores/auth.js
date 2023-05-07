import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";
export const useAuthStore = defineStore("auth", () => {
  const userInfo = ref({});
  const token = ref("");
  const isAuth = ref();
  const error = ref();

  function checkAuth() {
    if (localStorage.getItem("token")) {
      isAuth.value = true;
    } else {
      isAuth.value = false;
    }
  }
  async function login(payload) {
    // const response = await fetch("http://localhost:8080/login", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     email: payload.email,
    //     password: payload.email,
    //   }),
    // });

    // if (!response.ok) {
    //   const error = new Error("Failed to authenticate");
    //   throw error;
    // }

    // const responseData = await response.text();
    // if (responseData) {
    //   const data = JSON.parse(responseData);
    //   console.log(data);
    //   token.value = data.data;
    // } else {
    //   const error = new Error("Empty response");
    //   throw error;
    // }
    const data = axios
      .post("http://localhost:8080/login", {
        email: payload.email,
        password: payload.password,
      })
      .then((response) => {
        // if (response.data.accessToken) {
        //   localStorage.setItem("user", JSON.stringify(response.data));
        // }
        token.value = response.data.data;
        isAuth.value = true;
        console.log(response);
        localStorage.setItem("token", response.data.data);

        return response;
      });
    if ((await data).statusText !== "") {
      const error = new Error("Fail to authenticate");
      throw error;
    }
  }
  async function register(payload) {
    axios
      .post("http://localhost:8080/register", {
        email: payload.email,
        password: payload.password,
        firstName: payload.firstName,
        lastName: payload.lastName,
        phoneNumber: payload.phoneNumber,
        address: payload.address,
      })
      .then((response) => {
        console.log(response.data);
        return response.data;
      });
  }
  function logout() {
    localStorage.removeItem("token");
    isAuth.value = false;
  }

  return {
    userInfo,
    token,
    login,
    isAuth,
    logout,
    register,
    checkAuth,

    error,
  };
});
