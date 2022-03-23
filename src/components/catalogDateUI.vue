<template>
  <div class="panel">
    <div class="panel-label panel-label-corner">Catalog</div>
    <div class="d-flex justify-content">
      <select class="col-6" v-model="selected" @change="changeMode">
        <option v-for="catalog in catalogItem" :key="catalog">
          {{ catalog }}
        </option>
      </select>
    </div>
  </div>
  <!-- 時間選項 -->
  <dateUI :dateType="dateType" />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import dateUI from "@/components/dateUI.vue";

export default defineComponent({
  name: "catalogDateUI",
  components: {
    dateUI,
  },
  setup() {
    const catalogItem = ref(["Recent 90 days", "Archived"]);
    const dateType = ref<string>("Date (UTC+8)");
    const selected = ref<string>("Recent 90 days");
    const changeMode = () => {
      if (selected.value === "Archived") {
        dateType.value = "Date (UTC)";
      } else if (selected.value === "Recent 90 days") {
        dateType.value = "Date (UTC+8)";
      }
    };
    return {
      catalogItem,
      changeMode,
      selected,
      dateType,
    };
  },
});
</script>

<style src="@/assets/css/panel.css" scoped></style>
