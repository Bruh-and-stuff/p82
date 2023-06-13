canvases = document.getElementById("scanvas")
ctx = canvases.getContext("2d")

var lastposX, lastposY
var posX, posY
var mE = "none"

var colour = "black"
var WoL = 2
var radius = 1


canvases.addEventListener("mousedown", mousedown)

function mousedown(a){
    mE = "mousedown"

    colour = document.getElementById("colour_input").value
    WoL = document.getElementById("number_input").value
    radius = document.getElementById("radius").value
}

canvases.addEventListener("mousemove", mousemove)

function mousemove(a){
    posX = a.clientX - canvases.offsetLeft
    posY = a.clientY - canvases.offsetTop
    
    if (mE == "mousedown"){
        ctx.beginPath()
        ctx.strokeStyle = colour
        ctx.lineWidth = WoL
        ctx.arc(posX, posY, radius, 0, 2*Math.PI)
        
        ctx.stroke()
    }
    
    lastposX = posX
    lastposY = posY
}

canvases.addEventListener("mouseup", mouseup)

function mouseup(a){
    mE = "mouseup"
}

canvases.addEventListener("mouseleave", mouseleave)

function mouseleave(a){
    mE = "mouseleft"
}

function clear(){
    ctx.clearRect(0, 0, 1300, 950)
}