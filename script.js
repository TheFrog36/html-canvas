const canvas = document.getElementById('canvas')
const canvasCTX = canvas.getContext('2d')
const rectArray = []
const colorString =  'rgba(#RED, #GREEN, #BLUE, #OPACITY)'
const maxRectWidth = 2
const maxRectHeight = 2
for(let i = 0; i < 10000; i++){
    const rectWidth = Math.random() * maxRectWidth
    const rectHeight = Math.random() * maxRectHeight
    const x = Math.random() * (800 - maxRectWidth)
    const y = Math.random() * (600 - maxRectHeight)
    const red = Math.random() * 255 
    const green = Math.random() * 255
    const blue = Math.random() * 255
    const opacity = Math.random() * 0.1
    const velX = Math.random () * 50 - 25
    const velY = Math.random () * 50 -25
    const randomColor = colorString
        .replace('#RED', red)
        .replace('#GREEN', green)
        .replace('#BLUE', blue)
        .replace('#OPACITY', opacity)
    const rect = {
        x: x,
        y: y,
        width: rectWidth,
        height: rectHeight,
        color: randomColor,
        velX: velX,
        velY: velY
    }
    rectArray.push(rect)
}
let index = 0


// setInterval(() => {
//     canvasCTX.clearRect(0,0,800,600) 
//     for(const rect of rectArray){
//         canvasCTX.fillStyle = rect.color
//         canvasCTX.fillRect(
//             rect.x,
//             rect.y,
//             rect.width,
//             rect.height)
//         if(rect.x < 0 || rect.x +  rect.width > 800) rect.velX *= -1
//         if(rect.y < 0 || rect.y +  rect.height> 600) rect.velY *= -1
//         rect.x += rect.velX
//         rect.y += rect.velY
//         // rect.x += Math.random() * 20 -10
//         // rect.y += Math.random() * 20 -10
        
//         // rect.width += Math.random() * 2 -1
//         // rect.height += Math.random() * 2 -1
//     }
// }, 20);

function update(){
    // canvasCTX.clearRect(0,0,800,600) 
    for(const rect of rectArray){
        canvasCTX.fillStyle = rect.color
        canvasCTX.fillRect(
            rect.x,
            rect.y,
            rect.width,
            rect.height)
        if(rect.x < 0 || rect.x +  rect.width > 800) rect.velX *= -1
        if(rect.y < 0 || rect.y +  rect.height> 600) rect.velY *= -1
        rect.x += rect.velX
        rect.y += rect.velY
        // rect.x += Math.random() * 20 -10
        // rect.y += Math.random() * 20 -10
        
        // rect.width += Math.random() * 2 -1
        // rect.height += Math.random() * 2 -1
    }
    requestAnimationFrame(update)
}
requestAnimationFrame(update)
