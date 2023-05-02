<template>
  <q-card class="row flex justify-between q-my-md" square flat bordered>
    <q-card-section class="col-6 flex">
      <q-img :src="item.image" width="10rem" height="10rem"></q-img>
      <div class="q-pl-xl q-pt-lg">
        <div class="text-h5 text-weight-medium">Title: {{ item.name }}</div>
        <div class="text-subtitle1">Artist: {{ item.artist }}</div>
        <div class="text-subtitle1 q-pt-sm flex">
          <span class="text-weight-medium">Price:&nbsp;</span>
          <div>${{ item.price }}</div>
        </div>
      </div>
    </q-card-section>
    <q-card-section class="col-6 flex flex-center">
      <div class="row full-width">
        <div class="col-4 flex flex-center">
          <q-btn
            @click="$emit('decrease')"
            outline=""
            icon="mdi-minus"
            padding="xs"
            color="indigo-9"
          ></q-btn>
          <div class="text-bold text-h6 q-px-sm">{{ item.quantity }}</div>
          <q-btn
            @click="$emit('increase')"
            outline
            padding="xs"
            icon="mdi-plus"
            color="indigo-9"
          ></q-btn>
        </div>
        <div class="text-h6 col-4 flex flex-center">
          Total: ${{ totalPrice }}
        </div>
        <div class="col-4 flex flex-center">
          <q-btn
            color="indigo-3"
            icon="mdi-close"
            round
            size="sm"
            unelevated
            @click="$emit('delete')"
          ></q-btn>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
  item: Object,
});
const totalPrice = computed(() => {
  return props.item?.price * props.item?.quantity;
});
</script>

<style lang="scss" scoped></style>
