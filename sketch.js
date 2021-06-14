var canvas,background
var gameState = 0;
var playerCount,database;
var all_players

function setup (){
    canvas = createCanvas(400,400);
    database =firebase.database();
    game1 = new game()
    game1.getState()
    game1.start()
}

function draw (){
    background("grey")
    if (playerCount === 4){
        game1.update()
    }
    if(gameState === 1){
        clear()
        game1.play()
    }
}