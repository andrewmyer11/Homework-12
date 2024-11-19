// x and y for my charater
var charaterX = 100;
var charaterY = 100;
//define the key codes for each letter 
 w = 87;
 s = 83;
 a = 65;
 d = 68;

// x and y for a shape 
 shapeX = 30;
 shapeY = 50;
 shapeXSpeed;
 shapeYSpeed;

// create a shape when the mouse is clicked
 mouseShapeX1;
 mouseShapeY1;
 setup(15)
{
    createCanvas(500, 600);
    // get a random speed when the it first starts
    shapeXSpeed = Math.floor(Math.random) * (Math.floor(Math.random() * 5)) + 1;
    shapeYSpeed = Math.floor(Math.random) * (Math.floor(Math.random() * 5)) + 1;
    createCharacter(200,350);
}
function draw()
{
    background(120,45,78);
    stroke(5);
    fill(10);
   

    // exit message
    textSize(16);
    text("EXIT", width-50, height-50)

    //createCharater(200,350);
    drawCharacter(200,350);
    // characterMovement();


    // potential enemy
    fill(13,145,14);
    // draw the shape 
    circle(shapeX, shapeY, 10);

    // get a random speed when the it first starts
    shapeXSpeed = Math.floor(Math.random) * (Math.floor(Math.random() * 5)) + 1;
    shapeYSpeed = Math.floor(Math.random) * (Math.floor(Math.random() * 5)) + 1;

    // move the shape
    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;
    // check to see if the shape has gone out of bounds
    if(shapeX > width)
{
    shapeX = 5;
}
if(shapeX < 5)
{
    shapeX = width;
}
if(shapeY > height)
{
    shapeY = 0;
}
if(shapeY < 0)
{
    shapeY = height; 
}

// check to see if the character has left the exit 
if(characterX > width && character > width-50)
{
    fill(10);
    stroke(15);
    textSize(26);
    text("You Win!", width/2-50, height/2-50);
}

    // create the shape based on the mouse click
    fill(120,130,140);
    circle(mouseShapeX, mouseShapeY, 25);
}

function chraacterMovement()
    {
    // handle the keys
    if(keyIsDown(w))
    {
    charaterY -=10;
    }
    if(keyIsDown(s))
    {
    characterY +=10;
    }
    if(keyIsDown(a))
{
    characterX -=10;
    console.log("movement: " + characterX);
    }
    if(keyIsDown(d))
    {
        charaterX +=10;
    }
}
function createCharacter(x,y)
{
    charaterX = x;
    charaterY = y;
    console.log(charaterX);
    //character

    //circle(characterX, characterY,25);
}

function drawCharacter()
{
    fill(23,40,123);
    circle(charaterX, charaterY,25);
}
function createBorders(thickness)
{
    // top border
    rect(0,0,width,thickness);
    // left border 
    rect(0,0, thickness,height);
    // bottom border 
    rect(0, height-thickness,width, thickness);
    // right upper border
    rect(width-thickness,0,thickness,height-50);
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
} 
/*
functionkeyPressed() {
    if (keyCode === LEFT_ARROW) {
        characterX -= 10;
    }
    else if (keyCode === RIGHT_ARROW) {
        characterX += 10;
    }
    else if (keyCode === UP_ARROW) {
        characterY -= 10;
    }
    else if (keyCode === DOWN_ARROW) {
        character += 10;
    }

}
*/