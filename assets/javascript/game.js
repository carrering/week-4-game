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
    var theAttackIGotInYo
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
battleC.hp = battleC.hp - battleP1.currentAttack
theAttackIGotInYo = battleP1.currentAttack
battleP1.currentAttack = battleP1.currentAttack + battleP1.ap
console.log("name:",battleP1.name)
console.log(" hp:",battleP1.hp)
$(".hitpointsLuke").text(character1.hp)
$(".hitpointsChewy").text(character2.hp)
$(".hitpointsKylo").text(character3.hp)
$(".hitpointsVader").text(character4.hp) 
$(".result_text").html("You attacked "+ battleC.name + " for " + theAttackIGotInYo + " damage.")
$(".result_text").append("<br>")
$(".result_text").append(battleC.name + " attacked you back for " + battleC.cap + " damage.")

if(battleP1.hp <= 0){
    console.log("Game Over - Player",battleP1.name)
    $(".result_text").html("<h2>You Lost - GAME OVER!</h2>")
    $("#attack").hide()
    game1.lossCount = 1
    $("#reset").show()
}

if(battleC.hp <= 0){
    game1.winCount++
    checkGameState()
}
    
    
}

    // create my characters
var character1 = new Character("Luke","assets/images/luke.png",100,6,5)
var character2 = new Character("Chewy","assets/images/chewy.png",120,8,10)
var character3 = new Character("Kylo","assets/images/kyloren.png",150,10,15)
var character4 = new Character("Vader","assets/images/vader.png",180,12,25)

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
            $("#attack").hide()
            $(".result").hide()
            $("#reset").hide()
            game1.gameState=1 
            break

            case 1:// gameState 1 character assigned
            $(".all_character_row").hide()
            $(".your_character_row").show()
            $(".your_character_row").prepend("<h2>Your Character</h2>")   
            $(".opponent_row").show()
            $(".opponent_row").prepend("<h2>Choose an Opponent<h2>")
            $(".defender_row").hide()
            switch(game1.player1){
                case "Luke":
                $(".buttonLuke").prop('disabled',true)
                $(".your_character_row .buttonChewy").hide()
                $(".your_character_row .buttonKylo").hide()
                $(".your_character_row .buttonVader").hide()
                $(".opponent_row .buttonLuke").hide()
                break
                case "Chewy":
                $(".buttonChewy").prop('disabled',true)
                $(".your_character_row .buttonLuke").hide()
                $(".your_character_row .buttonKylo").hide()
                $(".your_character_row .buttonVader").hide()
                $(".opponent_row .buttonChewy").hide()
                break
                case "Kylo":
                $(".buttonKylo").prop('disabled',true)
                $(".your_character_row .buttonLuke").hide()
                $(".your_character_row .buttonChewy").hide()
                $(".your_character_row .buttonVader").hide()
                $(".opponent_row .buttonKylo").hide()
                break
                case "Vader":
                $(".buttonVader").prop('disabled',true)
                $(".your_character_row .buttonLuke").hide()
                $(".your_character_row .buttonChewy").hide()
                $(".your_character_row .buttonKylo").hide()
                $(".opponent_row .buttonVader").hide()
            }
            game1.gameState=2
            break

            case 2:// gameState 2 Opponent assigned
            $(".all_character_row").hide()
            $(".your_character_row").show()   
            $(".opponent_row").show()
            $(".defender_row").show()
            $(".defender_row").prepend("<h2>Defender</h2>")
            $(".buttonLuke").prop('disabled',true)
            $(".buttonKylo").prop('disabled',true)
            $(".buttonChewy").prop('disabled',true)
            $(".buttonVader").prop('disabled',true)
            switch(game1.opponent){
                case "Luke":
                $(".defender_row .buttonChewy").hide()
                $(".defender_row .buttonKylo").hide()
                $(".defender_row .buttonVader").hide()
                $(".opponent_row .buttonLuke").hide()
                break
                case "Chewy":
                $(".defender_row .buttonLuke").hide()
                $(".defender_row .buttonKylo").hide()
                $(".defender_row .buttonVader").hide()
                $(".opponent_row .buttonChewy").hide()
                break
                case "Kylo":
                $(".defender_row .buttonLuke").hide()
                $(".defender_row .buttonChewy").hide()
                $(".defender_row .buttonVader").hide()
                $(".opponent_row .buttonKylo").hide()
                break
                case "Vader":
                $(".defender_row .buttonLuke").hide()
                $(".defender_row .buttonChewy").hide()
                $(".defender_row .buttonKylo").hide()
                $(".opponent_row .buttonVader").hide()
            }
            $("#attack").show()
            game1.gameState=3              
            break

            case 3://gameState 3 player wins against opponent  
            $(".opponent_row .buttonLuke").prop('disabled',false)
            $(".opponent_row .buttonKylo").prop('disabled',false)
            $(".opponent_row .buttonChewy").prop('disabled',false)
            $(".opponent_row .buttonVader").prop('disabled',false)
            if(game1.winCount === 1){

                switch(game1.opponent){
                    case "Luke":
                    $(".defender_row .buttonChewy").hide()
                    $(".defender_row .buttonKylo").hide()
                    $(".defender_row .buttonVader").hide()
                    $(".defender_row .buttonLuke").hide()
                    break
                    case "Chewy":
                    $(".defender_row .buttonLuke").hide()
                    $(".defender_row .buttonKylo").hide()
                    $(".defender_row .buttonVader").hide()
                    $(".defender_row .buttonChewy").hide()
                    break
                    case "Kylo":
                    $(".defender_row .buttonLuke").hide()
                    $(".defender_row .buttonChewy").hide()
                    $(".defender_row .buttonVader").hide()
                    $(".defender_row .buttonKylo").hide()
                    break
                    case "Vader":
                    $(".defender_row .buttonLuke").hide()
                    $(".defender_row .buttonChewy").hide()
                    $(".defender_row .buttonKylo").hide()
                    $(".defender_row .buttonVader").hide()
                }  
                console.log(game1.winCount)
                game1.winCount++
            }
            else if(game1.winCount===2) {
                console.log("checkmeout!")
                switch(game1.opponent){
                    case "Luke":
                    $(".defender_row .buttonChewy").hide()
                    $(".defender_row .buttonKylo").hide()
                    $(".defender_row .buttonVader").hide()
                    $(".defender_row .buttonLuke").show()
                    break
                    case "Chewy":
                    $(".defender_row .buttonLuke").hide()
                    $(".defender_row .buttonKylo").hide()
                    $(".defender_row .buttonVader").hide()
                    $(".defender_row .buttonChewy").show()
                    break
                    case "Kylo":
                    $(".defender_row .buttonLuke").hide()
                    $(".defender_row .buttonChewy").hide()
                    $(".defender_row .buttonVader").hide()
                    $(".defender_row .buttonKylo").show()
                    break
                    case "Vader":
                    $(".defender_row .buttonLuke").hide()
                    $(".defender_row .buttonChewy").hide()
                    $(".defender_row .buttonKylo").hide()
                    $(".defender_row .buttonVader").show()
                }  
            }
            game1.winCount++
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
        checkGameState()
        
    }
    else if(game1.gameState===2 || game1.gameState===3){
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
        checkGameState()    
    }

})



$("#attack").on("click", function() {
    battleMeBro(game1.player1,game1.opponent)
})

$("#reset").on("click", function(){
    location.reload()
})
  
})