var sea,ship;
var seaImg,shipImg;

function preload(){
  ship1 = loadAnimation("ship-1.png","ship-2.png");
  sea1 = loadAnimation("sea.png")
}

function setup(){
  createCanvas(600,500);
  
  // Moving background
  sea=createSprite(600,300);
  sea.addAnimation("runing",sea1);
  sea.scale=0.5;
sea.velocityX=-1
  
  ship = createSprite(50,200,20,50);
  ship.addAnimation("runing",ship1);
  
  
  ship.scale =0.25;
  ship.x=90;
  ship.y=300;
}


function draw() {
  background("blue");
  

if(sea.x< 0){
sea.x=sea.width/2;
}
   
drawSprites();
}
