//Variable For GameState
var gameState = "story";

//Variable For Background
var background1;
var backgroundImg;

//Variable For Logo
var logo, logoImg;

//Variable For Easy, Medium, Hard & Play Buttons
var button1,button1Img;
var button2, button2Img;
var button3,button3Img; 
var playButton,playButtonImg

//Variable For The Skip Button
var skip, skipImg;

//Variable For The Story
var text, textImg;
var text2,text2Img;
var text3,text3Img;
var text4,text4Img;
var text5,text5Img;
var text6,text6Img;
var text7,text7Img;
var text8,text8Img;
var text9,text9Img;

//Variable For Spaceship
var spaceShip,spaceShip2,spaceShip3,spaceShip4,spaceShip5
var spaceShipImg,spaceShip2Img,spaceShip3Img,spaceShip4Img,spaceShip5Img;


//Variable For Enemies
var enemy1,enemy2,enemy3,enemy4;
var enemy1Img,enemy2Img,enemy3Img,enemy4Img;

function preload(){
  
  //Loading The Background Image
  backgroundImg = loadImage("Images/background4.jpg");
  
  //Loading The Text Image For The Story
  textImg = loadImage("Images/text.png");
  text2Img = loadImage("Images/text2.png");
  text3Img = loadImage("Images/text3.png");
  text4Img = loadImage("Images/text4.png");
  text5Img = loadImage("Images/text5.png");
  text6Img = loadImage("Images/text6.png");
  text7Img = loadImage("Images/text7.png");
  text8Img = loadImage("Images/text8.png");
  text9Img = loadImage("Images/text9.png");
  
  //Loading The Logo Image 
  logoImg = loadImage("Images/logo.png");
  
  //Loading The Easy, Medium, Hard Buttons Images
  button1Img = loadImage("Images/button1.png");
  button2Img = loadImage("Images/button2.png");
  button3Img = loadImage("Images/button3.png");

  //Loading The Skip Button Image
  skipImg = loadImage("Images/skip.png");

  //Loading The Play Button Animation
  playButtonImg = loadAnimation("Images/playButton1.png","Images/playButton2.png");

  //Loading The Spaceship Images
  spaceShipImg = loadImage("Images/spaceship1.png");
  spaceShip2Img = loadImage("Images/spaceship2.png");
  spaceShip3Img = loadImage("Images/spaceship3.png");
  spaceShip4Img = loadImage("Images/spaceship4.png");
  spaceShip5Img = loadImage("Images/spaceship5.png");
  
    //Loading The Enemy Images
  enemy1Img = loadImage("Images/enemy1.png");
  enemy2Img = loadImage("Images/enemy2.png");
  enemy3Img = loadImage("Images/enemy3.png");
  enemy4Img = loadImage("Images/enemy4.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  
  edges = createEdgeSprites();

  //Creating The Background Sprite And The Image
  background1 = createSprite(width/2, height/2, width, height);
  background1.addImage(backgroundImg);
  background1.velocityY = -8;
  background1.scale = 5;

  //Creating The Logo Sprite And Adding The Image
  logo = createSprite(width/2, height/2 - 200, 400, 400);
  logo.addImage(logoImg);
  logo.scale = 2
  logo.visible = false;

  //Creating The Text Sprite From 1 - 9 And Adding The Images
  text = createSprite(width/2, height/2, 80, 80);
  text.addImage(textImg);
  text.scale = 4;
  text.visible = false;

  text2 = createSprite(width/2, height/2, 80, 80)
  text2.addImage(text2Img);
  text2.scale = 4
  text2.visible = false;

  text3 = createSprite(width/2, height/2, 80, 80)
  text3.addImage(text3Img);
  text3.scale = 4
  text3.visible = false;

  text4 = createSprite(width/2, height/2, 80, 80)
  text4.addImage(text4Img);
  text4.scale = 4
  text4.visible = false;

  text5 = createSprite(width/2, height/2, 80, 80)
  text5.addImage(text5Img);
  text5.scale = 4
  text5.visible = false;

  text6 = createSprite(width/2, height/2, 80, 80)
  text6.addImage(text6Img);
  text6.scale = 4
  text6.visible = false;

  text7 = createSprite(width/2, height/2, 80, 80)
  text7.addImage(text7Img);
  text7.scale = 4
  text7.visible = false;

  text8 = createSprite(width/2, height/2, 80, 80)
  text8.addImage(text8Img);
  text8.scale = 4
  text8.visible = false;

  text9 = createSprite(width/2, height/2 - 30, 10, 10)
  text9.addImage(text9Img)
  text9.scale = 2;
  text9.visible = false;
 
  //Creating The Play Button Sprite And Adding The Animation
  playButton = createSprite(width/2, height/2 + 230, 10,10);
  playButton.scale = 0.2;
  playButton.addAnimation("play",playButtonImg);
  playButton.visible = false;

  //Creating The Easy, Medium, Hard Button Sprite And Adding The Images
  button1 = createSprite(width/2 - 110, height/2 + 80, 30, 30)
  button1.addImage(button1Img);
  button1Img.scale = 2
  button1.visible = false

  button2 = createSprite(width/2, height/2 + 20, 30, 30)
  button2.addImage(button2Img);
  button2Img.scale = 2
  button2.visible = false;
    
  button3 = createSprite(width/2 + 110, height/2 + 80, 30, 30)
  button3.addImage(button3Img);
  button3Img.scale = 2
  button3.visible = false;
  
  //Creating The Skip Button Sprite And Adding The Image
  skip = createSprite(width/2 + 550, height/2 + 250, 30, 30)
  skip.addImage(skipImg);

  spaceShip = createSprite(width/2, height/2 + 190, 30, 30);
  spaceShip.addImage(spaceShipImg);
  spaceShip.scale = 0.8;
  spaceShip.setCollider("circle", 0, 0, 40);
  spaceShip.debug = false;

  //for(var i = 200; i < 800; i = i + 10){
    enemy1 = createSprite(width/2, height/2 - 110, 30, 30);
    enemy1.addImage(enemy1Img);
    enemy1.scale = 0.2;
    enemy1.setCollider("circle", 0, 0, 165);
    enemy1.debug = false;
    enemy1.velocityX = 4;
  //}

  enemy2 = createSprite(width/2, height/2 - 200, 30, 30);
  enemy2.addImage(enemy2Img);
  enemy2.scale = 0.7/2;
  enemy2.setCollider("circle", 0, 0, 93);
  enemy2.debug = false;
  enemy2.velocityX = 4;

  enemy3 = createSprite(width/2, height/2 - 20, 30, 30);
  enemy3.addImage(enemy3Img);
  enemy3.scale = 0.2;
  enemy3.setCollider("circle", 0, 0, 165);
  enemy3.debug = false;
  enemy3.velocityX = 4;

  //enemy4 = createSprite(800, 200);
  //enemy4.addImage(enemy4Img)

}

function draw() {
  //Making The Background To Come Back To Its Original Position
  //background(backgroundImg);
  if(background1.y < 0){
    background1.y = background1.width/2;
  }

  //Making The Text Appear And Disappear In Each FrameCount
  if(gameState === "story"){
    spaceShip.visible = false;
    enemy1.visible = false;
    enemy2.visible = false;
    enemy3.visible = false;
    
    if(frameCount < 40){
      text.visible = true;
      text.lifetime = 100;
    }
    if(frameCount > 165 && frameCount < 260){
      text2.visible = true;
     text2.lifetime = 100;
    }
    if(frameCount > 380 && frameCount < 500){
      text3.visible = true;
      text3.lifetime = 100;
    }
    if(frameCount > 620 && frameCount < 740){
      text4.visible = true;
       text4.lifetime = 100;
    }
    if(frameCount > 860 && frameCount < 980){
      text5.visible = true;
      text5.lifetime = 100;
    }
    if(frameCount > 1100 && frameCount < 1220){
      text6.visible = true;
      text6.lifetime = 100;
    }
    if(frameCount > 1340 && frameCount < 1460){
      text7.visible = true;
      text7.lifetime = 100;
    }
    if(frameCount > 1580 && frameCount < 1700){
      text8.visible = true;
      text8.lifetime = 100;
    }

    
   //Making The Texts To Go To "serve" State When The Story Is Completed
    if(text.lifetime===0&&text2.lifetime===0&& text3.lifetime===0&&text4.lifetime===0&&text5.lifetime===0&&text6.lifetime===0&&text7.lifetime===0&&text8.lifetime===0){
      gameState="serve";
    }
    
    //Making The "story" State Go To "serve" State, When The Skip Button Is Pressed
    if(mousePressedOver(skip)){
      text.lifetime  = 0;
      text2.lifetime = 0;
      text3.lifetime = 0;
      text4.lifetime = 0;
      text5.lifetime = 0;
      text6.lifetime = 0;
      text7.lifetime = 0;
      text8.lifetime = 0;
      gameState = "serve";
    }
  }  
   
  //Making The "serve" State
  if(gameState === "serve"){
    skip.visible = false;
    spaceShip.visible = false;
    enemy1.visible = false;
    enemy2.visible = false;
    enemy3.visible = false;
    button1.visible = true;
    button2.visible = true;
    button3.visible = true;
    logo.visible = true;
    
    //Making The "serve" State Go To "wait" State, When Easy, Medium, Hard Buttons When Is Pressed
  if(mousePressedOver(button1)|| mousePressedOver(button2)|| mousePressedOver(button3)){
    gameState = "wait";
  }
  }

  //Making The "wait" State
  if(gameState === "wait"){
    button1.visible = false;
    button2.visible = false;
    button3.visible = false;
    text9.visible = true;
    playButton.visible = true;
    enemy1.visible = false;
    enemy2.visible = false;
    enemy3.visible = false;
    logo.visible = true;
    skip.visible = false;
    logo.visible = false;
    spaceShip.visible = false;

   // Making The "serve" State Go To "play" State, When The Play Button Is Pressed
    if(mousePressedOver(playButton)){
     gameState = "play";
    }
  }

  //Making The "play" State
  if(gameState === "play"){
    text9.visible = false;
    playButton.visible = false;
    //background.velocityY = 0
    spaceShip.visible = true;
    enemy1.visible = true;
    enemy2.visible = true;
    enemy3.visible = true;
    spaceShip.velocityX = 0;
    spaceShip.velocityY = 0;
    background(backgroundImg);
    //enemy1.velocityX = 0;


    if(keyDown("LEFT_ARROW")){
      spaceShip.addImage(spaceShipImg);
      spaceShip.velocityX = -3;
    }
    if(keyDown("RIGHT_ARROW")){
      spaceShip.addImage(spaceShipImg);
      spaceShip.velocityX = 3;
    }
    if(keyDown("UP_ARROW")){
      spaceShip.addImage(spaceShipImg);
      spaceShip.velocityY = -3;
    }
    if(keyDown("DOWN_ARROW")){
      spaceShip.addImage(spaceShipImg);
      spaceShip.velocityY = 3;
    }
    if(keyDown("UP_ARROW" && "LEFT_ARROW")){
      spaceShip.addImage(spaceShip2Img)
      spaceShip.velocityX = -2;
      spaceShip.velocityY = 3;
    }
    if(keyDown("DOWN_ARROW" && "LEFT_ARROW")){
      spaceShip.addImage(spaceShip5Img)
      spaceShip.velocityX = -2;
      spaceShip.velocityY = 3;
    }
    spaceShip.collide(edges[1]);
    spaceShip.collide(edges[0]);
    
    enemy1.bounceOff(edges[1]);
    enemy1.bounceOff(edges[0]);

    enemy2.bounceOff(edges[1]);
    enemy2.bounceOff(edges[0]);

    enemy3.bounceOff(edges[1]);
    enemy3.bounceOff(edges[0]);
  }
  drawSprites();
}