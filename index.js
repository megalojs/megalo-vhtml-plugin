const octoParse = require('octoParse').default

module.exports = {
  install(Vue, options) {
    Vue.prototype.$htmlParse = function(str) {
      const nodes = octoParse.htmlParse(str)
      return nodes
    }
  }
}