var ChangingColorDancer = function(top, left, timeBetweenSteps){
  
  Dancer.apply(this, arguments);

  // this.$node = $('<span class="dancer"></span>');

};

ChangingColorDancer.prototype = Object.create(Dancer.prototype);
ChangingColorDancer.prototype.constructor = ChangingColorDancer;

// ChangingColorDancer.prototype.step = function(){

//   BlinkyDancer.prototype.step.call(this);
//   //this.$node // change bordor color
//   // this.$node;
//   this.$node.toggle();
// };
ChangingColorDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step

    // ---> if we get issues later, let's look at this function again.
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  this.$node.css('border-color', function() {
    var val1 = Math.floor(Math.random()*255);
    var val2 = Math.floor(Math.random()*255);
    var val3 = Math.floor(Math.random()*255);
    return 'rgb(' + val1 + ',' + val2 + ',' + val3 + ')';
  });
  this.$node.fadeIn();
  this.$node.fadeOut();
};



