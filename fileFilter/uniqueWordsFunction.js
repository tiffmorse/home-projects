//require node file system
var fs = require('fs');
//set third process as called in Node command as a variable: this will be the text file
var inputFilename = process.argv[2];
//set txt file in variable
var fileContents = fs.readFileSync(inputFilename, 'utf8');

//function to complete sorting once array is created below
function sortFreq(itemA, itemB) {
    return itemB[1] - itemA[1];
}


function wordFreq(string) {
    //replace punctuation character class with nothing; set global; don't include apostrophes; split on spaces for words
    var words = string.replace(/[".,;?]/g, '').split(/\s/);
    //set variable object for word list: will add words here
    var freqMap = {};
    //.forEach method calls a function once for each element in an array, in order; w represents the position in the array
    words.forEach(function(w) {
   //if freqMap does not include the word
        if (!freqMap[w]) {
            //then the word count in freqMap is 0 (add the word with a count of 0)
            freqMap[w] = 0;
        }

        //add the word length (number of characters) to the count for the word in freqMap
        freqMap[w] += w.length;
    });

<<<<<<< HEAD
<<<<<<< HEAD
//return object (list of words with counts)
    return freqMap;
=======
=======
>>>>>>> e150d29e0eef8332a051553fee7a944a4fbea13e
    var sortArray = [];
    //for-in loop for looping through an object; 'propertyName' is similar to 'i' in array for loop (?) freqMap has hundreds of different 'propertyNames'--each unique word
    for ( var propertyName in freqMap ) {
        if ( freqMap.hasOwnProperty(propertyName) ) {
            //declare variable for count value
            var value = freqMap[propertyName];
            //push words and values into the array declared above
            sortArray.push([propertyName, value]);
        }
    }

    var freqArray = sortArray.sort(sortFreq);

    if 

    //var wordFreqArray = freqArray.sort();

//return sorted array (list of words with counts)
<<<<<<< HEAD
    return freqArray;
=======
    return resultArray;
<<<<<<< HEAD
>>>>>>> e150d29e0eef8332a051553fee7a944a4fbea13e
=======
>>>>>>> e150d29e0eef8332a051553fee7a944a4fbea13e
>>>>>>> 39fdc24c05edd09a8efcf4d61930e8ecb398b437
}

//print array to console log by calling the function
console.log(wordFreq(fileContents));
