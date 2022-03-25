<template>
  <div class="panel">
    <div class="panel-label panel-label-corner">Magnitude</div>
    <div class="panel-tight text-end">
      <input
        type="text"
        class="col-5 form-control number text-end"
        min="0"
        v-model.number="mag.min"
      />-
      <input
        type="text"
        class="col-5 form-control number text-end"
        max="10"
        v-model.number="mag.max"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  name: "magUI",
  setup() {
    const mag = useStore().state.mag;
    return {
      mag,
    };
  },
});
</script>

<style src="@/assets/css/panel.css" scoped></style>
