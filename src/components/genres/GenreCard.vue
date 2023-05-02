<template>
  <div class="q-px-md">
    <router-link :to="genrePageLink">
      <q-img :src="imgSrc">
        <template #loading>
          <q-skeleton width="100%" height="100%"></q-skeleton> </template
      ></q-img>
    </router-link>
    <router-link :to="genrePageLink" class="text-h4 genre-card__name">
      <div class="q-pt-md">{{ name }}</div></router-link
    >
    <router-link :to="genrePageLink">
      <div class="genre-card__link text-indigo-10 q-pt-sm">
        <span class="text-bold text-subtitle1">View records</span
        ><q-icon
          class="genre-card__icon"
          name="mdi-chevron-right"
          size="sm"
        ></q-icon>
      </div>
    </router-link>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
// const captitalizeName = computed(() => {
//   return props.name.charAt(0).toUpperCase() + props.name.slice(1);
// });
const route = useRoute();

const props = defineProps({
  name: String,
  imgSrc: String,
  id: String,
});

const genrePageLink = computed(() => {
  return route.path + "/" + props.id;
});
</script>

<style lang="scss" scoped>
.genre-card__name {
  font-family: "Tiempos", sans-serif;
}
.genre-card__link {
  display: flex;
  align-items: center;
}
.genre-card__link:hover .genre-card__icon {
  transform: translate(0.25em);
}
.genre-card__icon {
  transition-duration: 0.25s;
}
</style>
