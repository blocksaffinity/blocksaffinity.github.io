// ====== blocksaffinity's website | Config ======

// There is no validation for any of these configuration options.
// There is no need to change any of these configuration options.

// Enable the Setup function which initialises everything
// Default: true
let enableSetup = true;

// Choose the theme of the website
// -1: Fully disable theme changing from this JS file. Every HTML file must be updated to change theme.
//  0: Auto — Restore from saved configuration (default) (recommended)
//  1: Dark
//  2: Light
//  3: Glass
//  4: Basic
//  5: Hight Contrast
//  6: Neon
let theme = 0;

// Enable the blinking cursor which can be found next to the blocksaffinity text on the NavBar
// Default: false
//   |-> Disabled by default because font changes can mean it appears incorrectly.
let enableBlinkingCursor = false;

// Choose how messages and alerts show up
// 0: Console only
// 1: Window alert + console
// 2: On screen message box + console (default)
let messageMode = 2;

// Enable the test message box (for on screen message box styling only)
// Default: false
let enableTestMessage = false;

// Choose how long, in ms, the delay is for the test message box to automatically remove itself
// Set to -1 to require the button to be pressed (default)
let testMessageTimeout = -1;

// Fly the sidebar out when choosing an item from the sidebar
// Default: true
let flySidebarOut = true;

// Discord link for PleiadesMC:
let DcLink_plmc = "http://pleiadesmc.space/discord";

// ===============================================



// ====== blocksaffinity's website | Variables ======

// Do not change!

// The current saved theme
let SavedTheme = localStorage.getItem("blocksaffinity.Theme");

// The sidebar's state
// 0: Closed
// 1: Open
let SidebarState = 0;

// Links to games, downloads and projects etc.
const BSAAFBIAT = "https://raw.githubusercontent.com/blocksaffinity/blocksaffinity.github.io/refs/heads/main/games/bsaafbiat/blocksaffinity's%20shocking%20attempt%20at%20flappy%20bird%20in%20a%20terminal%20v1.exe"
const BSAAFBIU = "https://raw.githubusercontent.com/blocksaffinity/blocksaffinity.github.io/refs/heads/main/games/blocksaffinity's%20shocking%20attempt%20at%20flappy%20bird%20in%20Unity.7z"
const JS_CLICKER_V1 = "/v1/clicker.html"

// ==================================================

// this was kinda stolen from somewhere off google shh
// But what this does is injects everything from navbar.html into the navbar element
// Ts is why we need a navbar element
function load_navbar() {
    fetch("/v2/navbar/navbar.html")
        .then(response => {
            if (!response.ok) throw new Error("Navbar failed to load");
            return response.text();
        })
        .then(data => {
            document.getElementById("navbar").innerHTML = data;
        })
        .catch(err => console.error(err));
}

function load_sidebar() {
    fetch("/v2/sidebar/sidebar.html")
        .then(response => {
            if (!response.ok) throw new Error("Sidebar failed to load");
            return response.text();
        })
        .then(data => {
            document.getElementById("sidebar").innerHTML = data;
        })
        .catch(err => console.error(err));
}

function setup() {
    if (enableSetup) {
        // Good to run the setup function

        // Load navbar and sidebar
        load_navbar();
        load_sidebar();

        // Initialise some things
        const MessageBox = new messageBox();
        const Sidebar = new sidebar();
        // WHY WAS I USING CONSTANTS ykw its fine

        // If enableBlinkingCursor is set to true, nothing needs to be done
        // as it's already enabled
        // Not true temporarily check global css.
        // if (!enableBlinkingCursor) {
        //     window.addEventListener("DOMContentLoaded", () => {
        //         document.getElementById("blocksaffinityTitle-BlinkingCursor").style.visibility = "hidden";
        //     });

        //     document.getElementById("blocksaffinityTitle-BlinkingCursor").style.visibility = "hidden";
        // }

        // Ensure the page is usable
        // Idk why but this breaks everything after the line so yh just comment it :D
        document.getElementById("pageblocker").style.display = "none";






        // Apply theme
        if (theme != -1) {
            if (theme == 0) // Auto
            {
                if (SavedTheme == null) // If the user is yet to set a theme:
                {
                    // Initiate dark mode
                    document.getElementById("theme").href = "/v2/styles/dark.css";
                }

                else if (SavedTheme == "dark") {
                    // Initiate dark mode
                    document.getElementById("theme").href = "/v2/styles/dark.css";
                }

                else if (SavedTheme == "light") {
                    // Initiate light mode
                    document.getElementById("theme").href = "/v2/styles/light.css";
                }

                else if (SavedTheme == "glass") {
                    // Initiate glass (previously frutiger aero) mode
                    document.getElementById("theme").href = "/v2/styles/glass.css";
                }

                else if (SavedTheme == "basic") {
                    // Initiate basic mode
                    document.getElementById("theme").href = "/v2/styles/basic.css";
                }

                else if (SavedTheme == "highcontrast") {
                    // Initiate high contrast mode
                    document.getElementById("theme").href = "/v2/styles/highcontrast.css";
                }

                else if (SavedTheme == "neon") {
                    // Initiate neon mode
                    document.getElementById("theme").href = "/v2/styles/neon.css";
                }
            }

            else if (theme == 1) // Dark
            {
                document.getElementById("theme").href = "/v2/styles/dark.css";
            }

            else if (theme == 2) // Light
            {
                document.getElementById("theme").href = "/v2/styles/light.css";
            }

            else if (theme == 3) // Glass (previously Frutiger Aero)
            {
                document.getElementById("theme").href = "/v2/styles/glass.css";
            }

            else if (theme == 4) // Basic
            {
                document.getElementById("theme").href = "/v2/styles/basic.css";
            }

            else if (theme == 5) // High Contrast
            {
                document.getElementById("theme").href = "/v2/styles/highcontrast.css";
            }

            else if (theme == 6) // Neon
            {
                document.getElementById("theme").href = "/v2/styles/neon.css";
            }
        }

        // BUG FIX: Prevent the sidebar from visibly flying out on page load
        Sidebar.Fly.FlyOut();

        // Show test message (if enabled)
        if (enableTestMessage) {
            console.log("Test Message\nLine 1\nLine 2\nLine 3");
            if (messageMode == 1) {
                window.alert("Test Message\nLine 1\nLine 2\nLine 3");
            }
            else if (messageMode == 2) {
                if (testMessageTimeout == -1) {
                    MessageBox.Fade.FadeIn("Test Message", "Line 1<br>Line 2<br>Line 3");
                }
                else {
                    MessageBox.Fade.FadeIn("Test Message", "Line 1<br>Line 2<br>Line 3");
                    setTimeout(MessageBox.Hide, testMessageTimeout);
                }
            }
        }
    }
}

function NavToPage(page) // why did i make this function?
{
    if (page == "home") {
        window.location.href = "/index.html";
    }
}

function seturl(url) { window.location.href = url; }
function new_tab(url) { window.open(url); }

function sb() {
    const x = new sidebar();
    x.Auto(true)
}
function goto(url) {
    // First, hide sidebar for seamlessness (if enabled)
    if (flySidebarOut) {
        if (SidebarState == 1) // Sidebar is out, fly in
        {
            const x = new sidebar();
            x.Fly.FlyIn();
        }
        else if (SidebarState == 0) { } // Sidebar is already in, no need to do anything
    }

    // Now, simply set the URL to the specified one
    seturl(url);
}


















class sidebar {
    Auto(fly = true) // Decide whether sidebar should open or close
    {
        if (fly) {
            const Sidebar = new sidebar();
            if (SidebarState == 0) {
                Sidebar.Fly.FlyIn();
                SidebarState = 1;
            }
            else if (SidebarState == 1) {
                Sidebar.Fly.FlyOut();
                SidebarState = 0;
            }
        }
        else {
            const Sidebar = new sidebar();
            if (SidebarState == 0) {
                Sidebar.Show();
                SidebarState = 1;
            }
            else if (SidebarState == 1) {
                Sidebar.Hide();
                SidebarState = 0;
            }
        }
    }
    Hide() {
        document.getElementById("pageblocker").style.display = "none";
    }
    Show() {
        document.getElementById("pageblocker").style.display = "block";
    }
    Fly = new class {
        FlyIn() {
            document.getElementById("sidebar").classList.remove("sidebarOut");
            document.getElementById("sidebar").classList.add("sidebarIn");

            document.getElementById("pageblocker").style.display = "block";
        }
        FlyOut() {
            if (SidebarState == 1) {
                document.getElementById("sidebar").classList.remove("sidebarIn");
                document.getElementById("sidebar").classList.add("sidebarOut");

                document.getElementById("pageblocker").style.display = "none";
            }
        }
    }
}

class messageBox // idk if static classes exist here
{
    Show(title, text) {
        document.getElementById("messageBox").style.visibility = "visible";
        document.getElementById("messageBox-Title").innerHTML = title;
        document.getElementById("messageBox-Text").innerHTML = text;
    }
    Hide() {
        document.getElementById("messageBox").style.visibility = "hidden";
        document.getElementById("messageBox-Title").innerHTML = "";
        document.getElementById("messageBox-Text").innerHTML = "";
    }
    Button = new class {
        Click = new class {
            OK() {
                const MessageBox = new messageBox();
                MessageBox.Fade.FadeOut();
            }
        }
    }
    Fade = new class {
        // ChatGPT wrote this bit
        // why no css animation idk

        FadeOut() {
            const MessageBox = new messageBox();
            let i = 1;
            let fadeEffect = setInterval(() => {
                if (i <= 0) {
                    clearInterval(fadeEffect);
                    MessageBox.Hide();
                } else {
                    document.getElementById("messageBox").style.opacity = i;
                    i -= 0.05; // adjust me if needed
                }
            }, 0.05); // adjust me if needed
        }
        FadeIn(title, text) {
            const MessageBox = new messageBox();
            let i = 0;
            document.getElementById("messageBox").style.opacity = 0;
            MessageBox.Show(title, text);
            let fadeEffect = setInterval(() => {
                if (i >= 1) {
                    clearInterval(fadeEffect);
                } else {
                    document.getElementById("messageBox").style.opacity = i;
                    i += 0.05; // adjust me if needed
                }
            }, 0.05); // adjust me if needed
        }
    }
}

// < AI generated code >
document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth >= 800) {
        document.body.classList.add("animate-in");
    } else {
        document.body.classList.add("animate-out");
        // optional: only if you want flyOut on load for small screens
    }
});
// </ AI generated code >