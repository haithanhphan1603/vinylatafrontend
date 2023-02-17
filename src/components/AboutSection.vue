<template>
  <!-- <div class="about-section text-h6 text-bold q-mb-sm q-mt-xl text-indigo-3">
    WHY VINYLATA
  </div> -->
  <div class="q-mt-xl">
    <q-img class="about-image" src="/about.jpg" height="26rem" :ratio="16 / 9">
      <div class="about-image__label absolute-full row justify-center">
        <div class="text-h4 text-bold col-12 text-center text-indigo-1 q-mt-lg">
          WHY
          <span class="text-indigo-11">VINYLATA</span>
        </div>
        <div class="col-6 about-image__text text-h6 w-20 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi alias
          possimus ratione odio cumque
        </div>
        <q-separator
          class="about__separator"
          vertical
          color="white"
          size="0.1rem"
          sinset
        />
        <div class="col-6 about-image__text text-h6 text-center q-ml-md">
          Officiis quaerat doloribus cupiditate nam debitis perspiciatis non,
          rerum harum deleniti odit adipisci voluptates, aspernatur fugiat?
        </div>
      </div>
    </q-img>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.about-image__label {
  background: rgba(0, 0, 0, 0.425);
}
.about-image__text {
  width: 30%;
  text-align: center;
}
.about__separator {
  height: 10rem;
}
</style>
