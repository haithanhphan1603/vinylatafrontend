<template>
  <q-header class="index-page__header" reveal>
    <router-link
      to="/"
      class="index-page__header-text text-h4 text-bold q-ml-xl"
    >
      <q-img width="8rem" src="/logo.png"> </q-img>
    </router-link>
    <ul class="flex flex-center text-subtitle1">
      <li>
        <router-link class="" to="/genres">SHOP BY GENRES</router-link>
      </li>
      <li>
        <router-link class="" to="/vendors">SHOP BY ARTISTS</router-link>
      </li>
      <li v-if="!isAuth">
        <router-link class="" to="/auth">LOGIN</router-link>
      </li>
      <li v-else>
        <router-link class="" to="/order">ORDER</router-link>
      </li>

      <li>
        <router-link class="flex flex-center" to="/cart">
          <q-icon
            size="sm"
            padding="none"
            color="black"
            class="q-mr-lg"
            name="mdi-cart"
          ></q-icon
        ></router-link>
      </li>
    </ul>
  </q-header>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useAuthStore } from "src/stores/auth";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const { isAuth } = storeToRefs(authStore);
const router = useRouter();
authStore.checkAuth();

function logout() {
  authStore.logout();
  router.push("/");
}
</script>

<style lang="scss" scoped>
.index-page__header {
  height: 5.5rem;
  background-color: white;

  vertical-align: middle;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.index-page__header li {
  padding: 1rem;
}
.logout:hover {
  color: $indigo-9;
}
.logout {
  cursor: pointer;
  color: $primary;
}
</style>
