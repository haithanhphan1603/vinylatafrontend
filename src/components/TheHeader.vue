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

<script setup></script>

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
</style>
