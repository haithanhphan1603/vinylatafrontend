<template>
  <q-separator></q-separator>

  <AppContainer class="product-page">
    <div class="row">
      <div class="col-6 q-pl-xl product-page__image-box">
        <q-img :src="product.productImage" class="product-page__image q-pr-xl">
          <template #loading>
            <q-skeleton width="100%" height="100%"></q-skeleton>
          </template>
        </q-img>
      </div>

      <div class="col-6 q-pl-lg">
        <div class="flex no-wrap">
          <q-separator vertical class="separator"></q-separator>
          <div class="q-pl-xl">
            <h1 class="text-h4 q-ma-none text-bold product-page__title">
              {{ productTitle }}
            </h1>
            <div class="product-page__attributes q-pt-md text-h6">
              {{ product.productAttributes }}
            </div>
            <router-link
              :to="`/vendors/${product?.vendor?.id}`"
              class="product-page__vendor"
            >
              <div class="text-h5 q-mt-md">
                {{ product?.vendor?.vendorName }}
              </div>
            </router-link>
            <div class="product-page__price q-pt-md text-weight-medium text-h5">
              ${{ product.productPricing }}
            </div>
            <div>
              <q-btn
                class="full-width q-mt-sm q-py-sm text-bold"
                color="primary"
                unelevated
                label="Add to cart"
                icon="mdi-cart"
                @click="addToCart"
              ></q-btn>
            </div>
            <div
              class="product-page__shipping q-pt-sm text-subtitle1 text-indigo-11"
            >
              Shipping on May 26, 2023
            </div>
            <div class="product-page__description q-pt-md text-subtitle1">
              {{ product.productDescription }}
            </div>

            <q-separator class="q-my-lg"></q-separator>
            <div class="product-page__guarantee">
              <div class="flex product-page__guarantee-title">
                <q-icon name="mdi-check" size="sm" color="indigo-7"></q-icon>
                <div class="q-ml-sm text-subtitle1">
                  <div class="text-bold">Satisfaction Guarantee*</div>
                  <div>30-day returns & exchanges</div>
                </div>
              </div>
            </div>
            <div class="product-page__guarantee q-mt-md">
              <div class="flex product-page__guarantee-title">
                <q-icon name="mdi-check" size="sm" color="indigo-7"></q-icon>
                <div class="q-ml-sm text-subtitle1">
                  <div class="text-bold">100% Authentic Guarantee*</div>
                  <div>Refund 200% of the price if it fakes</div>
                </div>
              </div>
            </div>
            <div class="q-pt-sm">
              *Vinylata is known for exceptional quality and durability. We
              offer the materials that resist to water, scratches, and UV rays.
            </div>
          </div>
        </div>
      </div>
    </div>
  </AppContainer>
</template>

<script setup>
import AppContainer from "src/components/common/AppContainer.vue";
import { computed, onMounted, ref } from "vue";
import { storeToRefs } from "pinia";
import { useProductStore } from "src/stores/product";
import { useRoute, useRouter } from "vue-router";
import { useCartStore } from "src/stores/cart";

const productStore = useProductStore();
const { product } = storeToRefs(productStore);
const route = useRoute();
const router = useRouter();
const cartStore = useCartStore();

onMounted(() => {
  productStore.fetchProduct(route.params.id);
});
const productTitle = computed(() => {
  return product.value.productTitle;
});

function addToCart() {
  cartStore.pushItemToCart({
    id: product.value.id,
    image: product.value.productImage,
    name: product.value.productTitle,
    price: product.value.productPricing,
    artist: product.value.artist,
    quantity: 1,
  });
  router.push("/cart");
}
</script>

<style lang="scss" scoped>
.product-page__image {
  width: 26rem;
  height: 26rem;
}
.product-page {
  margin-top: 5rem;
}
.product-page__attributes {
  color: #666;
}
.product-page__title {
  font-size: 2.625rem;
}
.product-page__guarantee-title {
  display: flex;
}
.product-page__image-box {
  display: flex;
}
</style>
