
const fs = require('fs')
const path = require('path')
const csvtojson = require('csvtojson')

module.exports.csvToJson = (filePath1, filePath2) => {
    csvtojson().fromFile(filePath1).then((jsonObj) => {
        fs.writeFileSync(filePath2, JSON.stringify(jsonObj))
    })
}