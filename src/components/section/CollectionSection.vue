<template>
  <AppContainer>
    <div
      class="vinyl-genre__des text-h6 text-bold q-mb-sm q-mt-xl text-indigo-5"
    >
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
      <SwiperSlide>
        <TheGenre
          class="q-mt-xl"
          src="/collections/logo1.jpeg"
          type="Rock"
        ></TheGenre>
      </SwiperSlide>

      <SwiperSlide
        ><TheGenre
          class="q-mt-xl"
          src="/collections/logo2.png"
          type="Country"
        ></TheGenre
      ></SwiperSlide>
      <SwiperSlide
        ><TheGenre
          class="q-mt-xl"
          src="/collections/logo3.jpeg"
          type="Jazz"
        ></TheGenre
      ></SwiperSlide>
      <SwiperSlide
        ><TheGenre
          class="q-mt-xl"
          src="/collections/randb.jpeg"
          type="R&B"
        ></TheGenre
      ></SwiperSlide>
      <SwiperSlide
        ><TheGenre
          class="q-mt-xl"
          src="/collections/hiphop.jpeg"
          type="Hip Hop"
        ></TheGenre
      ></SwiperSlide>
    </Swiper>
  </AppContainer>
</template>

<script setup>
import TheGenre from "../TheGenre.vue";
import AppContainer from "../common/AppContainer.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { useSwiper } from "swiper/vue";
import "swiper/css";

import "swiper/css/navigation";

import { Navigation } from "swiper";
const modules = [Navigation];
const swiper = useSwiper();
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
</style>
