
const path = require('path') 
const convert = require('./convert')

convert.csvToJson(path.join(__dirname, 'csv', 'customer-data.csv'), path.join(__dirname, 'json', 'customer-data.JSON'))
console.log('CSV file has converted successfully')