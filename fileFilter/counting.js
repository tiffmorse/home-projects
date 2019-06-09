var fs = require('fs');


var inputFilename = process.argv[2];

var fileContents = fs.readFileSync(inputFilename, 'utf8');

var lines = fileContents.split('\r');

var searchTerm = "I";

var parArray = [];

for (i = 0; i < lines.length; i++) {
    var lineText = lines[i];
    if (lineText.indexOf(searchTerm) !== -1) {
        parArray.push(i);
    }
}

console.log("\"" + searchTerm + "\"" + " appears in " + parArray.length + " paragraph(s) in the story.");

