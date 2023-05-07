<template>
  <div class="q-pb-xl">
    <q-img :src="categoryBackground" :ratio="16 / 9" height="25rem">
      <div class="absolute-full text-h1 genres-page__music-genres">
        Genres- {{ categoryName }}
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
import { useCategoryDetailStore } from "src/stores/category-detail";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import { useMeta } from "quasar";
const metaData = { title: "Vinylata" };
useMeta(metaData);

const categoryDetailStore = useCategoryDetailStore();
const { products, categoryBackground, categoryName } =
  storeToRefs(categoryDetailStore);

const route = useRoute();

onMounted(() => {
  categoryDetailStore.fetchAllProducts(route.params.id);
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
</style>
