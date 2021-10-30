export const state = () => ({
  curIndex: 1,
  maxIndex: 1,
});

export const mutations = {
  setIndexes(state, {curIndex, maxIndex}) {
    state.curIndex = curIndex;
    state.maxIndex = maxIndex;
  }
}