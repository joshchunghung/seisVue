<template>
  <div class="panel" :style="backGroundStyle">
    <div class="panel-label panel-label-corner">{{ dateType }}</div>
    <div class="text-end">
      <input
        type="date"
        name="date"
        class="col-5 text-end"
        min="1991-01-01"
        max="9999-12-31"
        :value="dateState.day_90"
        :disabled="isDateDisabled"
      />-
      <input
        type="date"
        name="date"
        class="col-5 text-end"
        max="9999-12-31"
        :value="endTime"
        :disabled="isDateDisabled"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onUpdated, reactive, ref } from "vue";
import { calNowTime } from "@/assets/js/calNowTime";

export default defineComponent({
  name: "dateUI",
  props: {
    dateType: String,
  },
  setup(props) {
    const isDateDisabled = ref<boolean>(true);
    const backGroundStyle = ref<string>("background-color: rgb(200, 200, 200)");

    const dateState = reactive(calNowTime());
    let endTime = ref(dateState.todayLocal);

    onUpdated(() => {
      if (props.dateType === "Date (UTC+8)") {
        isDateDisabled.value = true;
        backGroundStyle.value = "background-color: rgb(200, 200, 200)";
        endTime.value = dateState.todayLocal;
      } else if (props.dateType === "Date (UTC)") {
        isDateDisabled.value = false;
        backGroundStyle.value = "background-color: rgb(255, 255, 255)";
        endTime.value = dateState.todayUTC;
      }
    });

    return {
      isDateDisabled,
      backGroundStyle,
      dateState,
      endTime,
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
