var score = 0;
var wins = 0;
var losses = 0;
var goal ;
var values = [];
var randomArr = [];

$(document).ready( function(){

var randomizeCrystals = function(){  

    //generate random numbers in an array
    for (i = 0; i<4; i++) {
        values.push(Math.floor((Math.random()*12))+1)
    }
    console.log("crystals", values)

    //generate a random array to randomize crystal colors each round
    while (randomArr.length<4){
        a = Math.floor(Math.random()*4)
        if (randomArr.indexOf(a) === -1){
            randomArr.push(a);
        }
        }
        console.log(randomArr)
    }

var generateCrystals = function(){
    //generate crystal images each round, using a random color for each one
        
        for(i=0; i<values.length; i++) {
        $("#crystalrow").append('<div class="col-lg-3 col-md-3 col-sm-3 col-6 col-xl-3" id="crystal' + randomArr[i] + '"><img  src="assets/images/crystals/' + randomArr[i] + '.png" class="img-fluid crystalimg"> </div>')
        }
    }

var reset = function(){
    values = [];
    //empty the random crystal array
    randomArr = [];
    //clear the previous crystals from the DOM
    $("#crystalrow").empty();

    //set goal
    goal = Math.floor(((Math.random())*102)+19)
    console.log(goal)

    //rewrite current stats
    $("#goal").html("<h2>Goal: " + goal + "<h2>")
    
    $("#winrecord").html("Wins: " + wins)
    $("#lossrecord").html("Losses: " + losses)
}
    
//nested functions to reset everything
var startGame = function(){
    reset();
    console.log("cleared array",randomArr)
    randomizeCrystals();
    console.log("new random array", randomArr)

    generateCrystals();

    };

//functions for win conditions
    var checkScore = function(){
        if (score > goal){
            alert("Bust! Better luck next time...");
            losses++;
            score = 0
            startGame();
        };
        
        if (score === goal){
            alert("You win!");
            wins++;
            score= 0
            startGame();
        };
        $("#score").html("<h2>" + score + "<h2>");
        $("#winrecord").html("Wins: " + wins)
        $("#lossrecord").html("Losses: " + losses)
        }
        

startGame();






//click events for each of the images adding a number from the array to score

$("#crystalrow").on("click","#crystal0", function() {
    score += values[0];
$("#score").html("<h2>" + score + "<h2>");
checkScore();
    
});

$("#crystalrow").on("click","#crystal1", function() {
    score += values[1];
$("#score").html("<h2>" + score + "<h2>");
checkScore();
});

$("#crystalrow").on("click","#crystal2", function() {
    score += values[2];
$("#score").html("<h2>" + score + "<h2>");
checkScore();
});

$("#crystalrow").on("click","#crystal3", function() {
    score += values[3];
$("#score").html("<h2>" + score + "<h2>");
checkScore();
});

})
