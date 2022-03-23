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
        :disabled="isDisabled"
      />-
      <input
        id="dateto"
        type="date"
        name="date"
        class="col-5"
        max="9999-12-31"
        :disabled="isDisabled"
      />
    </div>
  </div>
  <div>{{ test }}</div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
export default defineComponent({
  name: "dateUI",
  props: {
    dateType: String,
  },
  setup(props) {
    const isDisabled = ref<boolean>(true);
    const backGroundStyle = ref<string>("background-color: rgb(200, 200, 200)");
    const test = computed(() => {
      console.log(props);
      return props.dateType;
    });
    console.log(test, "aaaaaa");
    return {
      isDisabled,
      backGroundStyle,
      test,
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
