<template>
  <div class="row">
    <div v-for="product in products" :key="product.id" class="col-3">
      <q-card flat bordered>
        <q-card-section
          ><q-img :src="product.imageSrc" width="14rem" :ratio="1"></q-img>
        </q-card-section>
        <q-card-section>
          <div class="text-h5">{{ product.name }}</div>
          <div class="text-subtitle1">{{ product.type }}</div>
          <div class="text-h6">{{ product.price }}</div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useProductStore } from "../stores/category-detail";

const productStore = useProductStore();
const { products } = storeToRefs(productStore);
</script>

<style lang="scss" scoped></style>
