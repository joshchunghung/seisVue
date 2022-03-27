<template>
  <div class="timeSeries">
    <h1>This is an timeSeries page</h1>
    <testUI />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import testUI from "@/components/test.vue";


export default defineComponent({
  name: "timeSeriesView",
  components: {
    testUI,

  },
});
</script>

