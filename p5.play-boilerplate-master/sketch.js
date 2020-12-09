var fixed,moving;


function setup() {
  createCanvas(800,400);
  fixed = createSprite(0, 200, 50, 100);
  moving = createSprite(800,200, 50, 100);
  fixed.shapeColor="green";
  moving.shapeColor="green";
  fixed.velocityX  = +4;
  moving.velocityX = -4;
}

function draw() {
  background(0);  

  if(moving.x - fixed.x < fixed.width/2 + moving.width/2 && fixed.x - moving.x < fixed.width/2 + moving.width/2
    && moving.y - fixed.y < fixed.height/2 + moving.height/2 && fixed.y - moving.y < fixed.height/2 + moving.height/2){
    fixed.velocityX = fixed.velocityX*(-1);
    moving.velocityX = moving.velocityX*(-1);
  } 
  else{
    fixed.shapeColor="green";
    moving.shapeColor="green";
  }
  drawSprites();
}