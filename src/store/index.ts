import { createStore } from "vuex";
import { calNowTime } from "@/assets/js/calNowTime";

export default createStore({
  state: {
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
    calTime(state) {
      const dd = calNowTime();
      state.date.start = dd.day_90;
      state.date.end = dd.todayUTC;
    },
  },
  actions: {
    getTime(context, timeType) {
      if (timeType === "TW") {
        //  context.commit.calTime("TW")
        console.log("TW")
      } else {
        console.log("UTC")
      }
     

    },
  },
  modules: {},
});
