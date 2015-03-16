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
// Function to format names to 'lastname, firstname' and alphabatize. Returns array of strings
function alphabetizer(names) {
    var alphabetNames = [];
    for (var name in names) { // iterate over each name
        var splitName = names[name].split(" "); // split into first and last name
        var lastname = splitName[1];
        splitName.unshift(lastname); // add last name to first index (now has 3 values in array)
        splitName.pop(); // remove duplicate last name
        nameSwitched = switchNames(splitName);
        alphabetNames.push(nameSwitched);
    }
    return alphabetNames.sort(); // alphabatize array
}

// Function takes array of length 2, returns array of length 2
function switchNames(names) {
 return nameSwitched = names[0] + ", " + names[1]; 
}



// Try logging your results to test your code!
console.log(alphabetizer(moonWalkers));