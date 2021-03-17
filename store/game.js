export const state = function () {
  return {
    gameStatus: 1, // 1：开始前(引导)，2：游戏中，3：游戏结束
    gameDropList: [],
  };
};

export const mutations = {
  setGameStatus(state, data) {
    state.gameStatus = data;
  },
  setGameDropList(state, data) {
    state.gameDropList = data;
  },
};

export const getters = {

};

export const actions = {

};
