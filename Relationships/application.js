function getRelationship(x, y) {
    // Your code goes here!
     if (isNaN(x) === false && isNaN(y) === false){
       if (x > y){
           return ">";
       } else if (x < y) {
           return"<";
       } else {
           return "=";
       }    
   } else {
        if (isNaN(x) === true && isNaN(y) === true){
           return "Can\'t compare relationships because "+x+" and "+y+" are not numbers";
       }
       else if (isNaN(x) === true){
           return "Can\'t compare relationships because "+ x +" is not a number";
       }
       else if (isNaN(y)=== true){
           return "Can\'t compare relationships because "+ y +" is not a number";
       }
       
       else {
           console.log("good ");
       }
   }
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