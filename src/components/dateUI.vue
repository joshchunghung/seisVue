<template>
  <div class="panel">
    <div class="panel-label panel-label-corner">{{ dateType }}</div>
    <div class="text-end">
      <input
        type="date"
        name="date"
        class="col-5 text-end"
        min="1991-01-01"
        max="9999-12-31"
        v-model="dateState.start"
      />-
      <input
        type="date"
        name="date"
        class="col-5 text-end"
        max="9999-12-31"
        v-model="dateState.end"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onUpdated, reactive, ref } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  name: "dateUI",

  setup() {
    const store = useStore()
    const dateState = store.state.date
    const dateType = computed(() => { return store.state.dateType })

    return {
      dateState,
      dateType
    };
  },
});
</script>

<style src="@/assets/css/panel.css" scoped></style>
<style scoped>
input {
  width: 10em;
}
</style>
