// Use the built-in Node.js filesystem module.
var fs = require('fs');

// Get the input filename from the command line argument 2.
//console.log(process.argv);
var inputFilename = process.argv[2];

// Read the entire file into a variable in memory.
var fileContents = fs.readFileSync(inputFilename, 'utf8');

// Split the file into lines wherever there is a linefeed character.
var lines = fileContents.split('\r');

// Loop over each line in the file
for (i = 0; i < lines.length; i++) {
    // Get the current line into a variable.
    var lineText = lines[i];

    // Where you process the lines in the file.
    // Look for a line you care about here.
    if (lineText.indexOf('Catholic') !== -1) {
        //if (lineText.indexOf('Boo!') !== -1) {

        // Do something with the lines you care about.
        //console.log('Line ' + i + ': "' + lineText + '".');
        console.log('Catholic appears in paragraph ' + i);
        //lineText = lineText.replace('Boo!', 'line 6');
    } else {
        // optionally do something with the lines you don't care about.
        //console.log('Catholic does not appear.');
    }

    // Uncomment to list every line in the file.
    //console.log('Line ' + i + ': "' + lineText + '".')
}
