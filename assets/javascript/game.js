$(document).ready(function(){


  

function Character(name, imgurl, hitPoint, attackPoint, counterAttackPoint) {
        this.name = name
        this.hp = hitPoint
        this.ap = attackPoint
        this.currentAttack = attackPoint
        this.cap = counterAttackPoint
        this.imgurl = imgurl
        this.amIChosen = false
        this.createCard()
    }

Character.prototype.createCard = function(){
    this.newSQL = "<button class='char_button' id='button" + this.name + "'>" +
                "<div class='card'>" +
                "<div class='card_image'>" +
                "<img src='" + this.imgurl + "' alt='" + this.name + "' class='character_image'>" +
                "</div>" +
                "<div class='card_content'>" +
                    "<div class='hitpoints'>Name: "+ this.name +"</div>" +
                    "<div class='hitpoints'>Hit Points: "+ this.hp +"</div>" +
                    "<div class='attackpower'>Attack Power: "+ this.ap +"</div>" +
                    "<div class='counterattack'>Counter-Attack: "+ this.cap +"</div>" +
                "</div>" +
            "</div>" +
            "</button>"
}


function Game(gameState, player1, opponent, isOver, winCount, lossCount){
    this.gameState = gameState
    this.player1 = player1
    this.opponent = opponent
    this.isOver = isOver
    this.winCount = winCount
    this.lossCount = lossCount
}

function battleMeBro(p1,c){
    var battleP1
    var battleC
   switch(p1){
        case "Luke":
            battleP1 = character1
            break;
        case "Chewy":
            battleP1 = character2
            break;          
        case "Kylo":
            battleP1 = character3
            break;       
        case "Vader":
            battleP1 = character4 
   }

   switch(c){
    case "Luke":
        battleC = character1
        break;
    case "Chewy":
        battleC = character2
        break;          
    case "Kylo":
        battleC = character3
        break;       
    case "Vader":
        battleC = character4 
}


// character1.hp = character1.hp - character2.cap
battleP1.hp = battleP1.hp - battleC.cap
console.log("name:",battleP1.name)
console.log(" hp:",battleP1.hp)
        //do something in the attack
        //take opponents hit points and reduced by player 1
        //take player 1 hit points and reduce by oponents attack points
    
    
}

    // create my characters
var character1 = new Character("Luke","assets/images/luke.png",100,6,5)
var character2 = new Character("Chewy","assets/images/chewy.png",120,8,10)
var character3 = new Character("Kylo","assets/images/kyloren.png",150,10,25)
var character4 = new Character("Vader","assets/images/vader.png",180,12,35)

var game1 = new Game(0,"Luke","Vader",false,0,0)


function checkGameState(){
    switch(game1.gameState){
        // gameState 0 new game
        // gameState 1 Character assigned
        // gameState 2 Opponent assigned
        // gameState 3 player wins game over
        // gameState 4 player loses game over
        
            case 0:// gameState 0 new game
            $(".all_character_row").show()
            $(".your_character_row").hide()   
            $(".opponent_row").hide()
            $(".defender_row").hide()
            game1.gameState=1 // only this state automtically exits
            break

            case 1:// gameState 0 new game
            $(".all_character_row").hide()
            $(".your_character_row").show()   
            $(".opponent_row").show()
            $(".defender_row").hide()
            $(".buttonVader").hide()
            break

            case 2:// gameState 2 Opponent assigned
            $(".all_character_row").hide()
            $(".your_character_row").show()   
            $(".opponent_row").show()
            $(".defender_row").show()
            $(".buttonVader").show()     
            break

        
        }

}

checkGameState()

$(".nameLuke").text(character1.name)
$(".nameChewy").text(character2.name)
$(".nameKylo").text(character3.name)
$(".nameVader").text(character4.name)    

$(".hitpointsLuke").text(character1.hp)
$(".hitpointsChewy").text(character2.hp)
$(".hitpointsKylo").text(character3.hp)
$(".hitpointsVader").text(character4.hp)    

$(".attackpowerLuke").text(character1.ap)
$(".attackpowerChewy").text(character2.ap)
$(".attackpowerKylo").text(character3.ap)
$(".attackpowerVader").text(character4.ap)    

$(".counterattackLuke").text(character1.cap)
$(".counterattackChewy").text(character2.cap)
$(".counterattackKylo").text(character3.cap)
$(".counterattackVader").text(character4.cap)    

$(".char_button").on("click", function(){
    checkGameState()
    var selectedChar = $(this).attr("value") 
    console.log("Button Clicked Value:",selectedChar)
    if(game1.gameState===1){
        switch(selectedChar){
            case "character1":
            game1.player1 = "Luke"
            break
            case "character2":
            game1.player1 = "Chewy"
            break
            case "character3":
            game1.player1 = "Kylo"
            break
            case "character4":
            game1.player1 = "Vader"
            break
        }
        game1.gameState=2
    }
    else if(game1.gameState===2){
        switch(selectedChar){
            case "character1":
            game1.opponent = "Luke"
            break
            case "character2":
            game1.opponent = "Chewy"
            break
            case "character3":
            game1.opponent= "Kylo"
            break
            case "character4":
            game1.opponent = "Vader"
            break
        }
        game1.gameState=3       
    }

})



$("#attack").on("click", function() {
    battleMeBro(game1.player1,game1.opponent)
})


  
})