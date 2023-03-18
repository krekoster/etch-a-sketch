
const sliderRange = document.getElementById("boxResolution");
const resetGrid = document.getElementById("clearBtn");
const grid = document.getElementById("gridContainer");
const writeBtn = document.getElementById("writeBtn");
const eraseBtn = document.getElementById("eraseBtn");
let globalMode = "write";
let range = 16;

createBoxes();

// after changing slider range, reset the container for sketching
function getSliderValue() {
    grid.innerHTML = "";
    range = sliderRange.value;
    createBoxes();
}

// after clicking Clear button reset all parameters
function resetParameters() {
    location.reload();
}

resetGrid.addEventListener("click", resetParameters);
sliderRange.addEventListener("change", getSliderValue);
grid.addEventListener("mouseenter", paintGrid);
writeBtn.addEventListener("click", paintBox);
eraseBtn.addEventListener("click", eraseBox);

function paintBox() {
    globalMode = "write";
    paintGrid();
}

function eraseBox() {
    globalMode = "erase";
}

// create divs inside the container
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

// write or erase in particular div
function paintGrid() {
    const box = document.getElementsByClassName("boxes");
    for (let i = 0; i < box.length; i++) {
        if (globalMode === "write") {
            box[i].addEventListener("mouseenter", () => {
                box[i].style.backgroundColor = "#539165";
            })
        }
        else {
            box[i].addEventListener("mouseenter", () => {
                box[i].style.backgroundColor = "#f7c04a";
            })
        }
    }
}













