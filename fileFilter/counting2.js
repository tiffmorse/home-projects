
    var fs = require('fs');


var inputFilename = process.argv[2];

var fileContents = fs.readFileSync(inputFilename, 'utf8');

var lines = fileContents.split('\r');

var searchTerm = "confession";

var parArray = [];

for (i = 0; i < lines.length; i++) {
    var lineText = lines[i];
    //using RegExp allows case insensitive searches
    if (lineText.search(new RegExp(searchTerm, "i")) !== -1) {

     //   if (lineText.indexOf(searchTerm) !== -1) {
        parArray.push(i);
    }
}
console.log(parArray);
console.log("\"" + searchTerm + "\"" + " appears in " + parArray.length + " paragraphs in the story.");

