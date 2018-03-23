$(document).ready(function(){


    
    //constructor for character name, 
    //hp=hitpoint, 
    //ap=attack power, 
    //cap=counterattack power

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
    this.battleMeBro()
}

Game.prototype.battleMeBro = function(){

// character1.hp = character1.hp - character2.cap
console.log("luke hp:",character1.hp)
        //do something in the attack
        //take opponents hit points and reduced by player 1
        //take player 1 hit points and reduce by oponents attack points
    
    
}

    // create my characters
var character1 = new Character("Luke","assets/images/luke.png",100,6,5)
var character2 = new Character("Chewy","assets/images/chewy.png",120,8,10)
var character3 = new Character("Kylo","assets/images/kyloren.png",150,10,25)
var character4 = new Character("Vader","assets/images/vader.png",180,12,35)

var game1 = new Game(0,"",false,0,0)

// gameState 0 new game
// gameState 1 Character assigned
// gameState 2 Opponent assigned
// gameState 3 player wins game over
// gameState 4 player loses game over

// console.log("c1",character1)
// console.log("c2",character2)
// console.log("c3",character3)
// console.log("c4",character4)

// console.log(character1.newSQL)

// $(".character1").html(character1.newSQL)
// console.log(character1)

// $(".character1attributes").append(character1.name)




function showMeCards(){//generates all the cards for player to choose from.

    var characterPicker
    // $(".all_character_row").html("<h2>Choose Your Player</h2>")
    // $(".all_character_row").append(character1.newSQL)
    // $(".all_character_row").append(character2.newSQL)
    // $(".all_character_row").append(character3.newSQL)
    // $(".all_character_row").append(character4.newSQL)

    // $(".your_character_row").html(character1.newSQL)
    // $(".your_character_row").append(character2.newSQL)
    // $(".your_character_row").append(character3.newSQL)
    // $(".your_character_row").append(character4.newSQL)
    $(".your_character_row").hide()   

    // $(".opponent_row").html(character1.newSQL)
    // $(".opponent_row").append(character2.newSQL)
    // $(".opponent_row").append(character3.newSQL)
    // $(".opponent_row").append(character4.newSQL)
    $(".opponent_row").hide()

    // $(".defender_row").html(character1.newSQL)
    // $(".defender_row").append(character2.newSQL)
    // $(".defender_row").append(character3.newSQL)
    // $(".defender_row").append(character4.newSQL)
    $(".defender_row").hide()


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
}


function chooseMyCard(chosenOne){
    if(game1.gameState===0){
        $(".your_character_row").html("<h2>Your Character</h2>")
        $(".your_character_row").show()
        $(".all_character_row").hide()
        $(".opponent_row").html("<h2>Choose your Opponent</h2>")
        $(".opponent_row").show()
        if(chosenOne==="Luke"){
            console.log("the chosen one is:",chosenOne)
     
            character1.amIChosen = true
            console.log("I am chose:",character1.amIChosen)
            $(".your_character_row").append(character1.newSQL)
            $(".opponent_row").append(character2.newSQL)
            $(".opponent_row").append(character3.newSQL)
            $(".opponent_row").append(character4.newSQL)        
        }
        else if(chosenOne==="Chewy"){
            character2.amIChosen = true
            $(".your_character_row").html(character2.newSQL)
        }
        else if(chosenOne==="Kylo"){
            character3.amIChosen = true
            $(".your_character_row").html(character3.newSQL)
        }
        else if(chosenOne==="Vader"){
            character4.amIChosen = true
            $(".your_character_row").html(character4.newSQL)
        }    


    }


    
}

function chooseMyOpponent(chosenOne){
    $(".defender_row").html("<h2>Defender</h2>")
    $(".defender_row").show()
    if(chosenOne==="Luke"){
        console.log("luke! use the force luke!")
        $(".opponent_row").removeClass("hidden_content")
        $(".defender_row").html(character1.newSQL)
        $(".opponent_row").html("<h2>Remaining Opponents</h2>")
        $(".opponent_row").append(character2.newSQL)
        $(".opponent_row").append(character3.newSQL)
        $(".opponent_row").append(character4.newSQL)
    }
    else if(chosenOne==="Chewy"){
        // $(".defender_row").html(character2.newSQL)
        // $(".opponent_row").html("<h2>Remaining Opponents</h2>")
        // $(".opponent_row").append(character3.newSQL)
        // $(".opponent_row").append(character4.newSQL)
    }
    else if(chosenOne==="Kylo"){
        $(".defender_row").html(character3.newSQL)
        $(".opponent_row").html("<h2>Remaining Opponents</h2>")
        $(".opponent_row").append(character2.newSQL)
        $(".opponent_row").append(character4.newSQL)
    }
    else if(chosenOne==="Vader"){
        $(".defender_row").html(character4.newSQL)
        $(".opponent_row").html("<h2>Remaining Opponents</h2>")
        $(".opponent_row").append(character2.newSQL)
        $(".opponent_row").append(character3.newSQL)
    }        
}



//add class hidden_content when you want a row or card to disapear.

$(document).on('click', '.buttonChewy .opponent_row', function(){
    console.log("new clicker!")
    var text = $(this).attr('value') 
    console.log(text)

   
        $('.buttonLuke').click(function() { 
            var text = $(this).attr('value') 
            console.log(text)
            // $("#input").val(text);
          })

          $('.buttonChewy').click(function() { 
            var text = $(this).attr('value') 
            console.log(text)
            // $("#input").val(text);
          })

})


var counter = 0
showMeCards()
    
$(document).on("click", ".buttonLuke",function() {
    counter++
    console.log(counter)
    console.log("current gameState:",game1.gameState)
    // chooseMyOpponent("Luke")

    if(game1.gameState === 0){
        // $(".opponent_row").html("<h2>Choose Your Opponent</h2>")
        // $(".opponent_row").append(character2.newSQL)
        // $(".opponent_row").append(character3.newSQL)
        // $(".opponent_row").append(character4.newSQL)
        // headsCount++;
        // $("#heads-chosen").text(headsCount);
        // $("#guess").html("<b>Heads</b>");
       chooseMyCard("Luke")
       game1.gameState++
       console.log("clicked gameState:",game1.gameState)
    }
    else if(game1.gameState === 1){
        chooseMyOpponent()
        console.log("hey i got clicked!",game1.gameState)

    }

  })


  $(document).on("click",".buttonChewy", function() {
      console.log("rrrroooooaaaarrrr!")

    if(game1.gameState === 0){
    $(".opponent_row").html("<h2>Choose Your Opponent</h2>")
    $(".opponent_row").append(character1.newSQL)
    $(".opponent_row").append(character3.newSQL)
    $(".opponent_row").append(character4.newSQL)
    // headsCount++;
    // $("#heads-chosen").text(headsCount);
    // $("#guess").html("<b>Heads</b>");
   chooseMyCard("Chewy")
    }
    else if(game1.gameState === 1){
        chooseMyOpponent()
        console.log("hey i got clicked!",game1.gameState)

    }    
  })
  
  $(".buttonKylo").on("click", function() {
    $(".opponent_row").html("<h2>Choose Your Opponent</h2>")
    $(".opponent_row").append(character1.newSQL)
    $(".opponent_row").append(character2.newSQL)
    $(".opponent_row").append(character4.newSQL)
    // headsCount++;
    // $("#heads-chosen").text(headsCount);
    // $("#guess").html("<b>Heads</b>");
   chooseMyCard("Kylo")
  })

  $(".buttonVader").on("click", function() {
    $(".opponent_row").html("<h2>Choose Your Opponent</h2>")
    $(".opponent_row").append(character1.newSQL)
    $(".opponent_row").append(character2.newSQL)
    $(".opponent_row").append(character3.newSQL)
    // headsCount++;
    // $("#heads-chosen").text(headsCount);
    // $("#guess").html("<b>Heads</b>");
   chooseMyCard("Vader")
   console.log("1 am I the chosen one?",character1.amIChosen)
   console.log("2 am I the chosen one?",character2.amIChosen)
   console.log("3 am I the chosen one?",character3.amIChosen)
   console.log("4 am I the chosen one?",character4.amIChosen)
  })



  $("#attack").on("click", document, function(){
      console.log("attack!")
  })


  
})