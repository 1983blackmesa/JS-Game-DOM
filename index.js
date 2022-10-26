//global variables
var number;
var number2;
var getMax;
var getMin;

// JavaScript
// Wrap the native DOM audio element play function and handle any autoplay errors
Audio.prototype.play = (function(play) {
return function () {
  var audio = this,
      args = arguments,
      promise = play.apply(audio, args);
  if (promise !== undefined) {
    promise.catch(_ => {
      // Autoplay was prevented. This is optional, but add a button to start playing.
      var el = document.createElement("button");  //class="btn btn-primary"
      el.class = "btn btn primary";
	  el.innerHTML = "Play";
      el.addEventListener("click", function(){play.apply(audio, args);});
      this.parentNode.insertBefore(el, this.nextSibling)
    });
  }
};
})(Audio.prototype.play);

// Try automatically playing our audio via script. This would normally trigger and error.
document.getElementById('MyAudioElement').muted = false; 
document.getElementById('MyAudioElement').play()

/*
 function play_pause() {
        var myAudio = document.getElementById("myAudio");
        if (myAudio.paused) {
            myAudio.play();
        } else {
            myAudio.pause();
        }
    }
*/



function randomNumbers() {
  number=document.getElementById("demo").innerHTML = Math.floor(Math.random() * 20);
  number2=document.getElementById("demo3").innerHTML = Math.floor(Math.random() * 20);
	
	if(number === number2) {
				document.getElementById('demo').remove();
				document.getElementById('button1').remove();
				document.getElementById('button2').remove();
				document.getElementById('demo1').remove();
				document.getElementById('which').remove();
				document.querySelector("p").innerHTML = '<p style="color:blue">TIE!</p>' + number + " = " + number2; //change the html text
				window.setTimeout(function(){location.reload()},7000);
	}
  
  //get maximum number
  getMax = Math.max(number, number2);
  getMin = Math.min(number, number2);
  console.log(getMax);  //16
}
     
document.getElementById("button1").addEventListener('click', randomNumbers)
document.getElementById("button2").addEventListener('click', game)

function game() {
	var secondInput = document.getElementById("demo1").value; //Get number from text input
			if(getMax === +secondInput) {
				document.getElementById('demo').remove();
				document.getElementById('button1').remove();
				document.getElementById('button2').remove();
				document.getElementById('demo1').remove();
				document.getElementById('which').remove();
				document.querySelector("p").innerHTML = getMax + " is greater than " + getMin; //change the html text
				window.setTimeout(function(){location.reload()},7000);
			}
			else {
				document.getElementById('demo').remove();
				document.getElementById('button1').remove();
				document.getElementById('button2').remove();
				document.getElementById('demo1').remove();
				document.getElementById('which').remove();
				document.querySelector("p").innerHTML = getMin + " is smaller than " + getMax; //change the html text
				window.setTimeout(function(){location.reload()},7000);
  }
} //end function
