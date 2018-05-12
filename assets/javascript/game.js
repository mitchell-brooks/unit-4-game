var score = 0;
var wins = 0;
var losses = 0;
var goal ;
var values = [];

$(document).ready( function(){

var startGame = function(){

    //generate random numbers in an array
    for (i = 0; i<4; i++) {
        values.push(Math.floor(Math.random()*13))
    }
    console.log(values)
    
    //set goal
    goal = Math.floor((Math.random())*120)
    console.log(goal)
    $("#goal").html("<h2>Goal: " + goal + "<h2>")
    
    $("#winrecord").html("Wins: " + wins)
    $("#lossrecord").html("Losses: " + losses)
    
    };


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

$("#crystal0").on("click", function() {
    score += values[0];
$("#score").html("<h2>" + score + "<h2>");
checkScore();
    
});

$("#crystal1").on("click", function() {
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
