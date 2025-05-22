let isTimeout = false;

// function ConvertPage()
// {
//     document.getElementById("hiThere").classList.add("fadeOut");
//     document.getElementById("basicIntro").classList.add("fadeOut");
//     document.getElementById("hobbies").classList.add("fadeOut");
//     document.getElementById("languagesDiv").classList.add("fadeOut");
//     document.getElementById("interestedDiv").classList.add("fadeOut");
//     document.getElementById("haveALook").classList.add("fadeOut");

//     document.getElementById("CoinsText").classList.add("CoinsTextEnabled");
//     document.getElementById("bouncingBlocksaffinity").classList.add("bigBlocksaffinity");
//     document.getElementById("bouncingBlocksaffinity").classList.remove("bouncingBlocksaffinity");
// }

function OutputCoin() {
    // ConvertPage();

    if (!isTimeout)
    {
        isTimeout = true;
        document.getElementById("bouncingBlocksaffinity").classList.remove("bouncingBlocksaffinity");
        document.getElementById("bouncingBlocksaffinity").classList.add("bouncingBlocksaffinityDisabled");

        let coin = document.getElementById("coin");

        coin.classList.add("coinOut");

        setTimeout(() => {
            coin.classList.add("coinIn");

            setTimeout(() => {
                coin.classList.remove("coinOut");
                coin.classList.remove("coinIn");
            }, 500);
            
        }, 500); 


        setTimeout(() => {
            isTimeout = false;
            document.getElementById("bouncingBlocksaffinity").classList.add("bouncingBlocksaffinity");
        document.getElementById("bouncingBlocksaffinity").classList.remove("bouncingBlocksaffinityDisabled");
        }, 1000);
    }
    else
    {
        console.info("Function 'OutputCoin' is on timeout!");
    }
}