<template>
  <div class="checkin-section q-mt-xl">
    <div class="text-h6 text-bold q-mb-sm q-pt-xl text-indigo-5 text-center">
      CHECK-IN IMAGES
    </div>
    <div class="vinyl-genre__title text-h4 text-bold text-center q-mb-xl">
      Vinylata has music fanatics with artistic eyes
    </div>
    <AppContainer class="q-pd-none">
      <div class="row">
        <div class="col-3 q-mt-sm">
          <q-img
            ratio="1"
            class="q-gutter-sm checkin-section__image"
            src="/checkin/image-checkin.jpg"
          ></q-img>
        </div>
        <div class="col-3 q-mt-sm">
          <q-img
            ratio="1"
            class="q-gutter-sm checkin-section__image"
            src="/checkin/image-checkin1.jpg"
          ></q-img>
        </div>
        <div class="col-3 q-mt-sm">
          <q-img
            ratio="1"
            class="q-gutter-sm checkin-section__image"
            src="/checkin/image-checkin2.jpg"
          ></q-img>
        </div>
        <div class="col-3 q-mt-sm">
          <q-img
            ratio="1"
            class="q-gutter-sm checkin-section__image"
            src="/checkin/image-checkin3.jpg"
          ></q-img>
        </div>
        <div class="col-3 q-mt-sm">
          <q-img
            ratio="1"
            class="q-gutter-sm checkin-section__image"
            src="/checkin/image-checkin4.jpg"
          ></q-img>
        </div>
        <div class="col-3 q-mt-sm">
          <q-img
            ratio="1"
            class="q-gutter-sm checkin-section__image"
            src="/checkin/image-checkin5.jpg"
          ></q-img>
        </div>
        <div class="col-3 q-mt-sm">
          <q-img
            ratio="1"
            class="q-gutter-sm checkin-section__image"
            src="/checkin/image-checkin6.jpg"
          ></q-img>
        </div>
        <div class="checkin-section__image col-3 q-mt-sm">
          <q-img
            ratio="1"
            class="q-gutter-sm checkin-section__image"
            src="/checkin/image-checkin7.jpg"
          ></q-img>
        </div>
      </div>
      <div class="q-mt-lg text-h5 text-indigo-10 text-bold text-center">
        <div class="checkin-section__refer-text">
          Checkout our newest images and comment →
        </div>
      </div>
    </AppContainer>
  </div>
</template>

<script setup>
import AppContainer from "./AppContainer.vue";
</script>

<style lang="scss" scoped>
.checkin-section {
  background-color: $indigo-1;
  background-image: url("/collections/dust-dark.png");
}

.checkin-section__refer-text {
  border-bottom: 2px solid currentColor;
  display: inline-block;
  padding-bottom: 1px;
}
</style>
