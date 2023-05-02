<template>
  <!-- <div class="about-section text-h6 text-bold q-mb-sm q-mt-xl text-indigo-3">
    WHY VINYLATA
  </div> -->
  <div class="about-section">
    <q-img class="about-image" src="/about.webp" height="26rem" :ratio="16 / 9">
      <template #loading>
        <q-skeleton width="100%" height="100%"></q-skeleton>
      </template>
      <div class="about-section__image-label absolute-full row justify-center">
        <div class="text-h4 text-bold col-12 text-center text-indigo-1 q-mt-xl">
          WHY
          <span class="text-indigo-11">VINYLATA</span>
        </div>
        <div class="col-6 about-section__image-text text-h6 w-20 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi alias
          possimus ratione odio cumque
        </div>
        <q-separator
          class="about-section__separator"
          vertical
          color="white"
          size="0.1rem"
          sinset
        />
        <div
          class="col-6 about-section__image-text text-h6 text-center q-ml-md"
        >
          Officiis quaerat doloribus cupiditate nam debitis perspiciatis non,
          rerum harum deleniti odit adipisci voluptates, aspernatur fugiat?
        </div>
      </div>
    </q-img>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.about-section__image-label {
  background: rgba(0, 0, 0, 0.425);
}
.about-section__image-text {
  width: 30%;
  text-align: center;
}
.about-section__separator {
  height: 10rem;
}
</style>
