<template>
  <AppContainer>
    <div class="row q-pt-xl">
      <div class="col-6 q-pa-xl">
        <q-img
          height="90%"
          src="https://images.unsplash.com/photo-1545042745-9e8a9c17d7a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        ></q-img>
      </div>
      <div ref="section" class="col-6 q-pl-xl">
        <div class="text-h6 text-bold text-indigo-5">VINYLATA'S POLICY</div>
        <div class="intro__text text-bold text-primary">
          We Deliver The Best Services
        </div>
        <div class="text-subtitle1 q-pt-xl q-pb-lg">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus sint
            nam sit eligendi sunt exercitationem ullam aperiam velit error quae,
            cum optio tempora quo. Totam distinctio quae aspernatur possimus
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
            amet, iste quasi laboriosam obcaecati odit repudiandae adipisci
            nobis consequatur enim, error numquam repellat, minima earum odio
            cumque saepe nemo debitis Lorem ipsum dolor, sit amet consectetur
            adipisicing elit.
          </p>
          <p>
            Voluptates, magni neque. Temporibus nobis iure totam libero sapiente
            delectus velit sed, veniam non in. Tempore doloribus temporibus
            pariatur, laborum aspernatur mollitia. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Itaque odio, officiis expedita, hic
            molestias quisquam, eum illo repudiandae rem ipsum qui dignissimos
            odit aperiam nesciunt sit necessitatibus similique? Aut, deserunt!
            Consectetur adipisicing elit. Obcaecati ut blanditiis hic aspernatur
            voluptate quasi esse ab laborum vel ullam, nihil voluptatum in!
            Illum odio, minima est voluptas nemo suscipit.
          </p>
        </div>
        <q-btn
          class="intro__button"
          unelevated
          color="indigo-13"
          label="SHOP NOW"
        ></q-btn>
      </div>
    </div>
  </AppContainer>
</template>

<script setup>
import AppContainer from "../common/AppContainer.vue";
import ScrollReveal from "scrollreveal";

import { ref, onMounted } from "vue";
const section = ref(null);

onMounted(() => {
  ScrollReveal().reveal(section.value, {
    delay: 350,
    reset: true,
    rotate: {
      x: 50,
    },
  });
});
</script>

<style lang="scss" scoped>
.intro__text {
  font-size: 2.5rem;
}
.intro__button {
  padding: 1rem 1.5rem;
}
.reveal {
  position: relative;
  transform: translateY(150px);
  opacity: 0;
  transition: 2s all ease;
}
.reveal.active {
  transform: translateY(0);
  opacity: 1;
}
</style>
