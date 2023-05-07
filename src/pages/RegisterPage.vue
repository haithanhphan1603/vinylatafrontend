<template>
  <div>
    <q-card
      class="auth-page q-pa-xl"
      style="background: $indigo-2"
      flat
      bordered
    >
      <q-form @submit.prevent="submitForm">
        <q-card-section>
          <div class="text-h3 q-mb-sm text-weight-medium">Register</div>
          <div class="text-h6 text-weight-regular q-mb-xl">
            Already have an account?
            <router-link to="/auth">Login here</router-link>
          </div>
          <q-input
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
            outlined
            v-model="lastName"
            label="Last name"
            lazy-rules
            color="indigo-10"
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
          <q-input
            outlined
            v-model="address"
            label="Address"
            lazy-rules
            color="indigo-10"
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
          <q-input
            outlined
            v-model="phone"
            label="Phone"
            type="tel"
            lazy-rules
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
            color="indigo-10"
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
          <q-input
            outlined
            v-model="password"
            label="Password"
            lazy-rules
            color="indigo-10"
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
            type="password"
          />
          <q-btn
            type="submit"
            unelevated
            color="indigo-8"
            full-width
            class="full-width"
            >Register</q-btn
          >
        </q-card-section>
      </q-form>
    </q-card>
  </div>
</template>

<script setup>
import { useAuthStore } from "src/stores/auth";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useMeta } from "quasar";
const metaData = { title: "Vinylata- Register" };
useMeta(metaData);

const router = useRouter();
const authStore = useAuthStore();

const email = ref("");
const password = ref("");
const phone = ref("");
const address = ref("");
const firstName = ref("");
const lastName = ref("");

async function submitForm() {
  const payload = {
    email: email.value,
    password: password.value,
    firstName: firstName.value,
    lastName: lastName.value,
    phoneNumber: phone.value,
    address: address.value,
  };

  await authStore.register(payload);
  router.push("/auth");
}
</script>

<style lang="scss" scoped>
.auth-page {
  margin: 5rem 25rem;
}
</style>
