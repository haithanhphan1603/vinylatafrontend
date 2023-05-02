<template>
  <div class="checkin-section">
    <div class="text-h6 text-bold text-indigo-5 text-center">
      CHECK-IN IMAGES
    </div>
    <div class="vinyl-genre__title text-h4 text-bold text-center q-mb-xl">
      Vinylata has music fanatics with artistic eyes
    </div>
    <AppContainer class="q-pd-none">
      <div class="row">
        <div class="checkin-section__image-box col-3">
          <q-img
            ratio="1"
            class="checkin-section__image"
            src="https://images.unsplash.com/photo-1619306979088-67bd1007be84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2914&q=80"
          ></q-img>
          <div class="checkin-section__image-icon">
            <q-icon name="mdi-instagram" size="1.5rem" color="white"></q-icon>
          </div>
        </div>
        <div class="checkin-section__image-box col-3">
          <q-img
            ratio="1"
            class="checkin-section__image"
            src="https://images.unsplash.com/photo-1629923759854-156b88c433aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1747&q=80"
          ></q-img>
          <div class="checkin-section__image-icon">
            <q-icon name="mdi-instagram" size="1.5rem" color="white"></q-icon>
          </div>
        </div>
        <div class="checkin-section__image-box col-3">
          <q-img
            ratio="1"
            class="checkin-section__image"
            src="https://images.unsplash.com/photo-1494914656837-44eb36fe5471?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          ></q-img>
          <div class="checkin-section__image-icon">
            <q-icon name="mdi-instagram" size="1.5rem" color="white"></q-icon>
          </div>
        </div>
        <div class="checkin-section__image-box col-3">
          <q-img
            ratio="1"
            class="checkin-section__image"
            src="https://images.unsplash.com/photo-1594328082970-cf6a92166067?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          ></q-img>
          <div class="checkin-section__image-icon">
            <q-icon name="mdi-instagram" size="1.5rem" color="white"></q-icon>
          </div>
        </div>
        <div class="checkin-section__image-box col-3">
          <q-img
            ratio="1"
            class="checkin-section__image"
            src="https://images.unsplash.com/photo-1489838720009-3286c4293fda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          ></q-img>
          <div class="checkin-section__image-icon">
            <q-icon name="mdi-instagram" size="1.5rem" color="white"></q-icon>
          </div>
        </div>
        <div class="checkin-section__image-box col-3">
          <q-img
            ratio="1"
            class="checkin-section__image"
            src="https://images.unsplash.com/photo-1608645113851-ffdecb7da99a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          ></q-img>
          <div class="checkin-section__image-icon">
            <q-icon name="mdi-instagram" size="1.5rem" color="white"></q-icon>
          </div>
        </div>
        <div class="checkin-section__image-box col-3">
          <q-img
            ratio="1"
            class="checkin-section__image"
            src="https://images.unsplash.com/photo-1593164495809-6e3562b46063?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          ></q-img>
          <div class="checkin-section__image-icon">
            <q-icon name="mdi-instagram" size="1.5rem" color="white"></q-icon>
          </div>
        </div>
        <div class="checkin-section__image-box col-3">
          <q-img
            ratio="1"
            class="checkin-section__image"
            src="https://images.unsplash.com/photo-1621940762509-322ede867d20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          ></q-img>
          <div class="checkin-section__image-icon">
            <q-icon name="mdi-instagram" size="1.5rem" color="white"></q-icon>
          </div>
        </div>
      </div>
    </AppContainer>
  </div>
</template>

<script setup>
import AppContainer from "../common/AppContainer.vue";
</script>

<style lang="scss" scoped>
.checkin-section {
  padding-top: 4.8rem;
}
.checkin-section__refer-text {
  border-bottom: 2px solid currentColor;
  display: inline-block;
  padding-bottom: 1px;
}
.checkin-section__image-box {
  display: inline-block;

  background-color: #fff;
  -moz-transition: all 0.2s linear;
  -ms-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  -webkit-transition: all 0.2s linear;
  transition: all 0.2s linear;
  position: relative;
}
.checkin-section__image-box:hover {
  background-color: #000;
  -moz-transition: all 0.2s linear;
  -ms-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  -webkit-transition: all 0.2s linear;
  transition: all 0.2s linear;
}
.checkin-section__image {
  opacity: 1;
  -moz-transition: all 0.2s linear;
  -ms-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  -webkit-transition: all 0.2s linear;
  transition: all 0.2s linear;
}
.checkin-section__image:hover {
  opacity: 0.7;
  -moz-transition: all 0.2s linear;
  -ms-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  -webkit-transition: all 0.2s linear;
  transition: all 0.2s linear;
}
.checkin-section__image-icon {
  transition: 0.2s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}
.checkin-section__image-box:hover .checkin-section__image-icon {
  opacity: 1;
}
</style>
