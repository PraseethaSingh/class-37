class player {
    constructor(){
        this.name = null ;
        this.distance = 0;
        this.index = null;

    }
    getCount(){
        var playerCountref = database.ref("playerCount")
        playerCountref.on("value",function (data){
            playerCount = data.val()
            })
    }
updateCount(count){
    database.ref("/").update({playerCount:count})
}

update(){
    var playerIndex = "players/player"+this.index
    database.ref(playerIndex).set({name:this.name,distance:this.distance})
}
static getPlayerInfo(){
    var playerinforef = database.ref("players")
    playerinforef.on("value",function (data){all_players=data.val()
    })
}

}