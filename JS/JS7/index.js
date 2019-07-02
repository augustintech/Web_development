
var goals = [ 
    "Finish lesson X",
    "Get married",
    "Run a marathon",
    "Grow lettuce",
    "Implement changes"
];


var goalsImportant = [ 
    "Finish lesson X!",
    "Get married!",
    "Run a marathon!",
    "Grow lettuce!",
    "Implement changes!"
];


var goalsLength = goals.length;

//for (var i=0; i < goalsLength; i++) {
//   console.log(goals[i], i);
//}

//goals.forEach(function(goals, i) {
//    console.log(goals, i);
//}) 

function logGoals(goals, i) {
    console.log(goals, i);
}

goals.forEach(logGoals);
goalsImportant.forEach(logGoals);

/* var counterOne = 10;
while (counterOne > 0) {
    console.log("while", counterOne);
   counterOne--;
}

var counterTwo = 10
do {
    console.log("do while", counterTwo);
    counterTwo--;
} while (counterTwo > 10); */

