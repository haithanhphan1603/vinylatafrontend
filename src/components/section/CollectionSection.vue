<template>
  <div class="collection-section">
    <AppContainer>
      <div class="vinyl-genre__des text-h6 text-bold text-indigo-5">
        VARIOUS GENRES
      </div>
      <div class="vinyl-genre__title text-h4 text-bold">
        We offer music fanatic many kind of genres
      </div>
      <Swiper
        :slidesPerView="3"
        :spaceBetween="30"
        :navigation="true"
        :modules="modules"
        class="mySwiper"
      >
        <SwiperSlide v-for="category in categories" :key="category.id">
          <TheGenre
            class="q-mt-xl"
            :src="category.categoryImage"
            :type="category.categoryName"
            :to="category.id"
          ></TheGenre>
        </SwiperSlide>
      </Swiper>
    </AppContainer>
  </div>
</template>

<script setup>
import TheGenre from "../TheGenre.vue";
import AppContainer from "../common/AppContainer.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { useSwiper } from "swiper/vue";
import { useCategoryStore } from "src/stores/categories";
import "swiper/css";

import "swiper/css/navigation";

import { Navigation } from "swiper";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
const modules = [Navigation];
const swiper = useSwiper();
const categoryStore = useCategoryStore();
const { categories } = storeToRefs(categoryStore);
onMounted(() => {
  categoryStore.fetchSampleCategories();
});
</script>

<style lang="scss" scoped>
.mySwiper {
  ::deep(.swiper-button-next) {
    top: 30% !important;
  }
}

.vinyl-genre__title {
  color: #333333;
}
.vinyl-genre__des {
  margin-top: 4.8rem;
}
.collection-section {
  padding: 2rem 0;
}
</style>
