<template>
  <div class="panel" :style="backGroundStyle">
    <div class="panel-label panel-label-corner">{{ dateType }}</div>
    <div class="text-end">
      <input
        type="date"
        name="date"
        class="col-5"
        min="1991-01-01"
        max="9999-12-31"
        :disabled="isDateDisabled"
      />-
      <input
        id="dateto"
        type="date"
        name="date"
        class="col-5"
        max="9999-12-31"
        :disabled="isDateDisabled"
      />
    </div>
  </div>
  <div>{{ dateState }}</div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref } from "vue";
import { calNowTime } from "@/assets/js/calNowTime";

export default defineComponent({
  name: "dateUI",
  props: {
    dateType: String,
  },
  setup(props) {
    console.log(props.dateType)
    const isDateDisabled = ref<boolean>(true);
    const backGroundStyle = ref<string>("background-color: rgb(200, 200, 200)");

    const dateState = computed({
      get() {
        return reactive(calNowTime());
      },
      set() {
        console.log("a")
        if (props.dateType === "Date (UTC +8)") {
          console.log("aaa")
          isDateDisabled.value = true
          backGroundStyle.value = "background-color: rgb(200, 200, 200)"
        } else if (props.dateType === "Date (UTC)") {
          console.log("bbb")
          isDateDisabled.value = true
          backGroundStyle.value = "background-color: rgb(255, 255, 255)"
        }
      }


    });

    return {
      isDateDisabled,
      backGroundStyle,
      dateState
    };
  }
})

</script>

<style src="@/assets/css/panel.css" scoped></style>
<style scoped>
input {
  width: 10em;
}
</style>
