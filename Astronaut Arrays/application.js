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

function reversename(names){
    var reversed = [];
    for (name in names) {
        var nameArray = names[name].split(" ");
        var newName = nameArray[1] + ", " + nameArray[0];
        reversed.push(newName);        
    }
    return reversed;

}    

function alphabetizer(names) {
    // Your code goes here!
    var nameList = reversename(names);
    var sortedNames = nameList.sort();
    return sortedNames;  
}

// Try logging your results to test your code!
console.log(alphabetizer(moonWalkers));