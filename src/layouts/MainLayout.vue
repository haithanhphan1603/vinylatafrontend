<template>
  <q-layout view="lHh Lpr lFf">
    <TheHeader></TheHeader>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
  <TheFooter></TheFooter>
</template>

<script setup>
import TheFooter from "src/components/TheFooter.vue";
import TheHeader from "src/components/TheHeader.vue";
</script>

<style>
li {
  list-style: none;
}
</style>
