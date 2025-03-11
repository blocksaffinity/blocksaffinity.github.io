let score = 0;
let increment = 1;
let PissOffUsers = false;

// <code off stack overflow>
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
// </code off stack overflow>
function ValidateScore()
{
    if (score < 0)
    {
        score = 1;
        document.getElementById('score').innerHTML = "SCORE: " + score;
    }
}
function increase()
{
    score = score + increment;
    document.getElementById('score').innerHTML = "SCORE: " + score;
    if (score < 0)
    {
        score = 1;
        document.getElementById('score').innerHTML = "SCORE: " + score;
    }
}
async function upgrade()
{
    if (CanPlayerUpgrade())
    {
        document.getElementById('increment').innerHTML = "INCREMENT: " + increment;
    }
    else
    {
        if (PissOffUsers)
        {
            window.alert("You do not have enough Score to upgrade!"); // this gets annoying as fuck...
        }
        else
        {
            document.getElementById('increment').innerHTML = "You do not have enough Score to upgrade!";
            await sleep(750);
            document.getElementById('increment').innerHTML = "INCREMENT: " + increment;
        }
    }
    document.getElementById('score').innerHTML = "SCORE: " + score;
    ValidateScore();
}
function CanPlayerUpgrade()
{
    if (increment <= 10)
    {
        if (score >= 10)
        {
            increment = increment + 1;
            score = score - (increment * 10)
            return true;
        }
        else {
            return false;
        }
    }
    else if (increment <= 50)
    {
        if (score >= 100)
        {
            increment = increment + 5;
            score = score - (increment * 10)
            return true;
        }
        else 
        {
            return false;
        }
    }
    else if (increment <= 250)
    {
        if (score >= 750)
        {
            increment = increment + 15;
            score = score - (increment * 10)
            return true;
        }
        else 
        {
            return false;
        }
    }
    else if (increment <= 10000)
    {
        if (score >= 2500)
        {
            increment = increment + 50;
            score = score - (increment * 10)
            return true;
        }
        else 
        {
            return false;
        }
    }
    else
    {
        if (score >= 50000)
        {
            increment = increment * 2;
            score = score - (increment * 10)
            return true;
        }
        else 
        {
            return false;
        }
    }
}