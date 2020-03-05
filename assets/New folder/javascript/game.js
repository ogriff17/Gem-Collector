var wins = 0;
var losses = 0;
var computerNumber = 0;
var totalScore = 0;
var crystal1; 
var crystal2;
var crystal3;
var crystal4;

function addToScore (x) //this function receives the crystal number
{
    if (x == "1") {totalScore = totalScore + crystal1;}
    if (x == "2") {totalScore = totalScore + crystal2;}
    if (x == "3") {totalScore = totalScore + crystal3;}
    if (x == "4") {totalScore = totalScore + crystal4;}
  
    if (totalScore == computerNumber) {
        wins++; 
    }

    if (totalScore > computerNumber) {
      losses++;
    }
      
    
 

    document.getElementById("Wins").innerHTML = "Wins: " + wins;
    document.getElementById("Losses").innerHTML = "Losses: " + losses;
    document.getElementById("totalScore").innerHTML = "Total Score: " + totalScore;

}


computerNumber = Math.floor(Math.random() * 120) + 19;
crystal1 = Math.floor(Math.random() * 12) + 1;
crystal2 = Math.floor(Math.random() * 12) + 1;
crystal3 = Math.floor(Math.random() * 12) + 1;
crystal4 = Math.floor(Math.random() * 12) + 1;


//totalScore = totalScore + crystal1;


document.getElementById("Wins").innerHTML = "Wins: " + wins;
document.getElementById("Losses").innerHTML = "Losses: " + losses;
document.getElementById("totalScore").innerHTML = "Total Score: " + totalScore;
document.getElementById("computerNumber").innerHTML = "" + computerNumber;
