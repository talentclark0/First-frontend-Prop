// function change(){
//     document.getElementsByTagName('button').style.backgroundColor="#fff";
// }
var database = [
    {
        username: "talent",
        password: "1234",
    },
    {
        username: "gabbie",
        password: "0200",
    },
    {
        username: "nsikan",
        password: "4991",
    }

]
var newsfeed = [
    {
        username: "andy",
        timeline: "Sharing with you the powerful tool used in building a website"
    },
    {
        username: "jess",
        timeline: "Last night was lit, we jumb off a cliff"
    }
]

function isUserValid(user, pass){
    for(i=0;i<database.length;i++){
        if(database[i].username === user && database[i].password === pass){
            return true;
        } 
    }
    return false;
    
}

function signIn(user, pass){
    if(isUserValid(user, pass)){
        console.log("Signed in successfully");
        console.log(newsfeed);
    } else{
        alert("Sorry, wrong username and password?")
    }
}
var usernamePrompt = prompt("Enter your username: ")
var passwordPrompt = prompt("Enter your password: ")
signIn(usernamePrompt, passwordPrompt);