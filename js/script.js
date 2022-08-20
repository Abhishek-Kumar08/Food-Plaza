$(function () {

  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');
    }
  });
});



// SIGN IN

var c = document.getElementById("createDiv");
var p = document.getElementById("divPass");
var s = document.getElementById("signDiv");
var cb = document.getElementById("continue");

function createNew(){
  s.className = 'hidden';
  c.className = '';
}
function btnContinue(){
  c.className = 'hidden';
  p.className = '';
}
function signIn(){
  c.className = 'hidden';
  p.className = 'hidden';
  s.className = '';
}

// CONTACT

function sendEmail(){
  alert("Message Sent Successfully!");
  // sendEmail.send({
  //   Host: "smtp.gmail.com",
  //   Username: "abc@xyz.com",
  //   Password: "*********",
  //   To: "abc@xyz.com",
  //   From: document.getElementById("email").value,
  //   Subject: "New Contact Form Enquiry",
  //   Body: "Name: "+document.getElementById("name").value+"<br>Email: "+
  //         document.getElementById("email").value+"<br>Phone no: "+
  //         document.getElementById("phone").value+"<br>Message : "+
  //         document.getElementById("message").value
  // }).then(
  //   message => alert("Message Sent Succesfully!")
  // );
}