function getComputerMove(){
    let random=Math.floor(Math.random()*3) + 1
   console.log("Computer move is " + moves[random])
     return moves[random]
}

function getComputerClass(){
    let random = Math.floor(Math.random()*3) + 1
   console.log("Computer class is " + classes[random])
    return classes[random]
}