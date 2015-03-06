var getRelationship = function(x, y) {
 
  // If both arguments are numbers
  if ( !isNaN(x) && !isNaN(y) ) {
 
    if ( x == y ) {                // if they are equal, return '='
      return '=';
 
    } else {                       // if not, return comparison operator
      return x < y ? '<' : '>';
    }
 
    // Return error if both arguments are not numbers
  } else if ( isNaN(x) && isNaN(y) ) {
    return errorMsg + x + ' and ' + y + ' are not numbers';
 
    // Return error if one of arguments is not a number
  } else {
    return isNaN(x) ? errorMsgFor(x) : errorMsgFor(y);
  }
};
 
 
// Error message base
var errorMsg = 'Can\'t compare relationships because ';
 
 
// Return error message for one argument
var errorMsgFor = function(invalidArg) {
  return errorMsg + invalidArg + ' is not a number';
};

// Try logging these functions to test your code!
console.log(getRelationship(1,4));
console.log(getRelationship(1,1));
console.log(getRelationship("that",2));
console.log(getRelationship("this"," something else"));
console.log(getRelationship(3));
console.log(getRelationship("hi"));
console.log(getRelationship(NaN));
console.log(getRelationship(NaN, undefined));