var octoParse = require('octoparse').default

module.exports = {
  install(Vue, options) {
    Vue.prototype.$htmlParse = function(str) {
      var nodes = octoParse.htmlParse(str)
      return nodes
    }
  }
}