const roles = [
    "Computer Science Student",
    "Python Developer",
    "Machine Learning Enthusiast",
    "UI/UX Enthusiast",
    "Technology Explorer"
];

let roleIndex = 0;
let charIndex = 0;

const roleElement = document.getElementById("role");

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

        if (position < window.innerHeight - 100) {

            element.classList.add("active");
        }

    });

}

window.addEventListener(
    "scroll",
    revealSections
);

revealSections();

document
    .getElementById("year")
    .textContent =
    new Date().getFullYear();

const topButton =
    document.getElementById("top-btn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topButton.style.opacity = "1";
        topButton.style.pointerEvents = "auto";
    }
    else {

        topButton.style.opacity = "0";
        topButton.style.pointerEvents = "none";
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

if (canvas) {

    const ctx =
        canvas.getContext("2d");

    let drawing = false;

    let currentColor = "#000000";

    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    function getPosition(event) {

        const rect =
            canvas.getBoundingClientRect();

        let x;
        let y;

        if (event.touches) {

            x =
                event.touches[0].clientX -
                rect.left;

            y =
                event.touches[0].clientY -
                rect.top;
        }
        else {

            x =
                event.clientX -
                rect.left;

            y =
                event.clientY -
                rect.top;
        }

        return { x, y };
    }

    function startDrawing(event) {

        event.preventDefault();

        drawing = true;

        const pos =
            getPosition(event);

        ctx.beginPath();

        ctx.moveTo(
            pos.x,
            pos.y
        );
    }

    function draw(event) {

        if (!drawing) return;

        event.preventDefault();

        const pos =
            getPosition(event);

        ctx.strokeStyle =
            currentColor;

        ctx.lineTo(
            pos.x,
            pos.y
        );

        ctx.stroke();
    }

    function stopDrawing() {

        drawing = false;

        ctx.beginPath();
    }

    canvas.addEventListener(
        "mousedown",
        startDrawing
    );

    canvas.addEventListener(
        "mousemove",
        draw
    );

    canvas.addEventListener(
        "mouseup",
        stopDrawing
    );

    canvas.addEventListener(
        "mouseleave",
        stopDrawing
    );

    canvas.addEventListener(
        "touchstart",
        startDrawing,
        { passive: false }
    );

    canvas.addEventListener(
        "touchmove",
        draw,
        { passive: false }
    );

    canvas.addEventListener(
        "touchend",
        stopDrawing
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
        ?.addEventListener(
            "click",
            () => {

                currentColor =
                    "#ffffff";
            }
        );

    document
        .getElementById("clearCanvas")
        ?.addEventListener(
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
        ?.addEventListener(
            "click",
            () => {

                const exportCanvas =
                    document.createElement(
                        "canvas"
                    );

                exportCanvas.width =
                    canvas.width;

                exportCanvas.height =
                    canvas.height;

                const exportCtx =
                    exportCanvas.getContext(
                        "2d"
                    );

                exportCtx.fillStyle =
                    "#ffffff";

                exportCtx.fillRect(
                    0,
                    0,
                    exportCanvas.width,
                    exportCanvas.height
                );

                exportCtx.drawImage(
                    canvas,
                    0,
                    0
                );

                const link =
                    document.createElement(
                        "a"
                    );

                link.download =
                    "doodle-for-mihir.png";

                link.href =
                    exportCanvas.toDataURL(
                        "image/png"
                    );

                link.click();

            }
        );

    document
        .getElementById("sendDrawing")
        ?.addEventListener(
            "click",
            () => {

                alert(
                    "Connect EmailJS to enable sending doodles."
                );

            }
        );
}