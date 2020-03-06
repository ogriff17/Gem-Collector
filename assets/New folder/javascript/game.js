var wins = 0;
var losses = 0;
var computerNumber = 0; //our variables are here
var totalScore = 0;
var crystal1; 
var crystal2;
var crystal3;
var crystal4;
var magicGlitterSound;

function addToScore (x) //this function receives the crystal number
{
    if (x == "1") {totalScore = totalScore + crystal1;}
    if (x == "2") {totalScore = totalScore + crystal2;}
    if (x == "3") {totalScore = totalScore + crystal3;}
    if (x == "4") {totalScore = totalScore + crystal4;}
  
    //This is to calculate the wins or losses variables

    if (totalScore == computerNumber) {
        wins++;
        totalScore = 0; 
        setRandom ();
    }

    if (totalScore > computerNumber) {
      losses++;
      totalScore = 0;
      MagicGlitterSund = loadSound ("../images/Magic Glitter.wav");
      setRandom ();
    }

    document.getElementById("Wins").innerHTML = "Wins: " + wins;
    document.getElementById("Losses").innerHTML = "Losses: " + losses;
    document.getElementById("computerNumber").innerHTML = "" + computerNumber;
    document.getElementById("totalScore").innerHTML = "Total Score: " + totalScore;

}
function setRandom()
{
computerNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);

crystal1 = Math.floor(Math.random() * (12 - 1 + 1) + 1);
crystal2 = Math.floor(Math.random() * (12 - 1 + 1) + 1);
crystal3 = Math.floor(Math.random() * (12 - 1 + 1) + 1);
crystal4 = Math.floor(Math.random() * (12 - 1 + 1) + 1);
}

setRandom (); //store the function and run it

//totalScore = totalScore + crystal1;

//These statements are only executed when the page loads the first time

document.getElementById("Wins").innerHTML = "Wins: " + wins;
document.getElementById("Losses").innerHTML = "Losses: " + losses;
document.getElementById("totalScore").innerHTML = "Total Score: " + totalScore;
document.getElementById("computerNumber").innerHTML = "" + computerNumber;
