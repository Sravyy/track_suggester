$ (function(){

  //Score calculation

      var javaScore = 0;
      var cSharpScore = 0;
      var designScore = 0;

  //questions
      var question1 = parseInt($("select#q1").val());
      var question2 = parseInt($("select#q2").val());
      var question3 = parseInt($("select#q3").val());
      var question4 = parseInt($("select#q4").val());
      var question5 = parseInt($("select#q5").val());


      var questionOneCount = function() {
        if (q1 === 1){
          designScore +=1;
        } else if (q1 === 2) {
          javaScore +=1;
          cSharpScore +=1;
        }
      }
      var questionTwoCount = function() {
        if (q2 === 1){
          cSharpScore += 1;
          javaScore += 1;
        } else if (q2 === 2){
          designScore += 1;
        }
      }
      var questionThreeCount = function() {
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
      }
      var questionFourCount = function() {
        if (q4 === 1){
          javaScore += 1;
          cSharpScore += 1;
        } else if (q4 === 2) {
          designScore +=1;
        } else if (q5 === 3){
          designScore +=1;
        }
      }
      var questionFiveCount = function() {
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
      }

      var countAnswer = function() {
       if(javaScore > (cSharpScore || designScore)) {
         $("#two, #p-l-comic").show();
       } else if (designScore > (cSharpScore || javaScore )) {
         $("#one, #p-l-comic").show();
       } else if (cSharpScore > (designScore || javaScore )) {
         $("#three, #p-l-comic").show();
       }
      }
      // var refreshPage = function() {
      //   $(".jumbotron").show();
      //   $(".alert-success").hide();
      //   $(".questions").fadeIn(1000);
      //   $(".final").hide();
      //
      // // Restarts answer count
      // var javaScore = 0;
      // var cSharpScore = 0;
      // var designScore = 0;
      // }

//front end

      $("#start").click(function(){
        $(".jumbotron").hide();
        $(".questions").fadeIn(1000);
      });

    //  $(".questions form").submit(function(){
       $("#ready").submit(function(event){
         var nameInput = $("input#person").val().toUpperCase();
         $(".person").text(nameInput);
         alert("Hello "+ nameInput + " !");

           questionOneCount();
           questionTwoCount();
           questionThreeCount();
           questionFourCount();
           questionFiveCount();
           countAnswer();
          event.preventDefault();
    // })
  });


});
