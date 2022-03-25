<template>
  <div>{{ test }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "buttonUI",
  setup() {
    const test = useStore().state;
    return {
      test,
    };
  },
});
</script>
