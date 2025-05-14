let score = 0;
let increment = 1;
let upgradeCost = 1;
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
        updateUpgradeCost();
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
function updateUpgradeCost()
{
    document.getElementById('upgradecost').innerHTML = "Upgrade Cost: " + upgradeCost;
}
function CanPlayerUpgrade()
{
    updateUpgradeCost;
    if (score >= (upgradeCost * 2))
    {
        if (increment < 5000) {
            increment += 10;
            score -= upgradeCost;
        }
        else if (increment < 75000)
        {
            increment += 100;
            score -= upgradeCost;
        }
        else
        {
            increment *= 2;
            score -= upgradeCost;
        }
        return true;
    }
    else
    {
        return false;
    }
}