<template>
  <h2>{{ title }}</h2>
  <hr />
  <div class="row">
    <h2 class="col-lg-2 col-sm-12 d-flex align-items-center">NOTICE</h2>
    <p class="col-lg-8 col-sm-12">
      This page ONLY provides the seismicity map.
      <br />
      If you need the detailed event list, please visit the
      <a href="https://gdmsn.cwb.gov.tw/index.php" target="_blank">CWB_GDMS</a>.
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { i18n } from "@/assets/data/i18n.js";

export default defineComponent({
  name: "headerTitle",
  setup() {
    const title = ref(i18n.title);
    return {
      title,
    };
  },
});
</script>
<style scoped>
a {
  text-decoration: none;
}
p {
  text-align: left;
}
</style>
