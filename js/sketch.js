var canvas;
var gameState=0;
var form,game;
var astroJet,astroJetIMG;
var alien,ufo,boss;
var alienGroup,UFOGroup;
var alienIMG,ufoIMG,bossIMG;
var bg,backgroundIMG;
var out,outIMG;
var startButton,startButtonIMG;
var score = 0;

function preload(){
  backgroundIMG = loadImage("images/galex.jpg");
  alienIMG = loadImage("images/alien.png");
  astroJetIMG = loadImage("images/JET.png");
  ufoIMG = loadImage("images/UFO.png");
  startButtonIMG = loadImage("images/start.png");
  outIMG = loadImage("images/outlook.png")

}

function setup() {
  createCanvas(400,625);
    game = new Game();
}

function draw() {
      background(0);
      drawSprites();

      console.log(gameState);

      if(gameState === 0){
        game.start();
      }
      
      if(gameState === 1){
        game.play();
      }
    
}
function alienSpawn() {
    if(frameCount % 50 === 0){
      var alien = createSprite(0,Math.round(random(20, 370)), 10, 10);
      alien.addImage(alienIMG);
      alien.velocityY = -(9+(score/4));
      alien.lifetime = 400;
      alien.scale = 0.5; 
      alienGroup.add(alien);
    }
    text("score :"+score,300,30);
}
function UFOSpawn() {
  if(frameCount % 50 === 0){
    var ufo = createSprite(0,Math.round(random(20, 370)), 10, 10);
    ufo.addImage(ufoIMG);
    ufo.velocityY = -(9+(score/4));
    ufo.lifetime = 400;
    ufo.scale = 0.5; 
    UFOGroup.add(ufo);
  }
  text("score :"+score,300,30);
}
