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