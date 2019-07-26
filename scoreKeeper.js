var playerOne = document.querySelector("#playerOne");
var playerTwo = document.getElementById("playerTwo");
var p1Score = document.getElementById("p1Score");
var p2Score = document.querySelector("#p2Score");
var reset = document.querySelector("#reset");
var playLimit = document.querySelector("#playLimit");
var numInput = document.querySelector("#inputs");
p1ScoreLine = 0;
p2ScoreLine = 0;
gameOver = false;
winningGame = 5;

//adding event handler to the buttons

playerOne.addEventListener("click", function(){
    if(!gameOver){
        p1ScoreLine +=1;
        if (p1ScoreLine === winningGame){
            gameOver = true;
            p1Score.classList.add("winner")
        }
        p1Score.textContent = p1ScoreLine;
        
    }
    
})

playerTwo.addEventListener("click", function(){
    if (!gameOver){
        p2ScoreLine +=1;
        if (winningGame === p2ScoreLine){
            gameOver = true;
            p2Score.classList.add("winner")
        }
        p2Score.textContent = p2ScoreLine;
    }
    
})


reset.addEventListener("click", function(){
    //alert("clicked");
    resetScore();
})

function resetScore(){
    p1ScoreLine = 0;
    p2ScoreLine = 0;
    p1Score.textContent = 0;
    p2Score.textContent = 0;
    p2Score.classList.remove("winner");
    p1Score.classList.remove("winner");
    gameOver = false;
}

numInput.addEventListener("change", function(){
    //alert("it has changed");
    var inputValue = this.value;       //input.value returns a string always
    playLimit.textContent = inputValue;
    winningGame = Number(inputValue);
    resetScore()
})
