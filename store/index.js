export const state = () => ({
  currentPath: '/',
  sizeWidth: 1200,
  isActiveDrawer: false,
})

export const mutations = {
  setPath(state, payload) {
    state.currentPath = payload
  },
  setWidth(state, payload) {
    state.sizeWidth = payload
  },
  setActiveDrawer(state, payload) {
    state.isActiveDrawer = payload
  },
}
