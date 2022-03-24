<template>
  <div class="panel">
    <div class="panel-label panel-label-corner">Depth (km)</div>
    <div class="panel-tight text-end">
      <input
        type="text"
        class="col-5 form-control number text-end"
        name="depth"
        min="0"
        value="0"
      />-
      <input
        type="text"
        class="col-5 form-control number text-end"
        name="depth"
        max="6371"
        value="1000"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "depthUI",
});
</script>

<style src="@/assets/css/panel.css" scoped></style>
<style scoped>
input {
  width: 4em;
}
</style>
