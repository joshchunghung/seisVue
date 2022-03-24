import { createStore } from 'vuex'
import { calNowTime } from "@/assets/js/calNowTime";

export default createStore({
  state: {
    mag: {
      min: 3,
      max: 10
    },
    depth: {
      min: 0,
      max: 1000
    },
    location: {
      W: 120,
      E: 126,
      S: 20,
      N: 26
    },
    date: {
      start: "",
      end: ""
    }
  },
  getters: {
    calTime(state) {
      const dd = calNowTime();
      state.date.start = dd.day_90;
      state.date.end = dd.todayUTC;
    },
  },
  mutations: {

  },
  actions: {
  },
  modules: {
  }
})
