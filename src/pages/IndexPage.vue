<template>
  <q-header class="index-page__header" reveal>
    <div class="index-page__header-text text-h4 text-bold q-ml-lg">
      <q-img width="8rem" src="/logo.png"></q-img>
    </div>
    <ul class="flex flex-center text-subtitle1">
      <li><router-link class="col-2" to="/"> ABOUT</router-link></li>
      <li><router-link class="col-2" to="/"> SHOP</router-link></li>
      <li><router-link class="col-2" to="/"> TESTIMONIAL</router-link></li>
      <li>
        <q-btn unelevated color="primary"> BUY NOW </q-btn>
      </li>
    </ul>
  </q-header>
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
      <NewSection
        buttonText="Shop now"
        title="Vinyl Discount 50%"
        extraDetails="Checkin at our shop"
        imgSrc="background.jpg"
      ></NewSection>
    </SwiperSlide>
    <SwiperSlide>
      <NewSection
        buttonText="Order now"
        title="Dont Have Turntable?"
        extraDetails="We offer you the best"
        imgSrc="player.png"
      ></NewSection>
    </SwiperSlide>
    <SwiperSlide>
      <NewSection
        buttonText="shop now"
        title="Newest Collections"
        extraDetails="Update everyweek"
        imgSrc="collection.jpg"
      ></NewSection>
    </SwiperSlide>
  </Swiper>
  <TrustedBrand></TrustedBrand>
  <AboutSection></AboutSection>

  <VinylGenre class="index-page__genre text-primary"></VinylGenre>

  <CheckinSection></CheckinSection>
</template>

<script setup>
import NewSection from "../components/NewSection.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import TrustedBrand from "../components/TrustedBrand.vue";
import VinylGenre from "../components/VinylGenre.vue";

import AboutSection from "../components/AboutSection.vue";
import CheckinSection from "../components/CheckinSection.vue";

// Import Swiper styles

import "swiper/css";

import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";
const modules = [Pagination, Autoplay];
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

li {
  padding: 0 1.25rem;
}
</style>
