let reduce = require('./reduce')
let add = require('./addjs')

module.exports = function (productList) {
  return reduce(add, productList)
}
