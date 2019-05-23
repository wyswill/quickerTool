const state = {
  pageZoom: 0
};

const getters = {
  getPageZoom(state) {
    return state.pageZoom;
  }
};
const mutations = {
  setPageZoom(state, data) {
    state.pageZoom = data;
  },
  pageZoomPlus(state) {
    state.pageZoom++;
  },
  pageZoomSub(state) {
    state.pageZoom--;
  }
};

const actions = {
  setPageZoom(ctx, data) {
    ctx.commit("setPageZoom", data);
  },
  pageZoomPlus(ctx) {
    ctx.commit("pageZoomPlus");
  },
  pageZoomSub(ctx) {
    ctx.commit("pageZoomSub");
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
