
let userNumsList = document.querySelectorAll(".userBall");
let winningNumsList = document.querySelectoryAll(".winningBall");
let buttonStart = document.querySelectorAll(".start");
let buttonReveal = document.querySelectorAll(".reveal");
let index = 0;

//Return Random integer 1-50
function displayUser (){
    userNumsList.forEach(ball =>{
        ball.innerHTML = random_user_num (); 
    })
}
function displayWinning () {
    winningNumsList.forEach(wball => {
        wball.innerHTML = random_winning_num();
    })
}
function userNums(){
    return Math.floor(Math.random()*50)+1;
}

function winningNums(){
    return Math.floor(Math.random()*50)+1;
}
buttonReveal.addEventListener('click', () => {
    let Us
})

//Button click Event Listener

document.getElementById("start").addEventListener("click",my function);