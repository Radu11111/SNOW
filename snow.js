const N_FLAKES = 20
let flakes_x = [
  
]

let flakes_y = [
    
]
let fallTimer = setInterval(fall, 50)
let pauseStatus = false

function generateCoords() {
    for (let i = 0; i < N_FLAKES; i++) {
        flakes_x[i] = parseInt(Math.random() * 500)
        flakes_y[i] = -parseInt(Math.random() * 500)
    }
}
function drawFlake(i) {
    snowContainer.innerHTML += `<div 
    class="flake"
    style="
    left:${flakes_x[i]}px;
    top:${flakes_y[i]}px;
    ">
    </div>`
}

function drawAllFlakes() {
    snowContainer.innerHTML = ``
    for(let i = 0; i < N_FLAKES; i++) {
        drawFlake(i)
    }
}

function fall() {
    for (let i = 0; i < N_FLAKES; i++) {
        flakes_y[i] += 5
        if (flakes_y[i]>500) {
            flakes_y[i] = -parseInt(Math.random() * 500)
        }
    }
    drawAllFlakes()
}
function stop() {
    if (pauseStatus) {
        setInterval(fall, 50)
        pauseStatus = false
    }
    else {
        clearInterval(fallTimer)
        pauseStatus = true
    }
}
generateCoords()
drawAllFlakes()

// hw1:add a status variable - done

