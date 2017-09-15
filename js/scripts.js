$(function(){
$("#formone").submit(function(event) {
  $("#8, #9-12, #13-15, #1-19").hide();
var q1Input = $("input:radio[name=music]:checked").val();
var q2Input = $("select#gender").val();
var q3Input = $("select#gender").val();
var q4Input = $("select#gender").val();
var q5Input = $("select#gender").val();

if (q1input, q1input, q1input, q1input, q1input) {
if (q1input === 'male' && ageInput <=100 && musicInput === 'rap') {
$("#male-rap").show();
}
else if (genderInput === 'female' && ageInput <= 100 && musicInput === 'rap') {
$("#female-rap").show();
}
else if (genderInput === 'male' && ageInput <= 100 && musicInput === 'pop') {
$("#male-pop").show();
}
else if (genderInput === 'female' && ageInput <= 100 && musicInput === 'pop') {
$("#female-pop").show();
}
else if (genderInput === 'male' && ageInput <= 100 && musicInput === 'classical') {
$("#male-classical").show();
}
else if (genderInput === 'female' && ageInput <= 100 && musicInput === 'classical') {
$("#female-classical").show();
}
}
else {
  alert("Please enter your details !!!")
}



  event.preventDefault();

});
});
