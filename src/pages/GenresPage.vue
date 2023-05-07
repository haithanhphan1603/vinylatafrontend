<template>
  <div class="q-pb-xl">
    <q-img
      src="https://cdn.hiconsumption.com/wp-content/uploads/2017/07/Best-Albums-Every-Man-Should-Own-1074x711.jpg"
      :ratio="16 / 9"
      height="30rem"
    >
      <div
        class="absolute-full text-h1 genres-page__music-genres flex flex-center"
      >
        Shop By&nbsp;
        <div class="text-italic">Music Genres</div>
      </div>
      <template #loading>
        <q-skeleton width="100%" height="100%"></q-skeleton>
      </template>
    </q-img>
  </div>

  <div class="row q-px-md q-py-xl q-px-sm">
    <div
      v-for="category in categories"
      :key="category.id"
      class="col-12 col-sm-6 col-md-4 col-lg-3 q-py-lg"
    >
      <GenreCard
        :name="category.categoryName"
        :imgSrc="category.categoryImage"
        :id="category.id"
      ></GenreCard>
    </div>
  </div>
</template>

<script setup>
import GenreCard from "src/components/genres/GenreCard.vue";
import AppContainer from "src/components/common/AppContainer.vue";
import { onMounted } from "vue";
import { useCategoryStore } from "src/stores/categories";
import { storeToRefs } from "pinia";
const categoryStore = useCategoryStore();
const { categories } = storeToRefs(categoryStore);
import { useMeta } from "quasar";
const metaData = { title: "Vinylata- Genres" };
useMeta(metaData);
onMounted(() => {
  categoryStore.fetchAll();
});
</script>

<style lang="scss" scoped>
.genres-page__music-genres {
  font-family: "Tiempos", sans-serif;
}
</style>
