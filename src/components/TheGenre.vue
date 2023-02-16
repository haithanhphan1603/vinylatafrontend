<template>
  <q-card class="the-genre" flat bordered>
    <q-card-section>
      <div class="flex flex-center">
        <q-img width="17rem" ratio="1" :src="src"></q-img>
      </div>

      <div class="the-genre__type text-h5 text-medium q-mt-md flex flex-center">
        {{ type }}
      </div>
      <div class="flex q-mt-sm flex-center">
        <q-btn
          unelevated
          class="the-genre__button text-bold"
          color="primary"
          label="ORDER NOW"
          icon-right="mdi-album"
          outline=""
          :rounded="false"
        ></q-btn>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
defineProps({
  src: String,
  type: String,
});
</script>

<style lang="scss" scoped>
.the-genre {
  background-image: url("/collections/dust-dark.png");
  overflow: hidden;
  transition: all 0.4s;
}
.the-genre:hover {
  transform: translateY(-1.2rem);
}
.the-genre__type {
  z-index: -1;
  font-weight: 600;
  color: #333333;
}
.the-genre__button:hover {
  background-color: $primary !important;
  color: white !important;
}
</style>
