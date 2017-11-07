

var attempt = 300; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var passwd = document.getElementById("password").value;
if ( username == "m" && passwd == "123"){
alert ("Login successfully");
document.location.href = '../examples/dashboard.html' // Redirecting to other page.
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}
