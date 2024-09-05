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

function healHp(playerClass, cpuClass,playerMove, computerMove, winnerNbr){
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
