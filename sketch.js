

    function preload()
    {
      froggyImage = loadImage("frog.gif")
      browntoadImage = loadImage("browntoad.png")
      yellowtoadImage = loadImage("yellowtoad.png")
      greentoadImage = loadImage("greentoad.png")

      greenbugImage = loadImage("greenbug.gif")
      redbugImage = loadImage("redbug.gif")
      purplebugImage = loadImage("purplebug.gif")

      backgroundImage = loadImage("grass.jpeg")
    }

    function setup()
    {
      createCanvas(windowWidth,windowHeight);
      froggy = createSprite(60, windowHeight-100, 50, 50);
      froggy.scale = .3
      froggy.addImage(froggyImage)

      score = 0;
    }

function draw()
 {
  text("Score: : "+ score, 750,50);
  background(backgroundImage);  

  if(keyDown("RIGHT_ARROW"))
  {
    froggy.position.x += 8
  }
  if(keyDown("LEFT_ARROW"))
  {
    froggy.position.x -= 8
  }
  if(keyDown("UP_ARROW"))
  {
    froggy.position.y -= 8
  }
  if(keyDown("DOWN_ARROW"))
  {
    froggy.position.y += 8
  }

  if(froggy.isTouching(greenbugs || redbugs || purplebugs))
  {
    score = score +1;
  }

  //enemy()
  greentoads()
  yellowtoads()
  browntoads()
  drawSprites();

  //rewards()
  greenbugs()
  redbugs()
  purplebugs()
}

  //enemy
 function greentoads()
 {
  if (frameCount % 200 === 0) 
  {
    f = createSprite(windowWidth-50,800,40,10);
    f.y = Math.round(random(30,680));
    f.addImage(greentoadImage);
    f.scale = 0.15;
    f.velocityX = -3;
 }
}
function yellowtoads()
 {
  if (frameCount % 120 === 0) 
  {
    f1 = createSprite(windowWidth-50,800,40,10);
    f1.y = Math.round(random(30,680));
    f1.addImage(yellowtoadImage);
    f1.scale = 0.15;
    f1.velocityX = -3;
 }
}
function browntoads()
 {
  if (frameCount % 230 === 0) 
  {
    f3 = createSprite(windowWidth-50,800,40,10);
    f3.y = Math.round(random(30,680));
    f3.addImage(browntoadImage);
    f3.scale = 0.16;
    f3.velocityX = -3;
 }
}

//bugs
function greenbugs()
 {
  if (frameCount % 200 === 0) 
  {
    b = createSprite(windowWidth-50,800,40,10);
    b.y = Math.round(random(30,680));
    b.addImage(greenbugImage);
    b.scale = 0.15;
    b.velocityX = -3;
 }
}
function redbugs()
 {
  if (frameCount % 400 === 0) 
  {
    b1 = createSprite(windowWidth-50,800,40,10);
    b1.y = Math.round(random(30,680));
    b1.addImage(redbugImage);
    b1.scale = 0.15;
    b1.velocityX = -3;
 }
}
function purplebugs()
 {
  if (frameCount % 300 === 0) 
  {
    b3 = createSprite(windowWidth-50,800,40,10);
    b3.y = Math.round(random(30,680));
    b3.addImage(purplebugImage);
    b3.scale = 0.16;
    b3.velocityX = -3;
 }
}