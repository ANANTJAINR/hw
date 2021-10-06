var bg,sleep,brush,gym,eat,drink,move;
var astronaut;

function preload(){
sleep = loadImage("images/sleep.png")
//brush = loadAnimation("images/brush.png")
//gym = loadAnimation("gym/iss.png")
//eat = loadAnimation("eat/iss.png")
//drink=loadAnimation("drink/iss.png")
//move=loadAnimation("move/iss.png")
//bg = loadImage("images/iss.png")

}
function setup() {
  
  createCanvas(400, 400);
  astronaut = createSprite (300,230)
  astronaut.addImage("sleeping",sleep)
  astronaut.scale= 0.1
}
/*
 instructions:
 upArrow=brushing
downArrow=gymming
leftArrow=eating
rightArrow=bathing
m key=moving

if{


}
*/
function draw() {
  background(220);



  drawSprites()
}