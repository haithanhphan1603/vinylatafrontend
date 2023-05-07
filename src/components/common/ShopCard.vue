<template>
  <div class="q-px-lg">
    <router-link :to="productLink">
      <q-img :src="imgSrc" ratio="1">
        <template #loading>
          <q-skeleton width="100%" height="100%"></q-skeleton>
        </template>
      </q-img>
    </router-link>
    <div>
      <router-link :to="productLink">
        <div class="shop-card__name text-h5 q-mt-md">{{ productName }}</div>
      </router-link>
      <router-link to="/">
        <div class="shop-card__author text-subtitle1 q-pt-sm">{{ artist }}</div>
      </router-link>
    </div>

    <div class="flex justify-between">
      <div class="text-h6 shop-card__price text-bold q-pt-sm">
        {{ currency + price }}
      </div>
      <router-link :to="productLink">
        <div class="shop-card__link-product q-pt-sm">
          <span class="text-bold text-subtitle1">View Product</span
          ><q-icon
            class="shop-card__icon"
            name="mdi-chevron-right"
            size="sm"
          ></q-icon>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  imgSrc: String,
  productName: String,
  price: Number,
  currency: String,
  artist: String,
  id: Number,
});
const productLink = computed(() => {
  return "/products/" + props.id;
});
</script>

<style lang="scss" scoped>
.shop-card__author {
  font-weight: 400;
  color: #333;
}
.shop-card__name {
  font-weight: 400;
}
.shop-card__price {
  color: #767676;
}
.shop-card__link-product {
  display: flex;
  align-items: center;
}
.shop-card__link-product:hover .shop-card__icon {
  transform: translate(0.25em);
}
.shop-card__icon {
  transition-duration: 0.25s;
}
</style>
