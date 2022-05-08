let pg;
let myFont;
function preload() {
  myFont = loadFont('spacegrotesk-medium.otf');
}

const waveInput = document.querySelector("input.wave")
const xInput = document.querySelector("input.disX")
const yInput = document.querySelector("input.disY")

const fline = document.querySelector("input.fline")
const sline = document.querySelector("input.sline")

 function createCopy(){
    pg = createGraphics(1200,600)
  const text = fline.value + "\n" + sline.value
  
  
  pg.fill("#fff")
  pg.textSize(200)
  pg.textAlign(CENTER, CENTER)
  pg.textLeading(200)
  pg.text(text, 600,300)
    
  }

function setup() {
  createCanvas(1200, 600);
  createCopy()
 
}

function draw() {
  background("#000");
  
  const tileSize = 10;
  
  for(let x=0;x<120;x++){
    for(let y=0;y<60;y++){
      
      wave = waveInput.value
      disX = x * xInput.value
      disY = y * yInput.value
      
      const distortX = sin(frameCount * wave + disX +disY) * 10
      const distortY = sin(frameCount * wave + disX +disY) * 5
      
       const sx = x * tileSize + distortX
       const sy = y * tileSize + distortY
       const sw = tileSize 
       const sh = tileSize
       
       const dx = x * tileSize 
       const dy = y * tileSize 
       const dw = tileSize 
       const dh = tileSize
       
       image(pg, dx,dy,dw,dh,sx,sy,sw,sh)
      
    }
    
  }
  
 fline.addEventListener("input", function(){
   createCopy()
   
 })
   sline.addEventListener("input", function(){
   createCopy()
   
 })
  
  
}