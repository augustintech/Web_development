var database = [{
    username: "test1",
    password: "123"
}];

var newsFeed = [
    {
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo cool!"
	},
	{
		username: "Mitch",
		timeline: "Javascript is preeetyy cool!"
	}
    
];

var userNamePrompt = prompt("Please enter your username");
var passwordPrompt = prompt("Enter your account password");

function signIn(user, pass) {
    if (user === database[0].username && 
        pass === database[0].password) {
        console.log(newsFeed);
} else {
    alert("Sorry, wrong username and password!");
}

} signIn(userNamePrompt, passwordPrompt);