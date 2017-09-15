$(function(){
$("#formone").submit(function(event) {
  $("#male-rap, #female-rap, #male-pop, #female-pop, #male-classical, #female-classical").hide();
var ageInput = parseInt($("input#age").val());
var genderInput = $("select#gender").val();
var musicInput = $("input:radio[name=music]:checked").val();

if (ageInput === false, genderInput === false, musicInput === false) {
if (genderInput === 'male' && ageInput <=100 && musicInput === 'rap') {
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
