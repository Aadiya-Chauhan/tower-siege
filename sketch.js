var ground;
var hexogon, hexogonImage;
var chain;
var E1, E2, E3;
var b1, b2, b3, b4, b5, b6, b7, b8, b10;

function preload() {
    hexogonImage = loadImage("polygon.png")
}

function setup() {
    createCanvas(1150, 500);

    ground = createSprite(100, 350, 100000, 20);

    hexogon = createSprite(50, 310, 40, 40);
    hexogon.velocityY = 5;
    hexogon.addImage(hexogonImage);
    hexogon.scale = 0.1;

    E1 = createSprite(300, 0, 10000000, 1);
    E2 = createSprite(0, 300, 1, 10000000);
    E3 = createSprite(1150, 300, 1, 10000000);

    b1 = createSprite(1110, 320, 40, 40);
    b1.velocityY = 5;
    b2 = createSprite(1070, 320, 40, 40);
    b2.velocityY = 5;
    b3 = createSprite(1030, 320, 40, 40);
    b3.velocityY = 5;
    b4 = createSprite(990, 320, 40, 40);
    b4.velocityY = 5;
    b5 = createSprite(1010, 280, 40, 40);
    b5.velocityY = 5;
    b6 = createSprite(1050, 280, 40, 40);
    b6.velocityY = 5;
    b7 = createSprite(1090, 280, 40, 40);
    b7.velocityY = 5;
    b8 = createSprite(1070, 240, 40, 40);
    b8.velocityY = 5;
    b9 = createSprite(1030, 240, 40, 40);
    b9.velocityY = 5;
    b10 = createSprite(1050, 200, 40, 40);
    b10.velocityY = 5;

}

function draw() {
    background("black");

    hexogon.collide(ground);
    b1.collide(ground);
    b2.collide(ground);
    b3.collide(ground);
    b4.collide(ground);
    b5.collide(ground);
    b6.collide(ground);
    b7.collide(ground);
    b8.collide(ground);
    b9.collide(ground);
    b10.collide(ground);

    b1.bounce(b2);
    b1.bounce(b3);
    b1.bounce(b4);
    b1.bounce(b5);
    b1.bounce(b6);
    b1.bounce(b7);
    b1.bounce(b8);
    b1.bounce(b9);
    b1.bounce(b10);
    b2.bounce(b3);
    b2.bounce(b4);
    b2.bounce(b5);
    b2.bounce(b6);
    b2.bounce(b7);
    b2.bounce(b8);
    b2.bounce(b9);
    b2.bounce(b10);
    b3.bounce(b4);
    b3.bounce(b5);
    b3.bounce(b6);
    b3.bounce(b7);
    b3.bounce(b8);
    b3.bounce(b9);
    b3.bounce(b10);
    b4.bounce(b5);
    b4.bounce(b6);
    b4.bounce(b7);
    b4.bounce(b8);
    b4.bounce(b9);
    b4.bounce(b10);
    b5.bounce(b6);
    b5.bounce(b7);
    b5.bounce(b8);
    b5.bounce(b9);
    b5.bounce(b10);
    b6.bounce(b7);
    b6.bounce(b8);
    b6.bounce(b9);
    b6.bounce(b10);
    b7.bounce(b8);
    b7.bounce(b9);
    b7.bounce(b10);
    b8.bounce(b9);
    b8.bounce(b10);
    b10.bounce(b9);
    
    hexogon.bounce(b1);
    hexogon.bounce(b2);
    hexogon.bounce(b3);
    hexogon.bounce(b4);
    hexogon.bounce(b5);
    hexogon.bounce(b6);
    hexogon.bounce(b7);
    hexogon.bounce(b8);
    hexogon.bounce(b9);
    hexogon.bounce(b10);

    hexogon.bounceOff(E1);
    hexogon.bounceOff(E2);
    hexogon.bounceOff(E3);
    
    drawSprites();
}

function keyPressed() {
    if(keyCode === 38) {
        hexogon.velocityY = -5;
        hexogon.velocityX = 5;
    }

    if(keyCode === 40) {
        hexogon.velocityY = 5;
    }

    if (keyCode === 37) {
        hexogon.velocityY = 5;
        hexogon.velocityX = -5;
    }

    if (keyCode === 39) {
        hexogon.velocityY = 0;
        hexogon.velocityX = 0;
    }
}
