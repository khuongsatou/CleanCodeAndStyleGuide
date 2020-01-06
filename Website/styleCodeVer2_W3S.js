//HTML AND CSS use "-" put between names

//SQL use "_" put between names

//about Performance. Space not effect

// Example no.0: Attention
// Variable, Function names written as (camelCase)
// Constants UPPERCASE



// Example no.1
// 1. Variable Names Must Mean.
// 2. Down the line to collect the group
firstName = "John";
lastName  = "Doe";

price = 10.90;
tax = 0.20;

// Example no.2
// 1. Space between operators
var x = y + z;
fullPrice = price + (price * tax);

// Example no.3
// 1.  Attention "Volve", "Saav" to semicolon

var values = ["Volvo", "Saab", "Fiat"];

// Example no.4 
// 1. Always use 2 spaces code . Not use Tab, do editor different display different

function toCelsius(fahrenheit){
    return (5 / 9) * (fahrenheit - 32);
}

// Example no.5
// 1. Always use end a simple statement with a semicolon.
//Array One Line
var values = ["Volvo", "Saab", "Fiat"];

//Object
var person = {
    firstName: "John",
    lastName:  "Doe",
    age: 50,
    eyeColor:"blue"
};

// Example no.6
// 1. Conditionals in Style Javascript
if(time < 20){
    greeting = "Good day";
}else{
    greeting = "Good evening";
}

// Example no.7 
// 1. Loop
for (i = 0; i < 5; i++){
    x+=i;
}

// Example no.8.
// 1. Line Length < 80
document.getElementById("demo").innerHTML =
"Hello Dolly";