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
                v-model.number="location.W"
              />
            </td>
            <td>
              <label for="latMax">N</label>
              <br />
              <input
                type="text"
                size="8"
                class="form-control number text-center"
                name="latMax"
                v-model.number="location.N"
              />
              <br />
              <input
                type="text"
                size="8"
                class="form-control number text-center"
                name="latMin"
                v-model.number="location.S"
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
                v-model.number="location.E"
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
import { useStore } from "vuex";

export default defineComponent({
  name: "locationUI",
  setup() {
    const location = useStore().state.location
    return {
      location
    };
  },
});
</script>

<style src="@/assets/css/panel.css" scoped></style>
