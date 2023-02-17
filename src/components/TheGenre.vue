<template>
  <q-card class="the-genre" flat bordered>
    <q-card-section>
      <div class="flex flex-center">
        <q-img
          class="the-genre__img"
          width="16.5rem"
          ratio="1"
          :src="src"
        ></q-img>
      </div>
      <div class="the-genre__head row q-mx-xl q-mt-xs justify-between">
        <div class="the-genre__type text-h5 text-medium q-mt-md">
          {{ type }}
        </div>
        <div>
          <q-btn flat round color="primary" padding="0.5rem" icon="mdi-heart" />
        </div>
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
  background-size: cover;
  overflow: hidden;
  transition: all 0.4s;
}

.the-genre__head {
  display: flex;

  align-items: center;
}

.the-genre:hover {
  transform: translateY(-1.2rem);
}
.the-genre__type {
  margin: auto 0;
  font-weight: 600;
  color: #333333;
}
.the-genre__button:hover {
  background-color: $primary !important;
  color: white !important;
}
</style>
