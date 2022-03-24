<template>
  <div class="seisMap">
    <div class="container">
      <headerTitle />
      <div class="row">
        <div id="map" class="col-lg-6 col-sm-12">
          <twMap />
        </div>
        <div id="filter" class="col-lg-6 col-sm-12">
          <catalogDateUI />
          <depthUI />
          <magUI />
          <locationUI />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import headerTitle from "@/components/headerTitle.vue";
import twMap from "@/components/twMap.vue";
import catalogDateUI from "@/components/catalogDateUI.vue";
import depthUI from "@/components/depthUI.vue";
import magUI from "@/components/magUI.vue";
import locationUI from "@/components/locationUI.vue";
export default defineComponent({
  name: "seisMap",
  components: {
    headerTitle,
    twMap,
    catalogDateUI,
    depthUI,
    magUI,
    locationUI,
  },
});
</script>

<style scoped>
#map {
  height: 500px;
}
</style>
