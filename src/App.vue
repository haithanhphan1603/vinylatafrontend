<template>
  <router-view />
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>
<style lang="scss">
a {
  text-decoration: none;
  color: $primary;
  font-weight: bold;
}

a:hover {
  color: #495579;
}
</style>
