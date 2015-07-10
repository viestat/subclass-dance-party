var BlinkyColorDancer = function(top, left, timeBetweenSteps){
  
  ChangingColorDancer.apply(this, arguments);

};

BlinkyColorDancer.prototype = Object.create(ChangingColorDancer.prototype);
BlinkyColorDancer.prototype.constructor = BlinkyColorDancer;

BlinkyColorDancer.prototype.step = function(){
  
  ChangingColorDancer.prototype.step.call(this);
  
  this.$node.fadeIn();
  this.$node.fadeOut();
};
