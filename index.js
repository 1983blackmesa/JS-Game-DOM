//global variables
var number;
var number2;
var number3;
var getMax;
var getMin;


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
	if(number === 0 || number2 === 0 || number3 === 0) {
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
			//document.querySelector("p").remove();				
				//document.querySelector("p").innerHTML = "";
			}
				
			
			else if(getMin === +secondInput) { scoreResultsLOOSE(); }



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
