function validateSignupForm() {
  var x = document.forms["mySignupForm"]["email"].value;
  var y = document.forms["mySignupForm"]["password"].value;
  if (x == "" || y == "") {
    alert("You missed a box! Please go back and fill it out");
    event.preventDefault();
  }
}