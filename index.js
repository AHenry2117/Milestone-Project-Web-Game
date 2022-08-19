
let userNums = document.querySelectorAll("#start");
let winningNums = document.querySelectoryAll("#reveal");

//Return Random integer 1-50
function userNums(){
    return Math.floor(Math.random()*50)+1;
}

function winningNums(){
    return Math.floor(Math.random()*50)+1;
}


//Button click Event Listener
