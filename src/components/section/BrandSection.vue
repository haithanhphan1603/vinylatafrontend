<template>
  <div class="trusted-brand">
    <div class="trusted-brand__title flex flex-center">
      <div class="text-indigo-5">Vinylata&nbsp;</div>
      is trusted by many top records
    </div>
    <div class="flex flex-center q-mt-xs">
      <q-img
        class="q-ml-xl trusted-brand__img"
        width="14rem"
        src="/logo/brand1.png"
      ></q-img>
      <q-img
        class="q-ml-xl trusted-brand__img"
        width="10rem"
        src="/logo/brand2.png"
      ></q-img>
      <q-img
        class="q-ml-xl trusted-brand__img"
        width="10rem"
        src="/logo/brand3.png"
      ></q-img>
      <q-img
        class="q-ml-xl trusted-brand__img"
        width="10rem"
        src="/logo/brand4.png"
      ></q-img>
      <q-img
        class="q-ml-xl trusted-brand__img"
        width="10rem"
        src="/logo/brand5.png"
      ></q-img>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.trusted-brand__title {
  font-size: 1.4rem;
  text-transform: uppercase;
  letter-spacing: 0.75px;
  font-weight: 500;

  color: #888;
}
.trusted-brand {
  margin-top: 4rem;
  margin-bottom: 4rem;
}
.trusted-brand__img {
  filter: brightness(0);
  opacity: 50%;
}
</style>
