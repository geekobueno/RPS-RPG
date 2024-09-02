console.log("Welcome to Rock Paper Scissor RPG") 

let maxHp = 100
let computerHp = maxHp;
let playerHp = maxHp;
let baseDmg = 15
let baseHeal = 7
let computerHeal = baseHeal
let playerHeal = baseHeal
let computerDmg = baseDmg
let playerDmg = baseDmg
var moves = {
    1 : "rock",
    2 : "paper",
    3 : "scissor"
}
var classes = {
    1 : "knight",
    2 : "warrior",
    3 : "magician"
}

console.log("Player HP : "+playerHp +"\n"+"Computer HP: "+computerHp )


function playMatch(){
    let playerClass = getPlayerClass()
    let cpuClass = getComputerClass()
    while(playerHp>0 && computerHp>0){
       let playerMove=getPlayerMove()
       let cpuMove=getComputerMove()
       let winner = winHandler(playerMove, cpuMove)
        healHp(playerClass, cpuClass, playerMove, cpuMove, winner)
        updateHp(winner)
    }

    if(playerHp==0){
        console.log("computer won the game")
    }else if(computerHp==0){
        console.log("player won the game")
    }else{}
}

function winHandler(playerMove, cpuMove){

   if (playerMove === cpuMove) {
    console.log("It's a tie")
    num=0
   }
   else if (playerMove === moves[2] && cpuMove === moves[3]){
    console.log("computer win the round!!")
    num=1;
   }
   else if (playerMove === moves[2] && cpuMove === moves[1]){
    console.log("player win the round!!")
    num=2;
   }
   else if (playerMove === moves[3] && cpuMove === moves[2]){
    console.log("player win the round!!")
    num=2;
   }
   else if (playerMove === moves[3] && cpuMove === moves[1]){
    console.log("computer win the round!!")
    num=1;
   }
   else if (playerMove === moves[1] && cpuMove === moves[3]){
    console.log("player win the round!!")
    num=2;
   }
   else if (playerMove === moves[1] && cpuMove === moves[2]){
    console.log("computer win the round!!")
    num=1;
   }
    return num;
}


playMatch()