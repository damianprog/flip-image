window.onload = function () {
    const allArrows = document.querySelectorAll(".arrow");
    allArrows.forEach(arrow => arrow.addEventListener("click", () => {
        const image = arrow.parentElement.querySelector(".image-container img");
        if (arrow.classList.contains("right")) {
            flipRight(image);
        } else if (arrow.classList.contains("left")) {
            flipLeft(image);
        } else if (arrow.classList.contains("up")) {
            flipUp(image);
        } else if (arrow.classList.contains("down")) {
            flipDown(image);
        }
    }));
};

function flipRight(image) {
    image.style.transform = image.style.transform.replace("scaleX(1)", "");
    if (!image.style.transform.includes("scaleX(-1)")) {
        image.style.transform += " scaleX(-1) ";
    }
}

function flipLeft(image) {
    image.style.transform = image.style.transform.replace("scaleX(-1)", "");
    if (!image.style.transform.includes("scaleX(1)")) {
        image.style.transform += " scaleX(1) ";
    }
}

function flipUp(image) {
    image.style.transform = image.style.transform.replace("scaleY(1)", "");
    if (!image.style.transform.includes("scaleY(-1)")) {
        image.style.transform += " scaleY(-1) ";
    }
}

function flipDown(image) {
    image.style.transform = image.style.transform.replace("scaleY(-1)", "");
    if (!image.style.transform.includes("scaleY(1)")) {
        image.style.transform += " scaleY(1) ";
    }
}

function replaceImage() {
    const url = document.querySelector("input").value;
    if (validateUrl(url)) {
        document.querySelectorAll(".image-container img").forEach(img => {
            img.src = url;
        });
    }
}

function validateUrl(url) {
    const urlExp = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    const imgExp = /\.(jpeg|jpg|gif|png)$/;
    const regex = new RegExp(urlExp.source + imgExp.source);

    if (url.match(regex)) {
        return true;
    } else {
        alert("Wrong URL image input");
        return false;
    }
}