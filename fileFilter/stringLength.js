var str = "this string is not that string";
var words = str.split(/\s/);
var charCounts = [];
var huffman = {};
for (var i = 0; i < words.length; i++) {
   charCounts.push(words[i].length);
    huffman[words[i]] = charCounts[i];
}
console.log(words + '\n' + charCounts);
console.log(huffman);