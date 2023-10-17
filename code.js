function getOutputOfComputer()
{
    randomVar = Math.floor(Math.random()*3 + 1);
    // 1 = rock
    // 2 = paper
    // 3 = scissor
    const choice = {
        1 : "Rock",
        2 : "Paper",
        3 : "Scissors"
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
    result = 0 // 0 : draw, 1: player wins, 2: Computer Wins
    if(inp == out){
        result = 0
    }
    else if(inp ==1 && out == 2) //rock loses paper
    {
        result = 2
    }
    else if(inp ==2 && out == 1) // paper beats rock
    {
        result = 1
    }
    else if(inp ==1 && out == 3) //rock beats Scissors
    {
        result = 1
    }
    else if(inp ==3 && out == 1) //Scissors cannot beat Rock
    {
        result = 2
    }
    else if(inp ==2 && out == 3) //paper cannot beats Scissors
    {
        result = 2
    }
    else if(inp ==3 && out == 2) //Scissors beat paper
    {
        result = 1
    }
    return result
}
// console.log(Math.random()*3 +1 )
// console.log(getOutputOfComputer())