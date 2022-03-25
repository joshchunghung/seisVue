import { createStore } from "vuex";
import { calNowTime } from "@/assets/js/calNowTime";

export default createStore({
  state: {
    catalog: {},
    dateType: {},
    mag: {
      min: 3,
      max: 10,
    },
    depth: {
      min: 0,
      max: 1000,
    },
    location: {
      W: 120,
      E: 126,
      S: 20,
      N: 26,
    },
    date: {
      start: "",
      end: "",
    },
  },
  getters: {},
  mutations: {
    CALTIME(state, dateType) {
      const dd = calNowTime(dateType);
      state.dateType = dateType;
      state.date.start = dd.day_90;
      state.date.end = dd.today;
    },
    GETCATALOG(state, catalog) {
      state.catalog = {};
      state.catalog = catalog;
    }
  },
  actions: {
    getCatalog(context, catalog) {
      context.commit("GETCATALOG", catalog)
      if (catalog === "Archived") {
        context.commit("CALTIME", "Date (UTC)")
      } else {
        context.commit("CALTIME", "Date (UTC+8)")
      }
    }
  },
  modules: {},
});
