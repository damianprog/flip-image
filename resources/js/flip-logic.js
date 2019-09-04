(function () {
    const allArrows = document.querySelectorAll(".arrow");
    allArrows.forEach(arrow => arrow.onclick = flip);
})();

function flip() {
    console.log("Flippin fn!");
}