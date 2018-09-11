const octoParse = require('octoParse').default

module.exports = {
  install(Vue, options) {
    Vue.prototype.$htmlParse = function(text) {
      const nodes = octoParse.htmlParse({
        type: 'html',
        data: text
      });
      console.log(nodes)
      return nodes
    }
  }
}