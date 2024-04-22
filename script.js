console.log("Welcome to Rock Paper Scissor RPG")

let computerHp=100;
let playerHp=100;
let baseDmg=20
let baseHeal=10
let computerHeal=baseHeal
let playerHeal=baseHeal
let computerDmg=baseDmg
let playerDmg=baseDmg


console.log("Player HP : "+playerHp +"\n"+"Computer HP: "+computerHp )

var choice = ["rock", "paper", "scissor"]
var playerClass = ["knight", "warrior", "magician"]

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

function getPlayerClass(){
    let player = prompt("Choose your class \n 1 for knight \n 2 for warrior \n 3 for magician ")
    player=parseInt(player)-1
    let classSelect = playerClass[player]
    console.log("Player class is  " + classSelect)
    return classSelect
}

function getComputerClass(){
    let random=Math.floor(Math.random()*3)
    switch (random) {
        case 0:
            console.log("Computer class is " + playerClass[0])
            return playerClass[0]
            break;
        
        case 1:
            console.log("Computer class is " + playerClass[1])
            return playerClass[1]
            break;

        case 2:
            console.log("Computer class is " + playerClass[2])
            return playerClass[2]
            break;

        default:
            return 0
            break;
    }
}

function playGame(){
    let playerClassSelect = getPlayerClass()
    let computerClassSelect = getComputerClass()
    while(playerHp>0 && computerHp>0){
       let playerChoice=getPlayerChoice()
       let computerChoice=getComputerChoice()
       let winner = playRound(playerChoice, computerChoice)
        healHp(playerClassSelect, computerClassSelect, playerChoice, computerChoice, winner)
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

function healHp(playerSelection, computerSelection,playerMove, computerMove, winnerNbr){
    if (winnerNbr==2 && playerSelection==="knight" && playerMove==="scissor"){
        if(playerHp<100){
            playerHp=playerHp+playerHeal
        }else{
            playerHp=playerHp
        }
        console.log("player made a successfull core attack, he gain health")
    }else if(winnerNbr==2 && playerSelection==="warrior" && playerMove==="rock"){
        if(playerHp<100){
            playerHp=playerHp+playerHeal
        }else{
            playerHp=playerHp
        }
        console.log("player made a successfull core attack, he gain health")
    }else if(winnerNbr==2 && playerSelection==="magician" && playerMove==="paper"){
        if(playerHp<100){
            playerHp=playerHp+playerHeal
        }else{
            playerHp=playerHp
        }
        console.log("player made a successfull core attack, he gain health")
    }
    else if(winnerNbr==1 && computerSelection==="knight" && computerMove==="scissor"){
        if(computerHp<100){
            computerHp=computerHp+computerHeal
        }else{
            computerHp=computerHp
        }
        console.log("computer made a successfull core attack, he gain health")
    }else if(winnerNbr==1 && computerSelection==="warrior" && computerMove==="rock"){
        if(computerHp<100){
            computerHp=computerHp+computerHeal
        }else{
            computerHp=computerHp
        }
        console.log("computer made a successfull core attack, he gain health")
    }else if(winnerNbr==1 && computerSelection==="magician" && computerMove==="paper"){
        if(computerHp<100){
            computerHp=computerHp+computerHeal
        }else{
            computerHp=computerHp
        }
        console.log("computer made a successfull core attack, he gain health")
    }else{}
}

playGame()