$(function () {

  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');
    }
  });
});

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