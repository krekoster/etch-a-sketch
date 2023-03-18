
const sliderRange = document.getElementById("boxResolution");
const resetGrid = document.getElementById("clearBtn");
const grid = document.getElementById("gridContainer");
const writeBtn = document.getElementById("writeBtn");
const eraseBtn = document.getElementById("eraseBtn");
let globalMode = "write";
let range = 16;
let mouseDown = false;

createBoxes();

function getSliderValue() {
    grid.innerHTML = "";
    range = sliderRange.value;
    createBoxes();
}

function resetParameters() {
    location.reload();
}

resetGrid.addEventListener("click", resetParameters);
sliderRange.addEventListener("change", getSliderValue);
grid.addEventListener("mouseenter", paintGrid);
writeBtn.addEventListener("click", paintBox);
eraseBtn.addEventListener("click", eraseBox);

document.getElementById("gridContainer").onmousedown = () => (mouseDown = true);
document.getElementById("gridContainer").onmouseup = () => (mouseDown = false);

function paintBox() {
    globalMode = "write";
    paintGrid();
    console.log(globalMode);
}

function eraseBox() {
    globalMode = "erase";
    console.log(globalMode);
}

function createBoxes() {
    let base = (100 / range);
    base = base + "%";
    for (let i = 0; i < range * range; i++) {
        const box = document.createElement("div");
        box.classList.add("boxes");
        box.style.width = base;
        box.style.height = base;
        document.getElementById("gridContainer").appendChild(box);
    }
}

function paintGrid() {
    const box = document.getElementsByClassName("boxes");
    for (let i = 0; i < box.length; i++) {
        if (globalMode === "write" && !mouseDown ) {
            box[i].addEventListener("mouseenter", () => {
                box[i].style.backgroundColor = "#539165";
            })
        }
        else if (!mouseDown) {
            box[i].addEventListener("mouseenter", () => {
                box[i].style.backgroundColor = "#f7c04a";
            })
        }
    }
}


//----------------------------------------------------------------
//-------------------mouseover testing snippet ------------------
//---------------------------------------------------------------

// const grid = document.getElementById("gridContainer");
// function itsIn() {
//     console.log("input");
//     grid.style.backgroundColor = "red";
// }
// function itsAway() {
//     console.log("goingout");
//     grid.style.backgroundColor = "#f7c04a";
// }
// grid.addEventListener("mousedown", itsIn );
// grid.addEventListener("mouseleave", itsAway);











