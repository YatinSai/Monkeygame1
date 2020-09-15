

var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;
var rand;
var lifetime=0;
var PLAY=0;
var END=1;
var gamestate;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

 
}



function setup() {
  createCanvas(400,400)
  
  monkey=createSprite(50,320,10,10)
  monkey.addAnimation("monkey running",monkey_running)
  monkey.scale=0.1
  
  ground=createSprite(200,355,800,10)
  ground.velocityX=-2
  
  obstacleGroup=new Group()
  FoodGroup=new Group()
  

  
  
  
  
  
  


  
}


function draw() {
  background("purple")
  
  obs()
  fruit()
  
  gamestate=PLAY
  
  if(gamestate===PLAY){
    monkey.collide(ground)
  
  if(keyDown("SPACE")&&(monkey.y>200)){
     monkey.velocityY=-12

     }
  
    monkey.velocityY=monkey.velocityY+1
    
    if(FoodGroup.isTouching(monkey)){
     lifetime=lifetime+5
     FoodGroup.destroyEach()
    }
    textSize(40)
    text("LifeTime:"+lifetime,100,50)
    
  }
  if(ground.x<0){
   ground.x=200
  }


  
    

    
  
  
    if(obstacleGroup.isTouching(monkey)){
      gamestate=END
    }
    
    
    if(gamestate===END){
     monkey.destroy()
     FoodGroup.destroyEach()
     obstacleGroup.destroyEach()
     FoodGroup.setVelocityXEach(0)
     obstacleGroup.setVelocityEach(0)
     ground.velocity=0
     textSize(50)
     
     background("red")
      text("GameOver",100,200)
    }


  
  drawSprites()

}

function obs(){
 if(frameCount%100===0){
 obstacle=createSprite(440,320,10,10)
 obstacle.addImage(obstacleImage)
 obstacle.scale=0.16
 obstacle.velocityX=-7
 obstacle.lifetime=60
 obstacleGroup.add(obstacle)
  
 }
}

function fruit(){
if(frameCount%80===0){
var rand=random(200,250)
banana=createSprite(400,rand,10,10)
banana.addImage(bananaImage)
banana.scale=.09
banana.velocityX=-7
banana.lifetime=60
FoodGroup.add(banana)
  
}
}

  





