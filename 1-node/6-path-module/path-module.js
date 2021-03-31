const path = require('path');

// separator 
console.log(path.sep)

const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath) // \content\subfolder\test.txt

const base = path.basename(filePath)
console.log(base)

// returns absolute path
const absolute = path.resolve(__dirname, '6-path-module', 'content', 'subfolder', 'test.txt')
console.log(absolute) //C:\Users\Dan\Desktop\Node\1-node\6-path-module\6-path-module\content\subfolder\test.txt
