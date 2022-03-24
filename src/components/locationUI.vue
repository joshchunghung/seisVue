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
                id="lonMin"
                name="lonMin"
                value="120"
              />
            </td>
            <td>
              <label for="latMax">N</label><br />
              <input
                type="text"
                size="8"
                class="form-control number text-center"
                id="latMax"
                name="latMax"
                value="26"
              />
              <br />
              <input
                type="text"
                size="8"
                class="form-control number text-center"
                id="latMin"
                name="latMin"
                value="21"
              />
              <br />
              <label for="latMin">S</label>
            </td>
            <td>
              <input
                type="text"
                size="8"
                class="form-control number text-center"
                id="lonMax"
                name="lonMax"
                value="126"
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
import { defineComponent } from "vue";
export default defineComponent({
  name: "locationUI",
});
</script>

<style src="@/assets/css/panel.css" scoped></style>
