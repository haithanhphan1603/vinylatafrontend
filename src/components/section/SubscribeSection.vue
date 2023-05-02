<template>
  <div class="subcribe-section">
    <q-img
      src="https://i.scdn.co/image/ab67616d0000b2739a087af6a3bf8fa7d5db50e2"
      height="30rem"
    >
      <div class="subcribe-section__image absolute-full">
        <div class="text-h3 text-bold q-pt-xl">
          Subcribe To The Latest Music
        </div>
        <p class="desc q-pt-lg">
          <span class="text-h5 text-indigo-10 subcribe-section__span text-black"
            >For Music Lovers</span
          >
          <span class="text-h5 text-indigo-10 subcribe-section__span text-black"
            >By Music Lovers</span
          >
        </p>
        <q-form class="flex justify-center q-mt-xl" @submit.prevent="">
          <q-input
            class="input"
            v-model="text"
            outlined
            bg-color="white"
            placeholder="Enter your email here"
            color="indigo-13"
          ></q-input>
          <q-btn color="indigo-13 text-bold"> Join The Club </q-btn>
        </q-form>
      </div>
    </q-img>
  </div>
</template>

<script setup>
import { ref } from "vue";

const text = ref("");
</script>

<style lang="scss" scoped>
.subcribe-section {
  padding: 4.8rem 0;
}
.subcribe-section__image {
  background: rgba(0, 0, 0, 0.25);
  text-align: center;
  position: relative;
  padding: 1.5rem 0;
  height: 30rem;
  margin: auto;
}
.subcribe-section__span {
  display: inline-block !important;
  background-color: #fff;
  font-weight: 700;
  margin-bottom: 0.25em;
  padding: 0 1.5em;
  transform: rotate(-2deg);
}
.subcribe-section__span:nth-of-type(even) {
  transform: rotate(-1deg);
}
.desc {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.input {
  width: 500px;
}
</style>
