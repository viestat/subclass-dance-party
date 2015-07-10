var MovingDancer = function(top, left, timeBetweenSteps){
  
  // debugger;

  //temporal values that are going to be incrementing themselves. Starting from
  this.$node = $('<span class="dancer "></span>');

  this.leftSpeed = Math.random()*4;  //make it random
  this.topSpeed = Math.random()*4;
  // this.timeBetweenSteps /= 100;  //make it random

  ChangingColorDancer.call(this,top,left, 20);
  // this.left = left;
  // this.top = top;
  // this.initialize(); 
};

MovingDancer.prototype = Object.create(ChangingColorDancer.prototype);
MovingDancer.prototype.constructor = MovingDancer;

MovingDancer.prototype.step = function(){

  ChangingColorDancer.prototype.step.call(this);

  if(this.isLiningUp === false) {
    var bodyHeigth = $("body").height();
    var bodyWidth = $("body").width();

    this.top += this.topSpeed;
    this.left += this.leftSpeed;
    this.setPosition(this.top, this.left);  

    if(this.top > bodyHeigth && this.topSpeed > 0){
      // debugger;
      this.topSpeed *= -1;
    }

    if(this.top < 0 && this.topSpeed < 0){
      this.topSpeed *= -1;
    }


    if(this.left > bodyWidth && this.leftSpeed > 0){
      this.leftSpeed *= -1;
    }

    if(this.left < 0 && this.leftSpeed < 0){
      this.leftSpeed *= -1;
    }
  };

  //move it

  // make it bounce if it goes off the screen


};



