$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    dancers.push(dancer);
  });

  $(".lineUpButton").on("click", function(event) {

    //height and width of the page, divide it to be at the center of the screen and calculate the horizontal value for each dancer
    var targetHeight = $("body").height() /2 ;
    var distanceWidth = ($("body").width() - 200) / (window.dancers.length);

    for(var i = 0; i < window.dancers.length; i++) {
      // call the line up method on each dancer 
      dancers[i].lineUp(targetHeight, (distanceWidth * (i + 1)));
  }
});

  $("body").on('mouseover', '.dancer' , function() {
    var currentDancer = dancers[$(this).data("index")];
    debugger;
    if(currentDancer instanceof MovingDancer) {
      currentDancer.topSpeed *= -1;
      currentDancer.leftSpeed *= -1;
    }
  });

  var collisionDetector = function() {
    // 5px radius
    var currentDancer;

    // check the array of dancers
    for(var i = 0; i<dancers.length; i++) {
      //if object is moving dancer then
      currentDancer = dancers[i];
      if(currentDancer instanceof MovingDancer) {
        for(var j = 0; j< dancers.length; j++) {
          if(i !== j) {
            //check all other objects within a 20 px radius
            if(dancers[j].top <= currentDancer.top + 19  && dancers[j].top >= currentDancer.top + 1) {
              if(dancers[j].left <= currentDancer.left + 19 && dancers[j].left >= currentDancer.left + 1) {
                // if there is one within that radius, make (original )object bounce (change the speed value)
                currentDancer.topSpeed *= -1;
                currentDancer.leftSpeed *= -1;
                // dancers[j].topSpeed *= -1;
                // dancers[j].leftSpeed *= -1;
              }
            }
          }
        }
      }
    }
  };

  setInterval(collisionDetector,10);

});

