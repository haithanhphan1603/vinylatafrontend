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

  <NewsSection></NewsSection>
  <BrandSection></BrandSection>
  <AboutSection></AboutSection>

  <CollectionSection class="index-page__genre text-primary"></CollectionSection>

  <CheckinSection></CheckinSection>
</template>

<script setup>
import TheNews from "../components/TheNews.vue";
import BrandSection from "../components/section/BrandSection.vue";
import CollectionSection from "../components/section/CollectionSection.vue";
import NewsSection from "../components/section/NewsSection.vue";
import AboutSection from "../components/section/AboutSection.vue";
import CheckinSection from "../components/section/CheckinSection.vue";
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
