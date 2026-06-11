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

const canvas =
    document.getElementById("drawingCanvas");

const ctx =
    canvas.getContext("2d");

let drawing = false;

let currentColor = "#000000";

ctx.lineWidth = 4;
ctx.lineCap = "round";

function startDraw(event) {

    drawing = true;

    draw(event);
}

function stopDraw() {

    drawing = false;

    ctx.beginPath();
}

function draw(event) {

    if (!drawing) return;

    const rect =
        canvas.getBoundingClientRect();

    const x =
        (event.clientX || event.touches[0].clientX)
        - rect.left;

    const y =
        (event.clientY || event.touches[0].clientY)
        - rect.top;

    ctx.strokeStyle =
        currentColor;

    ctx.lineTo(x, y);

    ctx.stroke();

    ctx.beginPath();

    ctx.moveTo(x, y);
}

canvas.addEventListener(
    "mousedown",
    startDraw
);

canvas.addEventListener(
    "mouseup",
    stopDraw
);

canvas.addEventListener(
    "mouseleave",
    stopDraw
);

canvas.addEventListener(
    "mousemove",
    draw
);

canvas.addEventListener(
    "touchstart",
    startDraw
);

canvas.addEventListener(
    "touchend",
    stopDraw
);

canvas.addEventListener(
    "touchmove",
    draw
);

document
    .querySelectorAll(".color-btn")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                currentColor =
                    button.dataset.color;
            }
        );
    });

document
    .getElementById("eraser")
    .addEventListener(
        "click",
        () => {

            currentColor = "#ffffff";
        }
    );

document
    .getElementById("clearCanvas")
    .addEventListener(
        "click",
        () => {

            ctx.clearRect(
                0,
                0,
                canvas.width,
                canvas.height
            );
        }
    );

    document
    .getElementById("saveDrawing")
    .addEventListener("click", () => {

        const link =
            document.createElement("a");

        link.download =
            "doodle-for-mihir.png";

        link.href =
            canvas.toDataURL("image/png");

        link.click();

    });