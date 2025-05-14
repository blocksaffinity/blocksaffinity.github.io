let currentBg = 2;
let availableBg = ["aeroBg1.jpg", "aeroBg2.jpg", "aeroBg3.jpg", "aeroBg4.jpg", "aeroBg5.jpg", "aeroBg6.jpg", "aeroBg7.jpg", "aeroBg8.jpg", "aeroBg10.jpg", "aeroBg11.jpg", "aeroBg12.jpg",];

function setup() {
    let savedBg = localStorage.getItem("savedBackground"); // Get saved bg

    if (savedBg) {
        document.getElementById("body").style.backgroundImage = 'url("assets/' + savedBg + '")';
    } else {
        document.getElementById("body").style.backgroundImage = 'url("assets/aeroBg1.jpg")'; // Default bg
    }
}

let isCooldown = false; 

function SwitchBg() {
    if (isCooldown) 
    {
        return;
    }
    document.getElementById("changeBgButton").classList.add("buttonSelected"); 

    isCooldown = true; 

    currentBg++;
    if (currentBg > availableBg.length) {
        currentBg = 1;
    }

    if (currentBg == 5 || currentBg == 8 || currentBg == 11) {
        document.getElementById("MainHeaderText").style.color = "black";
        if (currentBg == 8 || currentBg == 11)
        {
            document.querySelectorAll("p").forEach(p => {
                p.style.color = "black";
            });
        }
    } else {
        document.getElementById("MainHeaderText").style.color = "white";
        document.querySelectorAll("p").forEach(p => {
            p.style.color = "white";
        });
    }

    document.getElementById("body").style.backgroundImage = 'url("assets/' + availableBg[currentBg - 1] + '")';

    localStorage.setItem("savedBackground", availableBg[currentBg - 1]);

    setTimeout(() => {
        isCooldown = false;
        document.getElementById("changeBgButton").classList.remove("buttonSelected");
    }, 1500);
}