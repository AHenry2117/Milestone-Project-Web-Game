
let userNums = document.querySelectorAll(".uball");
let winningNums = document.querySelectorAll(".wball");
let userButton = document.querySelector("#start");
let revealButton = document.querySelector("#reveal");
let refreshButton = document.querySelector("#refresh");
let solidContainer = document.querySelector("#results");

//For Each Loop User & Winning numbers
function displayUserNums(){
    let usedNums = [];
    userNums.forEach(uball => {
        let num = random_user_nums();
        if(usedNums.includes(num)){
            num = random_user_nums()
            uball.innerHTML = num
        } else {
            uball.innerHTML = num
        }
        usedNums.push(num);
    })
    userButton.disabled = true;
}
function revealWinningNums(){
    let usedNums = [];
    winningNums.forEach(wball => {
        let num = random_user_nums();
        if(usedNums.includes(num)){
            num = random_user_nums()
            wball.innerHTML = num
        } else {
            wball.innerHTML = num
        }
        usedNums.push(num);
    })
    revealButton.disabled = true;
    checkforWin();
}
   
 

//Return Random integer 1-50
function random_user_nums(){
   return Math.floor((Math.random()*6)+1);
}
function random_winning_nums(){
    return Math.floor((Math.random()*6)+1);
 }
function checkforWin(){
    let results = document.createElement("img");
    //Winning/Lose Variables
    if(userNums == winningNums){
        results.src= "/Assets/Winner.png"
        solidContainer.appendChild(results)
     } else {
        results.src= "/Assets/Loser.png"
        solidContainer.appendChild(results)
     }
}

function refreshPage(){
    window.location.reload();
}
//Event Listener Buttons
userButton.addEventListener("click", displayUserNums);
revealButton.addEventListener("click", revealWinningNums);
refreshButton.addEventListener("click", refreshPage);
