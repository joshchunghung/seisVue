<template>
  <div class="panel">
    <div class="panel-label panel-label-corner">Depth (km)</div>
    <div class="panel-tight text-end">
      <input
        type="text"
        class="col-5 form-control number text-end"
        min="0"
        :value="depth.min"
        @change="ChangeDepth({ ...depth, min: parseFloat($event.target.value) })"
      />-
      <input
        type="text"
        class="col-5 form-control number text-end"
        max="6371"
        :value="depth.max"
        @change="ChangeDepth({ ...depth, max: parseFloat($event.target.value) })"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "depthUI",
  setup() {
    const store = useStore();
    // const depth = store.getters.Depth;

    const depth = computed(() => store.getters.Depth);

    return {
      depth,
      ChangeDepth: (val) => store.commit("ChangeDepth", val),
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
