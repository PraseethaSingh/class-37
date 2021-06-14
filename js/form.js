class form {
    constructor(){
        this.button = createButton("Play"),
        this.input = createInput(""),
        this.greeting = createElement('h3')

    }
    hide(){
        this.greeting.hide()
        this.button.hide()
        this.input.hide()
    }
    display(){
        var title = createElement("h2")
        title.html("Multiplayer Car Racing Game")
        title.position(400,0);

       
        this.input.position(400,160);

        
        this.button.position(520,200);


        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player1.name = this.input.value()
            playerCount+=1
            player1.index = playerCount;
            player1.update()
            player1.updateCount()
            this.greeting.html("hello "+player1.name)
            this.greeting.position(400,160)
        }
        )


    }
}