class Game{
  constructor(){

  }
 start(){

    bg = createSprite(200,300,400,800);
    bg.addImage(backgroundIMG);
    bg.scale = 2.5
  
    astroJet = createSprite(400,20,10,10);
    astroJet.addImage(astroJetIMG);
    astroJet.scale = 0.5;
  
    alien = createSprite(400,20,10,10);
    alien.addImage(alienIMG);
    alien.scale = 0.5;
  
    ufo = createSprite(400,20,10,10);
    ufo.addImage(ufoIMG);
    ufo.scale = 0.5;

    startButton = createSprite(200,400,50,10);
    startButton.addImage(startButtonIMG);
    startButton.scale = 0.3;

    out = createSprite(200,200,50,10);
    out.addImage(outIMG);
    out.scale = 0.7;

  
    astroJet.visible = false;
    alien.visible = false;
    ufo.visible = false;

      textSize(30);
      fill("gold");
      text("-Escape Galaxy-",90,100);

      textSize(10);
      text("level 1",185,300);
      text("instruction:\n");

      

 }

 play(){

    astroJet.visible = true;
    alien.visible = true;
    ufo.visible = true;
  
   
    if (bg.x < 0){
      bg.x = background.width/2;
    }
    if (alienGroup.isTouching(astroJet)){
        alienGroup.destroyEach();
        score = 0;
    }
    if (UFOGroup.isTouching(astroJet)){
      UFOGroup.destroyEach();
      score = 0;
  }


 }
}