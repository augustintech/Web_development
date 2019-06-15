var name = "Billy";
if (name === "Billy") {
    alert("hi Billy!");
}
var name = "Susan";
if (name === "Billy") {
    alert("hi Billy!");
} else {
    alert("hmmm I don't know you")
}

var name = "Susy";

if (name === "Billy") {
    alert("hi Billy");
} else if (name === "Susy") {
    alert("hi Susy!");
} else {
    alert("I don't know you");
}

var name = "Ann";

if (name === "Billy" || name === "Ann") {
    alert("Hi Billy or Ann!");
}

if (name === "Billy" && name === "Ann") {
    alert("Hi Billy or Ann!");
}


var firstName = "Bob";
var lastName = "Smith";

if (firstName === "Bob" && lastName === "Smith") {
    alert("Hi Bob Smith!");
}

var name = "Bob";

if (!(name === "Bob")) {
    alert("Hi Bob");
}


age = prompt("How old are you?"); 
if (Number(age) < 18 ) {
    alert("Sorry, you are too young to drive this car. Powering off")
} else if (Number(age) > 18) {
    alert("Powering On. Enjoy the ride!")
} else if (Number(age) === 18) {
    alert("Congratulations on your first year of driving. Enjoy the ride!");
}