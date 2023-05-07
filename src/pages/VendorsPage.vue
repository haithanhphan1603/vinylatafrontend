<template>
  <div class="q-pb-xl">
    <q-img
      src="https://images.unsplash.com/photo-1531060504220-d30bebf3daaf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      :ratio="16 / 9"
      height="30rem"
    >
      <div
        class="absolute-full text-h1 genres-page__music-genres flex flex-center"
      >
        Shop By&nbsp;
        <div class="text-italic">Artists</div>
      </div>
      <template #loading>
        <q-skeleton width="100%" height="100%"></q-skeleton>
      </template>
    </q-img>
  </div>

  <div class="row q-px-md q-py-xl q-px-sm">
    <div
      v-for="vendor in vendors"
      :key="vendor.id"
      class="col-12 col-sm-6 col-md-4 col-lg-3 q-py-lg"
    >
      <GenreCard
        :name="vendor.vendorName"
        :imgSrc="vendor.vendorImage"
        :id="vendor.id"
        :position="'0 0'"
      ></GenreCard>
    </div>
  </div>
</template>

<script setup>
import GenreCard from "src/components/genres/GenreCard.vue";
import AppContainer from "src/components/common/AppContainer.vue";
import { onMounted } from "vue";
import { useVendorStore } from "src/stores/vendors";
import { storeToRefs } from "pinia";
import { useMeta } from "quasar";
const metaData = { title: "Vinylata- Artists" };
useMeta(metaData);
const vendorStore = useVendorStore();
const { vendors } = storeToRefs(vendorStore);

onMounted(() => {
  vendorStore.fetchAll();
});
</script>

<style lang="scss" scoped>
.genres-page__music-genres {
  font-family: "Tiempos", sans-serif;
}
</style>
