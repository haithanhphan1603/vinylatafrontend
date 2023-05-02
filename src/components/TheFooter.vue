<template>
  <q-separator></q-separator>

  <AppContainer>
    <div class="row the-footer q-pt-xl">
      <div class="col-3">
        <a href="/"><q-img src="logo.png" width="12rem"></q-img></a>
        <div class="the-footer__icon q-pt-md">
          <a href="https://www.facebook.com/hisieNzandi"
            ><q-icon class="q-pr-md" name="facebook" size="1.8rem"></q-icon
          ></a>
          <a href="https://www.instagram.com/_hisi3/"
            ><q-icon class="q-pr-md" name="mdi-instagram" size="1.8rem"></q-icon
          ></a>
          <a href="/"> <q-icon name="mdi-twitter" size="1.8rem"></q-icon></a>
        </div>
        <p class="q-pt-lg q-pr-xl">
          Copyright © {{ year }} by Vinylata, Inc. All rights reserved.
        </p>
      </div>
      <div class="col-3">
        <p class="text-bold text-h6">Contact us</p>
        <div class="footer-content">
          <p>Km 9, Nguyen Trai Street, Ha Dong, Ha Noi</p>
          <a href="tel:0328141680">0328141680</a>
          <a href="mailto:vinylata104@gmail.com">vinylata104@gmail.com</a>
        </div>
      </div>
      <div class="col-2">
        <p class="text-bold text-h6">Account</p>
        <div class="footer-content">
          <router-link to="/">Join us</router-link>
          <router-link to="/">Create Account</router-link>
          <a href="/">iOS app</a>
          <a href="/">Android app</a>
        </div>
      </div>
      <div class="col-2">
        <p class="text-bold text-h6">Company</p>
        <div class="footer-content">
          <a href="/">About Vinylata</a>
          <a href="/"> For Business</a>
          <a href="/">Become partners</a>
        </div>
      </div>
      <div class="col-2">
        <p class="text-bold text-h6">Resources</p>
        <div class="footer-content">
          <a href="/">Privacy and terms</a>
          <a href="/">Help centers</a>
          <a href="/">Become vendors</a>
        </div>
      </div>
    </div>
  </AppContainer>
</template>

<script setup>
import AppContainer from "./common/AppContainer.vue";
const year = new Date().getFullYear();
</script>

<style lang="scss" scoped>
.footer-content {
  font-size: 1rem;
  display: flex;
  flex-direction: column;
}
a {
  font-weight: 400;
  margin-bottom: 16px;
  color: #555;
}
a:hover {
  color: $indigo-9;
}
.the-footer__icon {
  color: #767676 !important;
}
.the-footer {
  color: #555;
}
</style>
