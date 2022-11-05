var player
var playertwo
var ball
var edge
var score1, score2
var estado = 0

function setup() {
createCanvas(500,500)
player = createSprite(12,250,20,100)
playertwo = createSprite(488,250,20,100)
ball = createSprite(250,250,20,20)
ball.shapeColor = 'cyan'
player.shapeColor = 'blue'
playertwo.shapeColor = 'red'
ball.velocityX = -5
ball.velocityY = 6
edge = createEdgeSprites()
score1 = 0
score2 = 0
}
function draw() {
background(0)
if (estado == 1){

    ball.bounceOff(edge)
    ball.bounceOff(player)
    ball.bounceOff(playertwo)
    if (keyDown('w')){
        player.velocityY = -10
    }
    if (keyDown('s')){
        player.velocityY = 10
    }
    if (keyDown(UP_ARROW)){
        playertwo.velocityY = -10
    }
    if (keyDown(DOWN_ARROW)){
        playertwo.velocityY = 10
    }
    player.collide(edge)
    playertwo.collide(edge)
    
    if(ball.x < 15){
        score2 += 1
        ball.x = 250 
        ball.y = 250
        estado = 0
        player.velocityY = 0
        playertwo.velocityY = 0
    }
    if(ball.x > 485){
        score1 += 1
        ball.x = 250 
        ball.y = 250
        estado = 0
        player.velocityY = 0
        playertwo.velocityY = 0
    }

}else{
    textSize(15)
    text('press SPACE to play',160, 300)
    ball.velocityY = 0
        ball.velocityX = 0
        if(keyDown('space')){
restart()
        }
}

textSize(20)
text('player:  ' + score1, 100, 20)
text('playertwo:  ' + score2, 300, 20)






drawSprites()

}
function restart(){
  estado = 1 
  player.x = 12
  player.y = 250
  playertwo.x = 488
  playertwo.y = 250
  player.velocityY = 0
  playertwo.velocityY = 0
  ball.velocityY = -5
  ball.velocityX = 6 
}