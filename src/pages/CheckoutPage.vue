<template>
  <AppContainer class="q-mt-xl">
    <div class="row">
      <div class="col-6 form">
        <q-form
          v-if="!isAuth"
          @submit="onSubmit"
          @reset="onReset"
          class="q-pa-xl"
        >
          <div class="row">
            <div class="text-h5 text-weight-medium q-mb-lg">
              Contact information
            </div>
            <p>
              Shipping is available to the 64 provinces in Viet Nam. We are
              unable to ship to International, PO Box, or APO/FPO addresses
            </p>
            <p class="q-pb-md">
              Please ensure your address is entered correctly. We are unable to
              redirect to an alternate shipping address once an order is placed.
            </p>
            <q-input
              class="col-6"
              outlined
              v-model="firstName"
              label="First name"
              lazy-rules
              color="indigo-10"
              :rules="[
                (val) => (val && val.length > 0) || 'Please type something',
              ]"
            />
            <q-input
              class="col-6 q-pl-lg"
              outlined
              v-model="lastName"
              label="Last name"
              lazy-rules
              color="indigo-10"
              :rules="[
                (val) => (val && val.length > 0) || 'Please type something',
              ]"
            />
          </div>
          <q-input
            outlined
            v-model="address"
            label="Your address *"
            lazy-rules
            class="q-mt-sm"
            color="indigo-10"
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
          <q-input
            outlined
            v-model="phone"
            label="Phone"
            lazy-rules
            type="tel"
            class="q-mt-sm"
            color="indigo-10"
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
          <q-input
            outlined
            v-model="email"
            label="Email"
            type="email"
            lazy-rules
            class="q-mt-sm"
            color="indigo-10"
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
          <q-btn
            color="indigo-10"
            type="submit"
            unelevated
            class="full-width q-mt-lg"
            :disable="isSuccess"
            >SUBMIT ORDER</q-btn
          >
        </q-form>
        <div v-else class="">
          <div class="text-h3">
            Vinylata will use your account details to make the checkout
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
        </div>
      </div>

      <div class="col-6 q-pl-xl checkout-cart">
        <div v-for="orderItem in orderItems" :key="orderItem.id">
          <CartMinimalCard
            class="q-my-md"
            :image-src="orderItem.image"
            :name="orderItem.name"
            :artist="orderItem.artist"
            :quantity="orderItem.quantity"
            :price="orderItem.price"
          ></CartMinimalCard>
        </div>
        <q-separator class="q-my-md"></q-separator>
        <div class="text-subtitle1">
          <div class="flex justify-between">
            <div>Subtotal</div>
            <div>${{ totalPrice }}</div>
          </div>
          <div class="flex justify-between">
            <div>Shipping</div>
            <div>${{ shippingPrice.toFixed(2) }}</div>
          </div>
        </div>
        <q-separator class="q-my-md"> </q-separator>
        <div v-if="vouchers.length" class="q-mb-md">
          <div class="text-h6">
            Discount
            <div class="text-subtitle1">(not included shipping)</div>
          </div>
          <div class="q-pt-sm" v-for="voucher in vouchers" :key="voucher.id">
            <VoucherCard
              :name="voucher.name"
              :discount="voucher.discount"
              :expirated="voucher.expiratedDate"
              class="cursor-pointer"
              @click="applyVoucher(voucher?.discount)"
              :id="voucher.id"
            ></VoucherCard>
          </div>
        </div>
        <div class="flex justify-between text-h6">
          <div>Total</div>
          <div>${{ finalPrice }}</div>
        </div>
        <q-btn
          v-if="isAuth"
          color="indigo-10"
          @click="onSubmit"
          unelevated
          class="full-width q-mt-lg"
          :disable="isSuccess"
          >SUBMIT ORDER</q-btn
        >
        <div v-if="isSuccess" class="text-h5 q-pt-xl">
          Your order has been submitted successfully, return to the homepage in
          <span class="text-indigo-8">{{ count }}</span> second
        </div>
      </div>
    </div>
  </AppContainer>
</template>

<script setup>
import AppContainer from "src/components/common/AppContainer.vue";
import CartMinimalCard from "src/cart/CartMinimalCard.vue";
import VoucherCard from "src/components/common/VoucherCard.vue";

import { computed, ref, onMounted, toRaw } from "vue";
import { useCartStore } from "src/stores/cart";
import { storeToRefs } from "pinia";
import { useUserStore } from "src/stores/user";
import { useOrderStore } from "src/stores/order";
import { useRouter } from "vue-router";
import { useVoucherStore } from "src/stores/voucher";

import { useMeta } from "quasar";
const metaData = { title: "Vinylata- Checkout" };
useMeta(metaData);

const address = ref("");
const firstName = ref("");
const lastName = ref("");
const phone = ref("");
const email = ref("");

const router = useRouter();
const cartStore = useCartStore();
const { orderItems, totalPrice, voucher, totalDiscountPrice } =
  storeToRefs(cartStore);
const orderStore = useOrderStore();
const userStore = useUserStore();

const { user } = storeToRefs(userStore);
const voucherStore = useVoucherStore();

const { vouchers } = storeToRefs(voucherStore);

const isAuth = localStorage.getItem("token");
const isSuccess = ref(false);
const finalPrice = computed(() => {
  return (+totalDiscountPrice.value + shippingPrice).toFixed(2);
});
const isClicked = ref(false);
const count = ref(5);
function applyVoucher(discount) {
  voucher.value = discount;
}
const shippingPrice = 20;
const userName = computed(() => {
  if (user.value) {
    return user.value.firstName + " " + user.value.lastName;
  }
  return firstName.value + " " + lastName.value;
});

function onSubmit() {
  if (!!user.value) {
    const checkOutItem = {
      itemDtoList: toRaw(orderItems.value),
      orderUserDto: {
        userName: userName.value,
        phoneNumber: user.value.phoneNumber,
        address: user.value.address,
        email: user.value.email,
      },
      totalPrice: +finalPrice.value,
    };
    orderStore.pushCheckoutItem(checkOutItem);
    console.log(JSON.stringify(checkOutItem));
  } else {
    orderStore.pushCheckoutItem({
      itemDtoList: toRaw(orderItems.value),
      orderUserDto: {
        userName: userName.value,
        phoneNumber: phone.value,
        address: address.value,
        email: email.value,
      },
      totalPrice: +finalPrice.value,
    });
  }
  isSuccess.value = true;
  let timer = setInterval(() => {
    count.value--;

    if (count.value === 0) {
      clearInterval(timer);
      router.push("/");
    }
  }, 1000);
}

onMounted(() => {
  userStore.fetchUser();
  voucherStore.fetchAllVouchers();
});
</script>

<style lang="scss" scoped>
.clicked-card {
  background-color: $indigo-10;
  color: white !important;
}
</style>
