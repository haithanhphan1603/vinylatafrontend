<template>
  <div class="flex justify-between">
    <div class="flex">
      <div class="product-thumbnail q-mr-md">
        <div class="product-thumbnail__wrapper">
          <img :src="imageSrc" :alt="name" class="product-thumbnail__image" />
        </div>
        <span class="product-thumbnail__quantity">{{ quantity }}</span>
      </div>
      <div class="flex flex-center q-pl-sm text-subtitle2 text-weight-medium">
        {{ artist + ": " + name }}
      </div>
    </div>
    <div class="flex flex-center text-subtitle2 text-weight-bold">
      ${{ +price * quantity }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  imageSrc: String,
  name: String,
  artist: String,
  price: Number,
  quantity: Number,
});
</script>

<style lang="scss" scoped>
.product-thumbnail {
  width: 5em;
  height: 5em;
  border-radius: 8px;
  background: #fff;
  position: relative;
}
.product-thumbnail__quantity {
  font-size: 0.8571428571em;
  font-weight: 500;
  line-height: 1.75em;
  white-space: nowrap;
  text-align: center;
  border-radius: 1.75em;
  background-color: rgba(114, 114, 114, 0.9);
  color: #fff;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  min-width: 1.75em;
  height: 1.75em;
  padding: 0 0.5833333333em;
  position: absolute;
  right: -0.75em;
  top: -0.75em;
  z-index: 3;
}
.product-thumbnail__wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  z-index: 1;
}
.product-thumbnail__image {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  max-width: 100%;
  max-height: 100%;
  margin: auto;
}
</style>
