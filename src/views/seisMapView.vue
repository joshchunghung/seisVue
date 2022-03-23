<template>
  <div class="seisMap">
    <div class="container">
      <headerTitle />
      <div class="row">
        <div id="map" class="col-lg-6 col-sm-12">
          <twMap />
        </div>
        <div class="col-lg-6 col-sm-12">
          <catalogDateUI />
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

export default defineComponent({
  name: "seisMap",
  components: {
    headerTitle,
    twMap,
    catalogDateUI,
  },
});
</script>

<style scoped>
#map {
  padding: 0%;
  width: 50%;
  height: 600px;
}
</style>
