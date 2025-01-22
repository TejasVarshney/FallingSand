let container = document.querySelector(".container")
let size = 50
let bxSize = 8
let clockSpeed = 2

function createDisplay() {
    for(let i = 0; i<size; i++) {
        let row = document.createElement("div")
        row.setAttribute("class", `row${i+1}`)
        
        for(let j = 0; j<size; j++) {
            let bx = document.createElement("div")
            bx.setAttribute("class", "box")
            bx.style.height = `${bxSize}px`
            bx.style.width = `${bxSize}px`
            
            row.appendChild(bx)
        }
        
        container.appendChild(row)
    }
}

container.addEventListener("mouseover", (e) => {
    if(e.target.classList.contains("box")) {
        e.target.classList.add("falling")
        e.target.style.height = `${bxSize}px`
        e.target.style.width = `${bxSize}px`
    }
})

createDisplay()