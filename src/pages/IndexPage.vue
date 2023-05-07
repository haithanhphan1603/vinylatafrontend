<template>
  <NewsSection></NewsSection>
  <BrandSection></BrandSection>
  <AboutSection></AboutSection>
  <CollectionSection class="index-page__genre text-primary"></CollectionSection>
  <SampleSection></SampleSection>
  <CheckinSection></CheckinSection>
  <SubscribeSection></SubscribeSection>
  <IntroSection></IntroSection>
</template>

<script setup>
import BrandSection from "../components/section/BrandSection.vue";
import CollectionSection from "../components/section/CollectionSection.vue";
import NewsSection from "../components/section/NewsSection.vue";
import AboutSection from "../components/section/AboutSection.vue";
import CheckinSection from "../components/section/CheckinSection.vue";
import SampleSection from "../components/section/SampleSection.vue";
import SubscribeSection from "src/components/section/SubscribeSection.vue";
import IntroSection from "src/components/section/IntroSection.vue";
import { usePersistCart } from "../composables/use-persisted-cart";
import { useMeta } from "quasar";
const metaData = { title: "Vinylata" };
useMeta(metaData);
usePersistCart();
</script>
<style lang="scss" scoped>
li {
  padding: 0 1.25rem;
}
</style>
