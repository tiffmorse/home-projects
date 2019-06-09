
var fs = require('fs');


var inputFilename = process.argv[2];

var fileContents = fs.readFileSync(inputFilename, 'utf8');

var words = fileContents.split(' ');

var searchTerm = '';

var wordArray = [];

for (i = 0; i < words.length; i++) {
    var lineText = words[i];
    //using RegExp allows case insensitive searches
    if (lineText.search(new RegExp(searchTerm, 'i')) !== -1) {

        //   if (lineText.indexOf(searchTerm) !== -1) {
        wordArray.push(i);
    }
}
console.log(wordArray);
console.log('"' + searchTerm + '"' + ' appears ' + wordArray.length + ' times in the story.');

