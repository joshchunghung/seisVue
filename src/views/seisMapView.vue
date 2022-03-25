<template>
  <div class="seisMap">
    <div class="container">
      <headerTitle />
      <div class="row">
        <div id="map" class="col-lg-6 col-sm-12">
          <twMap />
        </div>
        <div id="filter" class="col-lg-6 col-sm-12">
          <catalogUI />
          <dateUI />
          <depthUI />
          <magUI />
          <locationUI />
          <buttonUI />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import headerTitle from "@/components/headerTitle.vue";
import twMap from "@/components/twMap.vue";
import catalogUI from "@/components/catalogUI.vue";
import dateUI from "@/components/dateUI.vue";
import depthUI from "@/components/depthUI.vue";
import magUI from "@/components/magUI.vue";
import locationUI from "@/components/locationUI.vue";
import buttonUI from "@/components/queryEventUI.vue";
export default defineComponent({
  name: "seisMap",
  components: {
    headerTitle,
    twMap,
    catalogUI,
    dateUI,
    depthUI,
    magUI,
    locationUI,
    buttonUI,
  },
});
</script>

<style scoped>
#map {
  height: 500px;
}
</style>
