function getPlayerMove(){
    let player = prompt("Choose your move \n 1 for rock \n 2 for paper \n 3 for scissor ")
    player=parseInt(player)
    let moveSelect = moves[player]
    console.log("Player move is  " + moveSelect)
    return moveSelect
}

function getPlayerClass(){
    let player = prompt("Choose your class \n 1 for knight \n 2 for warrior \n 3 for magician ")
    player=parseInt(player)
    let classSelect = classes[player]
    console.log("Player class is  " + classSelect)
    return classSelect
}