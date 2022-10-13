var bg, bgImg;
var transparentGround;
var obstacleGroup, stone, stoneImg;
var rewardsGroup, coin, coinImg;
var mario, mariofallImg, marioImg;
var titleImg, marioTitleImg, startImg;
var gameOverImg, restartImg;
var coinSound, scoreSound, gameoverSound;
var score = 0;

function preload(){
bgImg = loadImage("Images/Background.jpg");
stoneImg = loadImage("Images/Stone2.png");
coinImg = loadImage("Images/Coin.png");
mariofallImg = loadImage("Images/MarioFall.png");
titleImg = loadImage("Images/Title.png");
marioTitleImg = loadImage("Images/MarioTitle.png");
startImg = loadImage("Images/startbutton.png");
gameOverImg = loadImage("Images/GameOver.png");
restartImg = loadImage("Images/restart.png");

coinSound = loadSound("Sounds/collectcoin_sound.wav");
scoreSound = loadSOund("Sounds/score_sound.mp3");
gameoverSound = loadSound("Sounds/gameover_sound.wav");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  bg = createSprite(displayWidth/2-72,displayHeight/2-45)
  bg.addImage("bg",bgImg)
  bg.scale = 2.1

  transparentGround = createSprite(50,height/2+250,width,20)

  mario = createSprite(70,displayHeight/2+45)
  //mario.collide("transparentGround")
  mario.addImage("marioTitle", marioTitleImg)
  mario.scale = 0.3
  
  obstacleGroup = createGroup()

  rewardsGroup = createGroup()
}

function draw() {
  background(255,255,255);

  fill("black")
  text("score:" +score,width-100,100)
  //text.size(100)
  
  if(keyIsDown(UP_ARROW)){
    mario.velocityY = -3
  }

  mario.velocityY = mario.velocityY+0.2

  if(rewardsGroup.isTouching(mario)){
    score = score+1
    coinSound.play();
  }

  Obstacles();
  Reward();
  
  drawSprites();
}

function Obstacles(){
  if(frameCount%150 ===0){
    var stone = createSprite(random(500,2000), 475,20,20)
    stone.addImage("stone", stoneImg);
    stone.scale = 0.3
    stone.velocityX = -2
    obstacleGroup.add(stone)
    stone.lifetime = 550;
  }
}

function Reward(){
  if(frameCount%100 === 0){
    var coin = createSprite(random(450,2000), random(50,100),20,20)
    coin.addImage("coin",coinImg);
    coin.scale = 0.1
    coin.velocityX = -2
    rewardsGroup.add(coin)
    coin.lifetime = 500;
  }
}