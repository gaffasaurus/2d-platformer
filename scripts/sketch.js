let canvas;
let playerSprite;
const gravity = 0.5;

function setup() {
  canvas = createCanvas(windowWidth - 50, windowHeight - 50);
  centerCanvas();
  playerSprite = createSprite(width / 2 - 25, height - 100, 50, 50);
}


function centerCanvas() {
  const x = (windowWidth - width) / 2;
  const y = (windowHeight - height) / 2;
  canvas.position(x, y)
}


function draw() {
  background(255, 250, 230);
  line(0, height - 100, width, height - 100);
  textFont('Avenir');
  textAlign(CENTER, CENTER);
  textSize(33);
  text("Arrow keys to move, Z to jump", width/2, height/2 - 200);
  drawSprites();
  // checkEdges();
  playerMove();
  applyGravity();
  playerSprite.position.x = constrain(playerSprite.position.x, playerSprite.width/2, width-playerSprite.width/2)
  playerSprite.position.y = constrain(playerSprite.position.y, playerSprite.height/2, height-playerSprite.height/2-100)
}

function playerMove() {
  // if (keyIsDown(UP_ARROW)) {
  //   playerSprite.position.y -= 5;
  // }
  if (keyIsDown(LEFT_ARROW)) {
    playerSprite.position.x -= 5;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    playerSprite.position.x += 5;
  }
  // if (keyIsDown(DOWN_ARROW)) {
  //   playerSprite.position.y += 5;
  // }
 }
 //
 // function checkEdges() {
 //   const halfHeight = playerSprite.height / 2;
 //   const halfWidth = playerSprite.width / 2;
 //   if (playerSprite.position.y - halfHeight <= 0) {
 //     playerSprite.position.y = halfHeight;
 //   }
 //   if (playerSprite.position.y + halfHeight >= height - 100) {
 //     playerSprite.position.y = height - 100;
 //     playerSprite.velocity.y = 0;
 //   }
 //   if (playerSprite.position.x - halfWidth <= 0) {
 //     playerSprite.position.x = halfWidth;
 //   }
 //   if (playerSprite.position.x + halfWidth >= width) {
 //     playerSprite.position.x = width - halfWidth;
 //   }
 // }

 function keyPressed() {
   if (keyCode == 90) {
     if (playerSprite.position.y < height-100-playerSprite.height/2) {
       return;
     }
     randomColor();
     playerSprite.velocity.y = -10;
   }
 }

 function applyGravity() {
     playerSprite.velocity.y += gravity;
     if (playerSprite.position.y >= height - 100 - playerSprite.height/2) {
       playerSprite.velocity.y = 0;
     }
 }

 function randomColor() {
   let r = random(255);
   let g = random (100, 200);
   let b = random(100);
   playerSprite.shapeColor = color(r, g, b);
 }

// function mousePressed() {
//   console.log(canvas.position().x, mouseX);
//   if (between(0, canvas.position().x + width, mouseX) && between(0, canvas.position().y + height, mouseY)) {
//     const s = createSprite(mouseX, mouseY, 30, 30);
//     s.velocity.x = 3;
//     s.velocity.y = 0;
//   }
// }

function windowResized() {
  createCanvas(windowWidth - 50, windowHeight - 50);
  centerCanvas();
}
