const roles = [
    "Computer Science Student",
    "Python Developer",
    "Machine Learning Enthusiast",
    "Problem Solver"
];

let roleIndex = 0;
let charIndex = 0;

const roleElement =
    document.getElementById("role");

function typeText() {

    if (charIndex < roles[roleIndex].length) {

        roleElement.textContent +=
            roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeText, 100);
    }
    else {

        setTimeout(deleteText, 1500);
    }
}

function deleteText() {

    if (charIndex > 0) {

        roleElement.textContent =
            roles[roleIndex].substring(
                0,
                charIndex - 1
            );

        charIndex--;

        setTimeout(deleteText, 50);
    }
    else {

        roleIndex =
            (roleIndex + 1) % roles.length;

        setTimeout(typeText, 300);
    }
}

typeText();

const reveals =
    document.querySelectorAll(".reveal");

function revealSections() {

    reveals.forEach(element => {

        const position =
            element.getBoundingClientRect().top;

        if (position <
            window.innerHeight - 100) {

            element.classList.add("active");
        }

    });

}

window.addEventListener(
    "scroll",
    revealSections
);

revealSections();

document.getElementById("year")
    .textContent =
    new Date().getFullYear();

const topButton =
    document.getElementById("top-btn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topButton.style.opacity = "1";

        topButton.style.pointerEvents =
            "auto";
    }
    else {

        topButton.style.opacity = "0";

        topButton.style.pointerEvents =
            "none";
    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});