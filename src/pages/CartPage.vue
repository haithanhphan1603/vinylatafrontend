<template>
  <q-separator></q-separator>
  <q-img
    src="https://images.unsplash.com/photo-1460058418905-d61a1b4a55fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80"
    :ratio="16 / 9"
    height="15rem"
  >
    <div class="cart-text absolute-full flex flex-center text-h2">
      Your &nbsp;<span class="text-indigo-3">Vinylata </span>&nbsp; Cart
    </div>
  </q-img>
  <AppContainer class="q-my-md">
    <div class="text-h3 q-py-xl flex justify-between">
      <div class="cart-text">Your Cart</div>
      <q-btn
        color="black"
        unelevated
        icon="mdi-shopping-music"
        label="Continue Shopping"
        @click="$router.push('/genres')"
      ></q-btn>
    </div>
    <!-- <div class="flex justify-between">
      <div class="flex">
        <div class="text-h5 product-text">Product</div>
        <div class="text-h5 q-pl-xl q-ml-sm">Description</div>
      </div>
      <div>
        <div class="flex">
          <div class="text-h5 q-pr-xl">Quantity</div>
          <div class="text-h5 q-pr-xl">Price</div>
          <div class="text-h5">Action</div>
        </div>
      </div>
    </div> -->
    <q-separator class="q-my-md"></q-separator>

    <div v-for="(orderItem, index) in orderItems" :key="orderItem.id">
      <CartCard
        :item="orderItem"
        @decrease="decrease(index)"
        @increase="increase(index)"
        @delete="deleteItem(index)"
      ></CartCard>
    </div>
    <q-separator class="q-my-md"></q-separator>
    <div>
      <div class="flex justify-between q-pt-lg">
        <div>
          <div class="text-h4">Cart Subtotal</div>
          <div class="text-h6 text-weight-light">
            Shipping & taxes calculated at checkout
          </div>
        </div>
        <div>
          <div class="text-h5 text-weight-regular cart-price flex flex-center">
            ${{ totalPrice }}
          </div>
          <div>
            <q-btn
              color="indigo-10"
              icon="mdi-album"
              unelevated
              label="Checkout"
              class="text-weight-bold cart-checkout q-px-xl q-my-lg full-width"
            ></q-btn>
          </div>
          <div class="q-mt-sm">
            <q-btn
              unelevated
              icon="fa-brands fa-amazon-pay"
              label="Amazon Pay"
              color="blue-14"
              class="cart-checkout text-weight-bold full-width"
            ></q-btn>
          </div>
          <div class="q-mt-sm">
            <q-btn
              unelevated
              icon="fa-brands fa-paypal"
              label="PayPal"
              color="light-blue-14"
              class="cart-checkout full-width text-weight-bold"
            ></q-btn>
          </div>
          <div class="q-mt-sm">
            <q-btn
              unelevated
              icon="fa-brands fa-google"
              color="cyan-14"
              label="Google Pay"
              class="cart-checkout full-width text-weight-bold"
            ></q-btn>
          </div>
        </div>
      </div>
    </div>
  </AppContainer>
</template>

<script setup>
import { useCartStore } from "src/stores/cart";
import CartCard from "src/cart/CartCard.vue";
import AppContainer from "src/components/common/AppContainer.vue";

import { storeToRefs } from "pinia";
import { usePersistCart } from "../composables/use-persisted-cart";
usePersistCart();
const cartStore = useCartStore();
const { orderItems, totalPrice } = storeToRefs(cartStore);
function decrease(index) {
  cartStore.decreaseItem(index);
}
function increase(index) {
  cartStore.increaseItem(index);
}
function deleteItem(index) {
  cartStore.deleteItem(index);
}
</script>

<style lang="scss" scoped>
.cart-text {
  font-family: "Tiempos", sans-serif;
}
.cart-checkout {
  padding: 1rem 5rem;
}
.amazonpay-btn {
  display: flex;
  align-items: center;
}
.amazon-pay {
  background-image: url("@/assets/amazon-pay.svg");
  background-repeat: no-repeat;
  background-size: contain;
  height: 2em;
  width: 2em;
}
</style>
