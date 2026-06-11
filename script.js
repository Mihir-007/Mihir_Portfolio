const themeButton = document.getElementById("theme-btn");

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeButton.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
    else {
        themeButton.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }

});