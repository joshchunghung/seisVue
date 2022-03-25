<template>
  <div class="panel">
    <div class="panel-label panel-label-corner">Location</div>
    <div class="panel-tight text-center">
      <table class="nsew-table">
        <tbody>
          <tr>
            <td>
              <label for="lonMin">W</label>
              <input
                type="text"
                size="8"
                class="form-control number text-center"
                name="lonMin"
                v-model.number="lonValue.min"
              />
            </td>
            <td>
              <label for="latMax">N</label><br />
              <input
                type="text"
                size="8"
                class="form-control number text-center"
                name="latMax"
                v-model.number="latValue.max"
              />
              <br />
              <input
                type="text"
                size="8"
                class="form-control number text-center"
                name="latMin"
                v-model.number="latValue.min"
              />
              <br />
              <label for="latMin">S</label>
            </td>
            <td>
              <input
                type="text"
                size="8"
                class="form-control number text-center"
                name="lonMax"
                v-model.number="lonValue.max"
              />
              <label for="lonMax">E</label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
export default defineComponent({
  name: "locationUI",
  setup() {
    const latValue = reactive({
      max: 26,
      min: 21,
    });
    const lonValue = reactive({
      max: 126,
      min: 120,
    });
    return {
      latValue,
      lonValue,
    };
  },
});
</script>

<style src="@/assets/css/panel.css" scoped></style>
