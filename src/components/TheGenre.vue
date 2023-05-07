<template>
  <q-card class="the-genre" flat bordered>
    <q-card-section>
      <div class="flex flex-center">
        <q-img
          class="the-genre__img"
          width="16rem"
          ratio="1"
          :src="src"
        ></q-img>
      </div>
      <div class="the-genre__head q-mx-xl q-mt-md flex justify-between">
        <div class="the-genre__type text-h5 text-indigo-10 text-medium">
          {{ type }}
        </div>

        <div>
          <q-btn
            flat
            round
            color="indigo-11"
            padding="0.5rem"
            icon="mdi-heart"
          />
        </div>
      </div>
      <div class="q-mt-md flex flex-center">
        <q-btn
          unelevated
          class="the-genre__button text-bold"
          color="indigo-10"
          outline=""
          :rounded="false"
          icon-right="mdi-chevron-right"
        >
          <div class="the-genre__button-content">
            <div @click="$router.push(`/genres/${to}`)" class="button-text">
              ORDER NOW
            </div>
          </div>
        </q-btn>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { useRouter } from "vue-router";

defineProps({
  src: String,
  type: String,
  to: Number,
});
const router = useRouter();
function navigate() {
  router.push(`/${to}`);
}
</script>

<style lang="scss" scoped>
.the-genre {
  background-size: cover;
  overflow: hidden;
  transition: all 0.4s;
}
.the-genre__head {
  display: flex;
  align-items: center;
}

.the-genre__type {
  margin: auto 0;
  font-weight: 600;
  color: #333333;
}
.the-genre__button:hover {
  background-color: $indigo-11 !important;
  color: white !important;
}
.the-genre__button {
  width: 14rem;
}
.the-genre__button-content {
  display: flex;

  align-items: center;
}
</style>
