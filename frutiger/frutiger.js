let currentBg = 11; // i dont know why this is here but its fine dw
let availableBg = ["aeroBg1.jpg", "aeroBg2.jpg", "aeroBg3.jpg", "aeroBg4.jpg", "aeroBg5.jpg", "aeroBg6.jpg", "aeroBg7.jpg", "aeroBg8.jpg", "aeroBg10.jpg", "aeroBg11.jpg", "aeroBg12.jpg",];

function setup() { // ran on page loading using onload attribute in body tag
    let savedBg = localStorage.getItem("blocksaffinity_savedBackground"); // Get saved bg

    if (savedBg) { // if something is saved (JS let's you convert string to bool - dw about it)
        document.getElementById("body").style.backgroundImage = 'url("/assets/frutiger/' + savedBg + '")';
    } else {
        // if savedBg returns false
        // make the background the default one which is 11 because it looks gorgeous and i probably spelt that wrong
        document.getElementById("body").style.backgroundImage = 'url("/assets/frutiger/aeroBg11.jpg")'; // Default bg: 11
    }
}

let isCooldown = false; 

function SwitchBg() {
    if (isCooldown) 
    {
        return;
    }
    // make it disabled
    document.getElementById("changeBgButton").classList.add("buttonSelected"); 

    isCooldown = true; 

    currentBg++;
    if (currentBg > availableBg.length) {
        // prevent overflow by resetting to 1
        currentBg = 1;
    }

    if (currentBg == 5 || currentBg == 8 || currentBg == 11) { // header font colour needs to be black for these (not 11 or 9, idk why that happens but it means 12 and 10 - dont ask)
        document.getElementById("MainHeaderText").style.color = "black";
        if (currentBg == 8 || currentBg == 11)
        {
            document.querySelectorAll("p").forEach(p => { // also make the paragraph font colour black
                p.style.color = "black";
            });
        }
    } else { // needs to be black again for others
        document.getElementById("MainHeaderText").style.color = "white";
        document.querySelectorAll("p").forEach(p => {
            p.style.color = "white";
        });
    }

    document.getElementById("body").style.backgroundImage = 'url("/assets/frutiger/' + availableBg[currentBg - 1] + '")';

    localStorage.setItem("blocksaffinity_savedBackground", availableBg[currentBg - 1]);

    setTimeout(() => {
        // do this after 1500 ms
        isCooldown = false;

        // make the button normal
        document.getElementById("changeBgButton").classList.remove("buttonSelected");
    }, 1500);
}