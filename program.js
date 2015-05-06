var fs = require('fs')
var file = process.argv[2]
function readFile(callback) {
    var fileBuffer = fs.readFile(file, 'utf8', function doneReading(err, fileString) {
        var stringArray = fileString.split("\n")
        console.log(stringArray.length - 1)
    })
}
readFile()