<template>
  <base-dialog :show="!!error" title="An error ocurred" @close="removeError">
    <p>{{ error }}</p>
  </base-dialog>
  <div>
    <q-card
      class="auth-page q-pa-xl"
      style="background: $indigo-2"
      flat
      bordered
    >
      <q-form @submit.prevent="submitForm">
        <q-card-section>
          <div class="text-h3 q-mb-sm text-weight-medium">Login</div>
          <div class="text-h6 text-weight-regular q-mb-xl">
            Dont have an account?
            <router-link to="/register">Register here</router-link>
          </div>

          <q-input
            filled
            v-model="email"
            label="Email"
            type="email"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
          <q-input
            filled
            v-model="password"
            label="Password"
            lazy-rules
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
            class="full-width q-py-sm text-subtitle1"
            >Login</q-btn
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
import BaseDialog from "src/components/common/BaseDialog.vue";

const metaData = { title: "Vinylata- Authentication" };

useMeta(metaData);

const email = ref("");
const password = ref("");
const authStore = useAuthStore();

const router = useRouter();
const error = ref(null);
async function submitForm() {
  const payload = { email: email.value, password: password.value };
  try {
    await authStore.login(payload);
    router.replace("/");
  } catch (err) {
    error.value =
      err.message || "Failed to authenticate, try later, check your login data";
  }
}
function removeError() {
  error.value = null;
}
</script>

<style lang="scss" scoped>
.auth-page {
  margin: 5rem 25rem;
}
</style>
