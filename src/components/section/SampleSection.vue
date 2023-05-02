<template>
  <div class="sample-section row">
    <q-img class="tape mobile-hide" src="tape.png" width="6rem"></q-img>
    <div class="col-6 sample-section__pre-order">
      <div class="sample-section__section">
        <div class="text-h4 text-bold">
          <span>Pre-order</span>
        </div>
        <div class="row q-col-gutter-x-xl q-mt-lg q-col-gutter-y-xl">
          <div class="col-6">
            <ShopCard
              currency="$"
              productName="The Chain"
              :price="23.4"
              artist="Steel Panther"
            ></ShopCard>
          </div>
          <div class="col-6">
            <ShopCard
              currency="$"
              productName="The Chain"
              :price="23.4"
              artist="Steel Panther"
            ></ShopCard>
          </div>
          <div class="col-6">
            <ShopCard
              currency="$"
              productName="The Chain"
              :price="23.4"
              artist="Steel Panther"
            ></ShopCard>
          </div>
          <div class="col-6">
            <ShopCard
              currency="$"
              productName="The Chain"
              :price="23.4"
              artist="Steel Panther"
            ></ShopCard>
          </div>
        </div>
      </div>
    </div>
    <div class="sample-section__new-release col-6">
      <div class="sample-section__section--pre-order">
        <div class="text-h4 text-bold text-indigo-10">
          <span>New releases</span>
        </div>
        <div class="row q-col-gutter-x-xl q-mt-lg q-col-gutter-y-xl">
          <div class="col-6">
            <ShopCard
              currency="$"
              productName="The Chain"
              :price="23.4"
              artist="Steel Panther"
            ></ShopCard>
          </div>
          <div class="col-6">
            <ShopCard
              currency="$"
              productName="The Chain"
              :price="23.4"
              artist="Steel Panther"
            ></ShopCard>
          </div>
          <div class="col-6">
            <ShopCard
              currency="$"
              productName="The Chain"
              :price="23.4"
              artist="Steel Panther"
            ></ShopCard>
          </div>
          <div class="col-6">
            <ShopCard
              currency="$"
              productName="The Chain"
              :price="23.4"
              artist="Steel Panther"
            ></ShopCard>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppContainer from "../common/AppContainer.vue";
import ShopCard from "../common/ShopCard.vue";
</script>

<style lang="scss" scoped>
.sample-section {
  position: relative;
  padding-top: 2rem;
}
.sample-section__pre-order {
  background-color: $indigo-1;

  background-size: cover;
}
.sample-section__section {
  margin-left: 6rem;
  margin-right: 6rem;
  margin-top: 3rem;
  position: relative;
}
.sample-section__section--pre-order {
  margin-left: 6rem;
  margin-right: 6rem;
  margin-top: 3rem;
  margin-bottom: 6rem;
}
.tape {
  display: block !important;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 2rem;
  height: 30rem;
  left: calc(50% - 3rem);
}
</style>
