export const state = () => ({
  currentPath: '/',
})

export const mutations = {
  setPath(state, payload) {
    state.currentPath = payload
  },
}
