//Create variables here
var dog, happyDog, dogI;
var database;
var foodS, foodStock;

function preload(){
dogI = loadImage("dogImg1.png");
happyDog = loadImage("dogImg.png");
}

function setup() {
	createCanvas(500, 500);
  
  dog = createSprite(250, 250, 10, 10);
  dog.addImage(dogI);


  foodStock = database.ref('FOOD');
  foodStock.on("value", readStock);
}


function draw() {  
  background(46, 139, 87);

  if (keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }

  text("NOTE : Press Up arrow Key to feed BTS's V's pet dog Yeontan", 250, 100);
  textSize(25);
  fill(blue);
  stroke(5);

  drawSprites();
  //add styles here

 text("Food Stock", 250, 190);
 textSize(20);
 fill(green);
 stroke(10);
}

function readStock(data){
 foodS = data.val();
}

function writeStock(x){
 database.ref('/').update({
   Food : x
 })
}



