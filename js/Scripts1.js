$ (function(){

  $("#start").click(function(){
    $(".jumbotron").hide();
    $(".questions").fadeIn(1000);
  });

  $("#survey").submit(function(event){
    event.preventDefault();
    var nameInput = $("input#person").val().toUpperCase();
    $(".person").text(nameInput);

    //  $(".questions form").submit(function(){

    var javaScore = 0;
    var cSharpScore = 0;
    var designScore = 0;
    var vsHighScore = function(score) {
      var highScore = Math.max(javaScore, cSharpScore, designScore);
      if (score === highScore && highScore != 0) {
        return true;
      } else {
        return false;
      }
    }

    //questions
    var q1 = parseInt($("select#q1").val());
    var q2 = parseInt($("select#q2").val());
    var q3 = parseInt($("select#q3").val());
    var q4 = parseInt($("select#q4").val());
    var q5 = parseInt($("select#q5").val());

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
      designScore +=1;
    } else if (q3 === 3){
      javaScore += 1;
      cSharpScore +=1;
    } else if (q3 === 4){
      cSharpScore +=1;
    } else if (q5 === 5){
      javaScore += 1;
      cSharpScore += 1;
      designScore += 1;
    }

    if (q4 === 1){
      javaScore += 1;
      cSharpScore += 1;
    } else if (q4 === 2) {
      designScore +=1;
    } else if (q5 === 3){
      designScore +=1;
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

    $(".final").show();

    if (vsHighScore(designScore) === true) {
      alert("design");
      $("#two").hide();
      $("#three").hide();
      $("#one").show();
    }
    else if (vsHighScore(javaScore) === true) {
      alert("c#");
      $("#one").hide();
      $("#three").hide();
      $("#two").show();
    }
    else if (vsHighScore(cSharpScore) === true) {
      alert("java");
      $("#two").hide();
      $("#one").hide();
      $("#three").show();
    } 

    $("#p-l-comic").fadeIn(2000);
    $(".questions").hide();
  });


});
