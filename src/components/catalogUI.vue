<template>
  <div class="panel">
    <div class="panel-label panel-label-corner">Catalog</div>
    <div class="d-flex justify-content">
      <select class="col-6">
        <option v-for="catalog in catalogItem" :key="catalog">
          {{ catalog }}
        </option>
      </select>

      <div id="helpIcon" class="col-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
          />
        </svg>
        <div class="hover col-sm-12 text-start">
          <b>Recent 90 days</b> : CWB Rapid Reports
          <br />
          <b>Archived</b> : revised by CWB. (1991-01-01~)
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "catalogUI",
  setup() {
    const catalogItem = ref(["Recent 90 days", "Archived"]);

    return {
      catalogItem,
    };
  },
});
</script>

<style src="@/assets/css/panel.css" scoped></style>
<style scoped>
#helpIcon:hover > div {
  display: inline-block;
}
.hover {
  position: absolute;
  display: none;
  width: 300px;
  padding: 10px 10px 10px 10px;
  border-radius: 4px;
  background-color: aliceblue;
  border: 1px solid #6c757d;
  z-index: 1000;
}
</style>
