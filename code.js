function getOutputOfComputer()
{
    randomVar = Math.floor(Math.random()*3);
    // 1 = rock
    // 2 = paper
    // 3 = scissor
    const choice = {
        0 : "Rock",
        1 : "Paper",
        2 : "Scissors"
    }
    const final = {
        0 : "Draw!",
        1 : "You Win!!",
        2 : "You Lost :("
    }
    userInp = ""
    userInp = document.querySelector("input[name=inp]:checked").value
    document.getElementById("input").innerHTML = "You Chose: " + choice[userInp]
    document.getElementById("output").innerHTML = "The computer Chose: " + choice[randomVar]
    result = winConditionChecker(Number(userInp), Number(randomVar))
    document.getElementById("Result").innerHTML = final[result]
}

function winConditionChecker(inp, out)
{
    //return 0: draw, 1: win, 2: loss
    //   ..-p >R->P->S..->
    switch((inp+1)%3)
    {
        case (out +1)%3: // same as output so Draw
            return 0
        case out: // Next one in circle so Lost
            return 2
        default:  //Not Next one and not same So Win
            return 1
    }
}