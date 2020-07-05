export default function (to, from, savedPosition) {
  if (savedPosition) {
    return ''
  } else {
    const position = {}

    if (to.hash) {
      position.selector = to.hash
      // position.offset = { y: 600 }
      return false
    }
  }
}
