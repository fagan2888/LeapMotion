$("#splashIcon").fadeOut(3000);
$("#splashScreen").fadeOut(6000);

// Store frame for motion functions
var previousFrame = null;
var paused = false;
var pauseOnGesture = false;
var zArray = [];
// Setup Leap loop with frame callback function
var controllerOptions = {enableGestures: true};//
Leap.loop(controllerOptions, function(frame) {
  var palmPosition = document.getElementById("palmPosition");
  var palmPositionData = "";
  var x = "", y = "", z = "", rX = "", rY="", rZ="";
  //grab the data from the Leap Motion 
  if (frame.hands.length > 0) {
    for (var i = 0; i < frame.hands.length; i++) {
      var hand = frame.hands[i];
      palmPositionData += String(vectorToString(hand.palmPosition));
      var coord = palmPositionData.split(",");
      x = parseInt(coord[0]);
      y = parseInt(coord[1]);
      z = parseInt(coord[2]);
      if(hand.type == "right"){
        palmPositionRight = (vectorToString(hand.palmPosition));
        coordRight = palmPositionRight.split(",");
        rX = parseInt(coordRight[0]);
        rY = parseInt(coordRight[1]);
        rZ = parseInt(coordRight[2]);
      }
    }
    }
  var degree = z;
  // rotates the images based on the current z coordinate
  if(z < 0){
    $("#donut").show();
    $("#donut").css({MozTransform: 'rotate(-' + degree + 'deg)',
          WebkitTransform: 'rotate(' + degree + 'deg)',
          transform: 'rotate(' + degree + 'deg)'
    });
    var audio = $('audio')[0];
    audio.currentTime -= (z/200.0);   
  } else if(z > 0){
    $("#donut").show();
    $("#donut").css({MozTransform: 'rotate(-' + degree + 'deg)',
          WebkitTransform: 'rotate(' + degree + 'deg)',
          transform: 'rotate(' + degree + 'deg)'
    });
    var audio = $('audio')[0];
    audio.currentTime += (z/100.0); 
  } else {
    $("#donut").hide();
  }
  var rDegree = rZ;
  // rotates the images based on the current z coordinate
  if(rZ < 0){
    $("#pokeball").show();
    $("#pokeball").css({MozTransform: 'rotate(-' + rDegree + 'deg)',
          WebkitTransform: 'rotate(' + rDegree + 'deg)',
          transform: 'rotate(' + rDegree + 'deg)'
    });
    //var audio = $('audio')[0];
    //audio.currentTime -= (z/200.0);   
  } else if(rZ > 0){
    $("#pokeball").show();
    $("#pokeball").css({MozTransform: 'rotate(-' + rDegree + 'deg)',
          WebkitTransform: 'rotate(' + rDegree + 'deg)',
          transform: 'rotate(' + rDegree + 'deg)'
    });
    //var audio = $('audio')[0];
    //audio.currentTime += (z/100.0); 
  } else {
    $("#pokeball").hide();
  }
    //palmPosition.innerHTML = palmPositionData;
});
function vectorToString(vector, digits) {
  if (typeof digits === "undefined") {
    digits = 1;
  }
  return  vector[0].toFixed(digits) + ", "
             + vector[1].toFixed(digits) + ", "
             + vector[2].toFixed(digits) + "";
}

