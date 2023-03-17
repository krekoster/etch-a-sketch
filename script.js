

// // sloziti da boji na pokret



// const sliderRange = document.getElementById("boxResolution");
// const resetGrid = document.getElementById("clearBtn");
// const grid = document.getElementById("gridContainer");
// const writeBtn = document.getElementById("writeBtn");
// const eraseBtn = document.getElementById("eraseBtn");
// let globalMode = "write";
// let range = 16;
// createBoxes();

// function getSliderValue() {
//     grid.innerHTML = "";
//     range = sliderRange.value;
//     createBoxes();
// }

// function resetParameters() {
//     location.reload();
// }

// resetGrid.addEventListener("click", resetParameters);
// sliderRange.addEventListener("change", getSliderValue);
// //grid.addEventListener("mouseenter", paintGrid);

// grid.addEventListener("mouseenter", inputTest);

// // writeBtn.addEventListener("click", paintBox);
// // eraseBtn.addEventListener("click", eraseBox);

// function inputTest () {
//     console.log("input");
// }

// function paintBox() {
//     globalMode = "write";
//     // paintGrid();
//     console.log(globalMode);
// }

// function eraseBox() {
//     globalMode = "erase";
//     console.log(globalMode);
// }
//                                    function createBoxes() {};

// // function createBoxes() {
// //     let base = (100 / range);
// //     base = base + "%";
// //     let r = document.querySelector(":root");
// //     for (let i = 0; i < range * range; i++) {
// //         const box = document.createElement("div");
// //         box.classList.add("boxes");
// //         box.innerText = i;
// //         box.style.width = base;
// //         box.style.height = base;
// //         document.getElementById("gridContainer").appendChild(box);
// //     }
// // }

// // function paintGrid() {
// //     console.log("mis je usao");
// //     const box = document.getElementsByClassName("boxes");
// //     for (let i = 0; i < box.length; i++) {
// //         if (globalMode === "write") {
// //             console.log(globalMode);
// //             box[i].addEventListener("mousedown", () => {
// //                 box[i].style.backgroundColor = "#539165";
// //                 paintGrid();
// //             })

// //         }
// //         else {
// //             box[i].addEventListener("mousedown", () => {
// //                 box[i].style.backgroundColor = "#f7c04a";
// //             })
// //         }
// //     }
// // }



//-------------------mouseover testing------------------


const grid = document.getElementById("gridContainer");
function itsIn() {
    console.log("input");
    grid.style.backgroundColor = "red";
}
function itsAway() {
    console.log("goingout");
    grid.style.backgroundColor = "#f7c04a";
}
grid.addEventListener("mouseenter", itsIn );
grid.addEventListener("mouseleave", itsAway);











