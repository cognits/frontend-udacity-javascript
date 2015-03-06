// Your code goes here!
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
}

// Try logging these functions to test your code!
var rel1 = getRelationship(1,4);
console.log(rel1);
var rel2 = getRelationship(1,1);
console.log(rel2);
var rel3 = getRelationship("that",2);
console.log(rel3);
var rel4 = getRelationship("this"," something else");
console.log(rel4);
var rel5 = getRelationship(3);
console.log(rel5);
var rel6 = getRelationship(("hi"));
console.log(rel6);
var rel7 = getRelationship(NaN);
console.log(rel7);
var rel8 = getRelationship(NaN, undefined);
console.log(rel8);