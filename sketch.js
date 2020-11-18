
var database;
var gameState=0;
var form,game,player,playerCount;
var allPlayer;
function setup(){
    database=firebase.database();
    createCanvas(500,500);
    game=new Game();
    game.getstate();
    game.start();

}

function draw(){

    //background("white");
    if(playerCount==4){
        game.update(1);
    }
    if(gameState==1){
        clear ();
        game.play();
    }
}

