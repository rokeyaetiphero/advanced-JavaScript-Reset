// == abstract equality
// === strict equality
const first = 1;
const second = false;

if(first === second) {
    console.log("condition is true");
}
else{
    console.log("condition is false");
}

console.log(true == '1')
//string literal vs string object
console.log("This is a string" == new String("This is a string"));//here js convert the string object into string literal and compare
console.log("This is a string" === new String("This is a string"));