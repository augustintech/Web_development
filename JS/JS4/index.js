function test() {
    console.log("Hi");  
}

test();

var sayHello = function() {
    console.log("Test");
}
sayHello()

function yellow() {
    console.log("first try");
    console.log("violet");
}
yellow();

function yellow2() {
    console.log("orange");
    console.log("blue");
}

yellow2();

function red(blue) {
    console.log(blue);
}

red("First try");
red("Second try");
red("Third try");

function multiply(a, b) {
    return a;
    return a * b;
    
    return b;
}

/*green = multiply(5, 10);

console.log(green); */

var u = function divide(c, d) {
    if (c > 10 || d > 10) {
        return "This is not good";
    } else {
        return c/d;
    }
    
}

u(8, 4);
alert(u(8, 4));