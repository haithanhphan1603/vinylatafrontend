<template>
  <q-img
    src="https://images.unsplash.com/photo-1619306979088-67bd1007be84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1757&q=80"
    :ratio="16 / 9"
    height="15rem"
  >
    <div class="tempo-font absolute-full flex flex-center text-h2">
      Your &nbsp;<span class="text-indigo-2">Vinylata </span>&nbsp; Account
    </div>
  </q-img>
  <AppContainer class="app-container">
    <div class="text-h3 q-pt-xl flex justify-between">
      <div class="tempo-font">Account</div>
      <div>
        <q-btn
          class="flex flex-center"
          unelevated
          color="indigo-9"
          @click="logout"
          >Logout</q-btn
        >
      </div>
    </div>
    <div class="q-pt-xl">
      <div class="text-h4 tempo-font">Account details:</div>
      <div class="text-h6 text-weight-regular q-pt-lg">
        Name: {{ user.firstName + " " + user.lastName }}
      </div>
      <div class="text-h6 text-weight-regular q-pt-sm">
        Address: {{ user.address }}
      </div>
      <div class="text-h6 text-weight-regular q-pt-sm">
        Email: {{ user.email }}
      </div>
    </div>
    <div class="q-pt-xl">
      <div class="text-h4 tempo-font">Your orders:</div>
      <div
        class="text-h6 text-weight-regular q-pt-md"
        v-if="!checkoutList.length"
      >
        You have no order yet, let's go shopping
      </div>
      <div v-else>
        <div v-for="checkout in checkoutList" class="q-pt-md" :key="checkout">
          <div class="checkout-item q-pa-sm q-px-md q-mt-sm">
            <div
              class="text-h6 text-weight-regular q-pt-md flex justify-between"
            >
              <div>
                <div>
                  <span class="tempo-font">Order Id#</span>{{ checkout.id }}
                </div>
                <div>
                  <span class="tempo-font">Order Status:</span>
                  {{ checkout.orderStatus }}
                </div>
              </div>
              <div class="text-h5 flex flex-center">
                ${{ checkout.totalPrice }}
              </div>
            </div>
            <div v-for="orderItem in checkout.itemDtoList" :key="orderItem.id">
              <CartMinimalCard
                class="q-my-md q-pa-sm cart-card"
                :image-src="orderItem.image"
                :name="orderItem.name"
                :artist="orderItem.artist"
                :quantity="orderItem.quantity"
                :price="orderItem.price"
              ></CartMinimalCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AppContainer>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useAuthStore } from "src/stores/auth";
import { useUserStore } from "src/stores/user";
import { onMounted } from "vue";
import AppContainer from "src/components/common/AppContainer.vue";
import { useRouter } from "vue-router";
import { useOrderStore } from "src/stores/order";
import CartMinimalCard from "src/cart/CartMinimalCard.vue";
const userStore = useUserStore();
const authStore = useAuthStore();
const orderStore = useOrderStore();
const router = useRouter();
const { checkoutList } = storeToRefs(orderStore);
const { user } = storeToRefs(userStore);
onMounted(() => {
  userStore.fetchUser();
  orderStore.fetchCheckoutList();
});
function logout() {
  authStore.logout();
  router.push("/");
}
</script>

<style lang="scss" scoped>
.tempo-font {
  font-family: "Tiempos", sans-serif;
}
.app-container {
  margin: 0 15rem;
}
.checkout-item {
  background-color: #f7f7f7;
}
.cart-card {
  background-color: white;
  border-radius: 8px;
}
</style>
