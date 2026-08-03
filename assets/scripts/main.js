function load_navbar(page) {
    fetch("/assets/html/navbar.html")
        .then(response => {
            if (!response.ok) throw new Error("Navbar failed to load");
            return response.text();
        })
        .then(data => {
            document.getElementById("navbar").innerHTML = data;
            document.getElementById(page).classList.add("activenava")
        })
        .catch(err => console.error(err));
}

function mobile_toggle_navbar()
{
    const navbar = document.getElementById("internal-navbar");
    const navbarCollapseBtnP = document.getElementById("navbar-mobile-collapse-btn-p");

    if (navbar.classList.contains("nav-ul-collapsed"))
    {
        navbar.classList.remove("nav-ul-collapsed");
        navbarCollapseBtnP.innerHTML = "<b>⨉</b>";
    }
    else
    {
        navbar.classList.add("nav-ul-collapsed");
        navbarCollapseBtnP.innerHTML = "<b>☰</b>";
    }
}

function close_navbar()
{
    const navbar = document.getElementById("internal-navbar");
    const navbarCollapseBtnP = document.getElementById("navbar-mobile-collapse-btn-p");

    if (!navbar.classList.contains("nav-ul-collapsed"))
    {
        navbar.classList.add("nav-ul-collapsed");
    }
    navbarCollapseBtnP.innerHTML = "<b>☰</b>";
}