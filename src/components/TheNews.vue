<template>
  <q-img class="index-page__hero-image" :ratio="16 / 9" :src="imgSrc">
    <template #loading>
      <q-skeleton width="100%" height="100%"></q-skeleton>
    </template>
    <div class="index-page__hero-section absolute-full row justify-center">
      <div class="index-page__hero-caption col-10 row">
        <p class="new-section__description text-h4 text-regular col-3">
          {{ description }}
        </p>
        <div class="new-section__title text-h1 col-12 text-medium">
          {{ title }}
        </div>
        <div class="new-section__info text-h1 col-12 text-regular">
          {{ extraDetails }}
        </div>

        <div class="col-12 q-mt-lg">
          <q-btn
            class="text-subtitle1 text-bold"
            padding="1rem"
            outline
            color="white"
            @click="$router.push('/vendors')"
            >{{ buttonText }}</q-btn
          >
        </div>
      </div>
    </div>
  </q-img>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  buttonText: String,
  extraDetails: String,
  imgSrc: String,
});
</script>

<style lang="scss" scoped>
.index-page__hero-image {
  height: 75vh;
}
.new-section__title,
.new-section__description {
  font-family: "Tiempos", sans-serif;
}
.new-section__info {
  font-family: "Tiempos", sans-serif;
  font-style: italic;
}

.index-page__hero-caption {
  margin: 0;
  position: absolute;
  top: 40%;
  transform: translate(0, -50%);
}
.index-page__hero-section {
  color: white;
}
</style>
