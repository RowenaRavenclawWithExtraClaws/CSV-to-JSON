
const path = require('path') 
const convert = require('./convert')

convert.csvToJson(process.argv[2], process.argv[3])
console.log('CSV file has converted successfully')