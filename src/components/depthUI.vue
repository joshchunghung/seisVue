<template>
  <div class="panel">
    <div class="panel-label panel-label-corner">Depth (km)</div>
    <div class="panel-tight text-end">
      <input
        type="text"
        class="col-5 form-control number text-end"
        name="depth"
        min="0"
        :value="depth.min"
      />-
      <input
        type="text"
        class="col-5 form-control number text-end"
        name="depth"
        max="6371"
        :value="depth.max"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
export default defineComponent({
  name: "depthUI",
  setup() {
    const depth = reactive({
      max: 1000,
      min: 0,
    });
    return {
      depth,
    };
  },
});
</script>

<style src="@/assets/css/panel.css" scoped></style>
<style scoped>
input {
  width: 4em;
}
</style>
