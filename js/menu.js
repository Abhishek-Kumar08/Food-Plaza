var vp = document.getElementsByClassName("vPizza");
var nvp = document.getElementsByClassName("nvPizza");
var vb = document.getElementsByClassName("vBurger");
var nvb = document.getElementsByClassName("nvBurger");
var vf = document.getElementsByClassName("vFrankie");
var nvf = document.getElementsByClassName("nvFrankie");
var vpa = document.getElementsByClassName("vPasta");
var nvpa = document.getElementsByClassName("nvPasta");

function addMe(s,e){
  document.getElementById("popup_box").style.opacity = "1";
  document.getElementById("popup_box").style.pointerEvents = "auto";

  document.getElementById("btn1").addEventListener('click',()=>{
    document.getElementById("popup_box").style.opacity = "0";
    document.getElementById("popup_box").style.pointerEvents = "none";
  });

  document.getElementById("btn2").addEventListener('click',()=>{
    document.getElementById("popup_box").style.opacity = "0";
    document.getElementById("popup_box").style.pointerEvents = "none";

  var item1 = '<div class="listItem col-xs-10">'+e.target.innerHTML+'</div>';
  var item2 = '<div class="imgItem col-xs-2"><img src="Assets\\'+s+'.jpg" width="100%" height="100%"></div>';
  if(sessionStorage.getItem("item")!=null){
      var t = sessionStorage.getItem("item");
      sessionStorage.setItem("item",(t+item1+item2));
  }
  else{
      sessionStorage.setItem("item",(item1+item2));
  }

  });
  
}

for(var i =0; i<10; i++){
  vp[i].addEventListener("click",(e)=>{
      addMe("vegPizza",e);
  });
  nvp[i].addEventListener("click",(e)=>{
    
  });
  vb[i].addEventListener("click",(e)=>{
    
  });
  nvb[i].addEventListener("click",(e)=>{
    
  });
  vf[i].addEventListener("click",(e)=>{
    
  });
  nvf[i].addEventListener("click",(e)=>{
    
  });
  vpa[i].addEventListener("click",(e)=>{
    
  });
  nvpa[i].addEventListener("click",(e)=>{
    
  });
}