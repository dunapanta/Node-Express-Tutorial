// Modules
// CommonJS (Node), every file is module (by default)
// Modules - Encapsulation Code (only share minimum)
const names = require('./2-names')
const sayHi =  require('./2-utils')

console.log(names)

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
