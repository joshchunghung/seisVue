<template>
  <div class="panel">
    <div class="panel-label panel-label-corner">Magnitude</div>
    <div class="panel-tight text-end">
      <input type="text" class="col-5 form-control number text-end" min="0" value="3" />-
      <input type="text" class="col-5 form-control number text-end" max="10" value="7" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "magUI",
});
</script>

<style src="@/assets/css/panel.css" scoped></style>
