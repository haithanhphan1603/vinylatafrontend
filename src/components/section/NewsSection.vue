<template>
  <Swiper
    :pagination="{
      dynamicBullets: true,
    }"
    :modules="modules"
    class="mySwiper"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
    }"
  >
    <SwiperSlide>
      <TheNews
        buttonText="Shop now"
        title="Vinyl Discount 50%"
        extraDetails="Checkin at our shop"
        imgSrc="background.webp"
      ></TheNews>
    </SwiperSlide>
    <SwiperSlide>
      <TheNews
        buttonText="Order now"
        title="Dont Have Turntable?"
        extraDetails="We offer you the best"
        imgSrc="player.webp"
      ></TheNews>
    </SwiperSlide>
    <SwiperSlide>
      <TheNews
        buttonText="shop now"
        title="Newest Collections"
        extraDetails="Update everyweek"
        imgSrc="collection.webp"
      ></TheNews>
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
// Import Swiper components
import TheNews from "../TheNews.vue";
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";
const modules = [Pagination, Autoplay];
</script>

<style lang="scss" scoped></style>
