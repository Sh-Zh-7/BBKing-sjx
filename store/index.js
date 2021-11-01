export const state = () => ({
  // IndexedDB索引从1开始
  curIndex: 1,
  maxIndex: 5,
});

export const mutations = {
  setIndexes(state, {curIndex, maxIndex}) {
    state.curIndex = curIndex;
    state.maxIndex = maxIndex;
  }
}
