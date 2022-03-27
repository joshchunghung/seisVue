<template>
  <LMap ref="map" :center="[23, 121]" :zoom="7">
    <!--layer-type="base" for LControlLayers  -->
    <LTileLayer
      v-for="mapState in mapStates"
      layer-type="base"
      minZoom="6"
      :key="mapState.name"
      :url="mapState.url"
      :attribution="mapState.attribution"
      :name="mapState.name"
      :maxZoom="mapState.maxZoom"
    />
    <LControlLayers />
  </LMap>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LControlLayers } from "@vue-leaflet/vue-leaflet";
import { tileProviders } from "@/assets/data/mapUrl";

export default defineComponent({
  name: "twMap",
  components: {
    LMap,
    LTileLayer,
    LControlLayers,
  },
  setup() {
    const mapStates = ref(tileProviders);

    return {
      mapStates,
    };
  },
});
</script>
