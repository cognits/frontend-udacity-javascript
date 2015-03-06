var moonWalkers = [
  "Neil Armstrong",
  "Buzz Aldrin",
  "Pete Conrad",
  "Alan Bean",
  "Alan Shepard",
  "Edgar Mitchell",
  "David Scott",
  "James Irwin",
  "John Young",
  "Charles Duke",
  "Eugene Cernan",
  "Harrison Schmitt"
];

function alphabetizer(names) {
    // Your code goes here!
    var alphabetizedNames = [];
    
    for (var nameIndex in names) {
        alphabetizedNames.push(alphabetize(names[nameIndex]));
    }
    
    return alphabetizedNames.sort();
}
 
function alphabetize(name) {
    return name.split(' ').reverse().join(', ');
}