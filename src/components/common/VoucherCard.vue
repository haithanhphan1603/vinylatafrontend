<template>
  <q-item
    @click="appliedVoucherId = id"
    class="the-coupon"
    :active="appliedVoucherId === id.toString()"
    active-class="the-coupon--active"
  >
    <q-item-section>
      <div class="flex justify-between">
        <div class="text-weight-medium text-indigo-10">
          {{ name }}
        </div>
        <div class="text-white text-weight-medium text-indigo-10">
          Expirated Date: {{ expirated }}
        </div>
      </div>
    </q-item-section>
  </q-item>
</template>

<script setup>
defineProps({
  name: String,
  discount: Number,
  expirated: String,
  id: Number,
});
import { useCartStore } from "src/stores/cart";
import { storeToRefs } from "pinia";
const cartStore = useCartStore();
const { appliedVoucherId } = storeToRefs(cartStore);
</script>

<style lang="scss" scoped>
.the-coupon {
  border-radius: 8px;
  border: 0.1rem solid black;
}
.the-coupon--active {
  background-color: $indigo-9;
  color: white !important;
}
</style>
