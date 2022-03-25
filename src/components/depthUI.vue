<template>
  <div class="panel">
    <div class="panel-label panel-label-corner">Depth (km)</div>
    <div class="panel-tight text-end">
      <input
        type="text"
        class="col-5 form-control number text-end"
        min="0"
        v-model.number="depth.min"
      />-
      <input
        type="text"
        class="col-5 form-control number text-end"
        max="6371"
        v-model.number="depth.max"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "depthUI",
  setup() {
    const depth = useStore().state.depth;
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
