  $(function(){
    $("#start").click(function(){
      $(".jumbotron").hide();
      $(".alert-success").show();
      $(".questions").fadeIn(1000);
    });
//Back-end logic
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
// front-end logic
    $("form#survey").submit(function(event){
        var name = $("#name").val();
        $(".language").text(name);
        if (name === "") {
          $("#nameInput").addClass("has-error");
        }
//Score calculation
        var question1 = parseInt($("select#q1").val());
        var question2 = parseInt($("select#q2").val());
        var question3 = parseInt($("select#q3").val());
        var question4 = parseInt($("select#q4").val());
        var question5 = parseInt($("select#q5").val());

        if (q1 === 1){
          designScore +=1;
        } else if (q1 === 2) {
          javaScore +=1;
          cSharpScore +=1;
        }

        if (q2 === 1){
          cSharpScore += 1;
          javaScore += 1;
        } else if (q2 === 2){
          designScore += 1;
        }


        if (q3 === 1){
          javaScore += 1;
        } else if (q3 === 2){
          designScore = 0;
        } else if (q3 === 3){
          javaScore += 1;
          cSharpScore = 0;
        } else if (q3 === 4){
          cSharpScore = 0;
        } else if (q5 === 5){
          javaScore += 1;
          cSharpScore = 0;
          designScore = 0;
        }


        if (q4 === 1){
          javaScore += 1;
          cSharpScore += 1;
        } else if (q4 === 2) {
          designScore = 0;
        } else if (q5 === 3){
          designScore = 0;
        }


        if (q5 === 1){
          designScore +=1;
        } else if (q5 === 2){
          javaScore += 1;
        } else if (q5 === 3){
          cSharpScore += 1;
          javaScore += 1;
        } else if (q5 === 4){
          javaScore += 1;
        } else if (q5 === 5){
          designScore +=1;
        }
    // Display based on highscore values

        if (vsHighScore(javaScore) === true) {
            $("#two").removeClass("language");
              event.preventDefault();
          } else if (vsHighScore(cSharpScore) === true) {
            $("#three").removeClass("language");
              event.preventDefault();
          } else if (vsHighScore(designScore) === true) {
            $("#one").removeClass("language");
              event.preventDefault();

});
