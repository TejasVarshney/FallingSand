let container = document.querySelector(".container")
let size = 100
let bxSize = 2

function createDisplay() {
    for(let i = 0; i<size/bxSize; i++) {
        let row = document.createElement("div")
        row.setAttribute("class", `row${i+1}`)
        for(let j = 0; j<size/bxSize; j++) {
            let bx = document.createElement("div")
            bx.setAttribute("class", "box")
            row.appendChild(bx)
        }
        container.appendChild(row)
    }
}