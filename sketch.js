var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(800,800);
  fixedRect = createSprite(400, 400, 20, 50);
  fixedRect.shapeColor="white";
  movingRect = createSprite(500,200,50,20);
  movingRect.shapeColor="white";

  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor="white";
  gameObject2 = createSprite(200,100,50,50);
  gameObject2.shapeColor="white";
  gameObject3 = createSprite(300,100,50,50);
  gameObject3.shapeColor="white";
  gameObject4 = createSprite(400,100,50,50);
  gameObject4.shapeColor="white";

  
}

function draw() {
  background(0);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  //console.log(movingRect.x-fixedRect.x);
  //console.log(movingRect.width/2+fixedRect.width/2);



  if(isTouching(gameObject1,movingRect)){

gameObject1.shapeColor = "blue"
movingRect.shapeColor = "blue"


  }
  else{

    gameObject1.shapeColor = "white"
    movingRect.shapeColor = "white"


}

  

  drawSprites();
}
 
function isTouching(obj1,obj2){

  if (obj1.x-obj2.x<obj1.width/2+obj2.width/2
    && obj2.x-obj1.x< obj2.width/2+obj1.width/2 
    && obj1.y-obj2.y<obj1.height/2+obj2.height/2
    && obj2.y-obj1.y< obj2.height/2+obj1.height/2)
    {

return true;

  }
  else{
    return false;
  }
  
}

