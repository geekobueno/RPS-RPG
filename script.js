console.log("Welcome to Rock Paper Scissor RPG")

var choice = ["rock", "paper", "scissor"]

function getComputerChoice(){
    let num=Math.floor(Math.random()*3)
    switch (num) {
        case 0:
            console.log(`computer choose ${choice[0]}`)
            return choice[0]
            break;
        
        case 1:
            console.log(`computer choose ${choice[1]}`)
            return choice[1]
            break;

        case 2:
            console.log(`computer choose ${choice[2]}`)
            return choice[2]
            break;

        default:
            return 0
            break;
    }
}

function getPlayerChoice(){
    let player = prompt("Choose your weapon:")
    console.log(`player choose ${player.toLowerCase()}`)
    return player.toLowerCase()
}

function playRound(playerSelection, computerSelection){

   if (playerSelection === computerSelection) {
    console.log("It's a tie")
   }
   else if (playerSelection === "paper" && computerSelection === "scissor"){
    console.log("computer win!!")
   }
   else if (playerSelection === "paper" && computerSelection === "rock"){
    console.log("player win!!")
   }
   else if (playerSelection === "scissor" && computerSelection === "paper"){
    console.log("player win!!")
   }
   else if (playerSelection === "scissor" && computerSelection === "rock"){
    console.log("computer win!!")
   }
   else if (playerSelection === "rock" && computerSelection === "scissor"){
    console.log("player win!!")
   }
   else if (playerSelection === "rock" && computerSelection === "paper"){
    console.log("computer win!!")
   }

}

playRound(getPlayerChoice(), getComputerChoice())