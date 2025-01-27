let container = document.querySelector(".container")
let size = 150 // set teh size of contaner
let bxSize = 5 // set the box size
let clockSpeed = 0.01 // set the falling speed
let color = {r: 100, g: 100, b: 100} // set the color
let spColor = {r: 2, g: 5, b: 3} // set the color changing speed

// create the boxes and the container
function createDisplay() {
    for(let i = 0; i<size; i++) {
        let row = document.createElement("div")
        row.setAttribute("class", `row${i+1}`)
        
        for(let j = 0; j<size; j++) {
            let bx = document.createElement("div")
            bx.setAttribute("class", "box")
            bx.classList.add(`box${j+1}`)
            bx.style.height = `${bxSize}px`
            bx.style.width = `${bxSize}px`
            
            row.appendChild(bx)
        }
        
        container.appendChild(row)
    }
}

// fall the boxes
function fall() {
    let fallingBox = document.querySelectorAll(".falling")
    for(let i = 0; i<fallingBox.length; i++) {
        let pos = {x: fallingBox[i].parentElement.classList[0].replace("row", ""), y: fallingBox[i].classList[1].replace("box", "")}
        // console.log(pos)

        //if the box is inside the container
        if(pos.y < size) {
            let bx = fallingBox[i]
            let bx2 = document.querySelector(`.row${pos.x} > .box${Number(pos.y)+1}`)   //selecting box beanth the falling box
            
            // if the box falling is not ended
            if(!bx2.classList.contains("ended")) {
                bx.classList.remove("falling")  //removing the falling class to the current box
                bx2.classList.add("falling")    //adding the falling class to the next box
                bx2.style.backgroundColor = bx.style.backgroundColor //change the color of the next box
                bx.style.backgroundColor = "black"  //remove the color of the current box
            }
            else {
                fallingBox[i].classList.remove("falling")
                fallingBox[i].classList.add("ended")
                // fallingBox[i].style.backgroundColor = "yellow"
            }
        }
        else {
            fallingBox[i].classList.remove("falling")
            fallingBox[i].classList.add("ended")
            // fallingBox[i].style.backgroundColor = "yellow"
        }
    }
}

container.addEventListener("mouseover", (e) => {
    if(e.target.classList.contains("box") && !e.target.classList.contains("falling") && !e.target.classList.contains("ended")) {
        e.target.classList.add("falling")
        e.target.style.backgroundColor = `rgb(${color.r}, ${color.g}, ${color.b})`

        //change the color
        if(color.r > 255 || color.r < 15) spColor.r = -spColor.r
        if(color.g > 255 || color.g < 15) spColor.g = -spColor.g
        if(color.b > 255 || color.b < 15) spColor.b = -spColor.b
        color.r+= spColor.r
        color.g+= spColor.g
        color.b+= spColor.b
    }
})


createDisplay()
setInterval(fall, clockSpeed)