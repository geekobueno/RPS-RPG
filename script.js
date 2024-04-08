console.log("Welcome to Rock Paper Scissor RPG")

let computerHp=100;
let playerHp=100;
let baseDmg=20
let computerDmg=baseDmg
let playerDmg=baseDmg
let winner

console.log("Player HP : "+playerHp +"\n"+"Computer HP: "+computerHp )

var choice = ["rock", "paper", "scissor"]

function getComputerChoice(){
    let random=Math.floor(Math.random()*3)
    switch (random) {
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

function playGame(){
    while(playerHp>0 && computerHp>0){
       winner = playRound(getPlayerChoice(), getComputerChoice())
        updateHp(winner)
    }

    if(playerHp==0){
        console.log("computer won the game")
    }else if(computerHp==0){
        console.log("player won the game")
    }else{}
}

function playRound(playerSelection, computerSelection){

   if (playerSelection === computerSelection) {
    console.log("It's a tie")
    num=0
   }
   else if (playerSelection === "paper" && computerSelection === "scissor"){
    console.log("computer win the round!!")
    num=1;
   }
   else if (playerSelection === "paper" && computerSelection === "rock"){
    console.log("player win the round!!")
    num=2;
   }
   else if (playerSelection === "scissor" && computerSelection === "paper"){
    console.log("player win the round!!")
    num=2;
   }
   else if (playerSelection === "scissor" && computerSelection === "rock"){
    console.log("computer win the round!!")
    num=1;
   }
   else if (playerSelection === "rock" && computerSelection === "scissor"){
    console.log("player win the round!!")
    num=2;
   }
   else if (playerSelection === "rock" && computerSelection === "paper"){
    console.log("computer win the round!!")
    num=1;
   }
    return num;
}

playGame()

function updateHp(c){
    if(c==1){
        playerHp=playerHp-computerDmg;
        console.log("computer HP " + computerHp)
        console.log("player HP " + playerHp)
    }else if(c==2){
        computerHp=computerHp-playerDmg;
         console.log("computer HP " + computerHp)
        console.log("player HP " + playerHp)
    }else if(c==0){
        console.log("computer HP " + computerHp)
        console.log("player HP " + playerHp)
    }else{
        
    }
}