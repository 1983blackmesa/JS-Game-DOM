//global variables
let number;
let number2;
let number3;
let getMax;
let getMin;
let sound_point = new Audio('sound/point.mp3'); //score sound point
let sound_die = new Audio('sound/die.mp3');
let gamesPlayed = 0;
let roundsWon = 0; //Correct:
let roundsLost = 0; //InCorrect:
//let totalAmountWon = 0;

var scoreHuman = document.getElementById("humanScore"); //get score from html id value
//getRandomNumbers();
//var remove = document.getElementById("p").remove();
//document.getElementById('getInput').remove(); //NOT NEEDED keep for placeholder
//window.setTimeout(function(){location.reload()},7000); //NOT NEEDED keep for placeholder
//document.getElementById("button1").addEventListener('click', randomNumbers); //NOT NEEDED keep for placeholder

//function startGame() { //initial start game	
	getRandomNumbers();
	getUserInput();
	//document.getElementById("startbtn").remove();
	//document.querySelector("p").remove();
//}

function getRandomNumbers() {
  
  number=document.getElementById("random1").innerHTML = Math.floor(Math.random() * 20);
  number2=document.getElementById("random2").innerHTML = Math.floor(Math.random() * 20);
  number3=document.getElementById("random3").innerHTML = Math.floor(Math.random() * 20);
	if(number === 0 || number2 === 0 || number3 === 0) { //the number 0 issue
		getRandomNumbers();
	}
  getMax = Math.max(number, number2, number3);
  getMin = Math.min(number, number2, number3);
  //getEqual = Math.equal(number, number2, number3);
  console.log(getMax);
  console.log(getMin);
  
	//check if all numbers are equal first
	//	if(getEqual) {
		//	Tie();
		//}
	if(number === number2 && number === number3 || number2 === number3 && number === number3) { // 2 2 2
				Tie();
	}  
  
}


 function getUserInput() {
	 
	  //get user input
  var secondInput = document.getElementById("getInput").value; //Get number from text input
		//console.log(secondInput);
			if(getMax === +secondInput) {
				scoreResultsWIN();
				sound_point.play();
				gamesPlayed++;
				roundsWon++;
				//Renders the stats
    document.getElementById("gamesplayed").textContent = gamesPlayed;
	document.getElementById("roundswon").textContent = roundsWon;
	//document.getElementById("totalamountwon").textContent = totalAmountWon.toFixed(2)
			//document.querySelector("p").remove();				
				//document.querySelector("p").innerHTML = "";
			}
				
			
			else if(getMin === +secondInput) { 
			scoreResultsLOOSE(); 
			sound_die.play();
			gamesPlayed++;
			roundsLost--;
			document.getElementById("gamesplayed").textContent = gamesPlayed; //added here
			document.getElementById("roundslost").textContent = roundsLost;
			}



 } //end function
  

 function scoreResultsWIN() {
	//keep within same page!!!!
	document.querySelector("p").innerHTML = '<p style="color:green">Correct!</p>' + getMax + " is the greater number! "; //change the html text
	scoreHuman.innerHTML = parseInt(scoreHuman.innerHTML)+1;
	getRandomNumbers();	
	
	
	//document.getElementById("p").remove();
 } 
 
 function scoreResultsLOOSE() {
	//keep within same page!!!!
	document.querySelector("p").innerHTML = '<p style="color:red">WRONG!</p>' + getMin + " is the smaller number! "; //change the html text
	scoreHuman.innerHTML = parseInt(scoreHuman.innerHTML)-1;
	getRandomNumbers();
 }
 
 function Tie() {
	document.querySelector("p").innerHTML = '<p style="color:blue">TIE!</p>'; //change the html text
	getRandomNumbers();
 }

//document.querySelector("p").remove();

 function play_pause() {
        var myAudio = document.getElementById("myAudio");
        if (myAudio.paused) {
            myAudio.play();
        } else {
            myAudio.pause();
        }
    }
