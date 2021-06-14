class game {
    constructor(){

    }
    getState(){
        var gameStateref = database.ref("gameState")
        gameStateref.on("value",function(data){gameState=data.val();}) 
    }
    update (state){
        database.ref("/").update({gamesState:state})
    }
    start (){
        if(gameState === 0){
            player1 = new player()
            player1.getCount()
            form1 = new form()
            form1.display();
        }
    }

    play(){
        form1.hide()
        textSize(30);
        text("Game Start",120,100)
        player1.getPlayerInfo()
        if (all_players !== undefined){
            var displayPosition = 130;
            displayPosition+=20
            for (var plr in all_players){
                if (plr ==="player"+player1.index){
                    fill("red")
                }else{
                    fill("black")
                }
            }
            textSize(15)
            text(all_players[plr].name+":"+all_players[plr].distance,120,displayPosition)
        }
    }

    if (keyIsDown(UP_ARROW) && player1.index !== null){
        player1.distance+=50;
        player1.update();
    }

    
}