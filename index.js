
let userNums = document.querySelectorAll(".uball");
let winningNums = document.querySelectorAll(".wball");
let userButton = document.querySelector("#start");
let revealButton = document.querySelector("#reveal")
let refreshButton = document.querySelector("#refresh")

//Winning/Lose Variables


//For Each Loop User & Winning numbers
function displayUserNums(){
    userNums.forEach(uball => {
        uball.innerHTML = random_nums()
    })
}
function revealWinningNums(){
    winningNums.forEach(wball => {
        wball.innerHTML = random_nums()
    })
}
//Return Random integer 1-50
function random_nums(){
   return Math.floor((Math.random()*50)+1);
}
function refreshPage(){
    window.location.reload();
}
//Event Listener Buttons
userButton.addEventListener("click", displayUserNums);
revealButton.addEventListener("click", revealWinningNums);
refreshButton.addEventListener("click", refreshPage);z

//If, Else for winner/loser