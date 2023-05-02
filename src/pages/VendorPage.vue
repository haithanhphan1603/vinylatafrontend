<template>
  <div class="q-pb-xl">
    <q-img
      :src="vendorImage"
      position="90%"
      :ratio="16 / 9"
      height="30rem"
      fit="contain"
    >
      <div class="image-label absolute-full text-h1 genres-page__music-genres">
        Artist- {{ vendorName }}
      </div>
      <template #loading>
        <q-skeleton width="100%" height="100%"></q-skeleton>
      </template>
    </q-img>
  </div>
  <div>
    <div class="row q-px-md q-py-xl q-px-xl">
      <div
        v-for="product in products"
        :key="product.id"
        class="col-12 col-sm-6 col-md-4 col-lg-3"
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
</template>

<script setup>
import { useRoute } from "vue-router";
import ShopCard from "src/components/common/ShopCard.vue";
import { useVendorDetailStore } from "src/stores/vendor-detail";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";

const vendorDetailStore = useVendorDetailStore();
const { products, vendorName, vendorImage } = storeToRefs(vendorDetailStore);

const route = useRoute();

onMounted(() => {
  vendorDetailStore.fetchAllProducts(route.params.id);
  console.log(products.value);
});
</script>

<style lang="scss" scoped>
.genres-page__music-genres {
  font-family: "Tiempos", sans-serif;
  display: flex;
  align-items: center;
  padding-left: 6rem;
}
.image-label {
  background: rgba(0, 0, 0, 0.3);
}
</style>
