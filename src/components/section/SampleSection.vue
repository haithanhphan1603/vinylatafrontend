<template>
  <div class="sample-section row">
    <div class="sample-section__pre-order">
      <div class="sample-section__section">
        <div class="text-h4 text-bold">
          <div class="text-h6 text-bold text-indigo-5 flex flex-center">
            VINYLATA'S PREORDER
          </div>
          <span class="flex flex-center"
            >Vinylata always update the latest vinyl</span
          >
        </div>
        <div class="row q-px-xl">
          <div
            v-for="product in products"
            class="col-3 q-pt-xl"
            :key="product.id"
          >
            <ShopCard
              :img-src="product.productImage"
              :product-name="product.productTitle"
              :artist="product.artist"
              :price="product.productPricing"
              :id="product.id"
              currency="$"
            ></ShopCard>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import AppContainer from "../common/AppContainer.vue";
import ShopCard from "../common/ShopCard.vue";
import { useCategoryStore } from "src/stores/categories";
import { useCategoryDetailStore } from "src/stores/category-detail";
import { onMounted } from "vue";

const categoryDetail = useCategoryDetailStore();
const { products } = storeToRefs(categoryDetail);
onMounted(() => {
  categoryDetail.fetchSampleProduct();
});
</script>

<style lang="scss" scoped>
.sample-section {
  position: relative;
  padding-top: 2rem;
}
.sample-section__pre-order {
  background-color: $indigo-1;
  background-size: cover;
  padding-bottom: 5rem;
}
.sample-section__section {
  margin-left: 6rem;
  margin-right: 6rem;
  margin-top: 3rem;
  position: relative;
}
</style>
