$(function(){
$("#formone").submit(function(event) {

    var javaScore = 0;
    var cSharpScore = 0;
    var designScore = 0;
    var tsHighScore = function(score){
      var highScore = Math.max(javaScore, cSharpScore, designScore);
      }
      if(score === highScore && highScore != 0) {
        return true;
      } else {
        return false;
      }
    }

    var clearScore = function(){
      var javaScore = 0;
      var cSharpScore = 0;
      var designScore = 0;
    }

    var resetResults = function() {
      $(#one, #two, #three).addClass("hidden");
    }

  event.preventDefault();
});
});
