if(sessionStorage.getItem("item")==null){
  sessionStorage.setItem("counter",(0));
  sessionStorage.setItem("totalPrice",(0));
}
var counter = Number(sessionStorage.getItem('counter'));
var totalPrice = Number(sessionStorage.getItem('totalPrice'));
var deliveryCharge = 0;
function addMe(n){
    counter += 1;
    if (counter>0){
      deliveryCharge = 30;
    }
    var type ="";
    var path ="";
    var i = n-1;
    var cp = document.getElementsByClassName("menuItem");
    var pr = document.getElementsByClassName("price");
    var item = cp[i].textContent;
    var  price = pr[i].textContent;
    var prc = price.split('.');
    totalPrice += Number(prc[1]);
    if(i<10){
      type = "Veg. Pizza";
      path = "vegPizza";
    }
    else if(i>=10 && i<20){
      type = "Non-Veg. Pizza";
      path = "nVegPizza";
    }
    else if(i>=20 && i<30){
      type = "Veg. Burger";
      path = "vegBurger";
    }
    else if(i>=30 && i<40){
      type = "Non-Veg. Burger";
      path = "nVegBurger";
    }
    else if(i>=40 && i<50){
      type = "Veg. Frankie";
      path = "vegFrankie";
    }
    else if(i>=50 && i<60){
      type = "Non-Veg. Frankie";
      path = "nVegFrankie";
    }
    else if(i>=60 && i<70){
      type = "Veg. Pasta";
      path = "vegPasta";
    }
    else if(i>=70 && i<80){
      type = "Non-Veg. Pizza";
      path = "nVegPasta";
    }
  document.getElementById("cartItemName").innerHTML = "Add '"+item+"' to cart?";
  document.getElementById("popup_box").style.opacity = "1";
  document.getElementById("popup_box").style.pointerEvents = "auto";

  document.getElementById("btn1").addEventListener('click',()=>{
  document.getElementById("popup_box").style.opacity = "0";
  document.getElementById("popup_box").style.pointerEvents = "none";
  });

  document.getElementById("btn2").addEventListener('click',()=>{
  document.getElementById("popup_box").style.opacity = "0";
  document.getElementById("popup_box").style.pointerEvents = "none";

  var divMenuItem = '<div  class = "divItemCartFrame container"><div class = "divItemCart">'+
    '<div class = "col-xs-9"><div class="cartItemName">'+item+'</div>'+
    '<div class="cartItemType">'+type+'</div><div class="cartItemPrice">'+price+'</div></div>'+
    '<div class = "col-xs-3"><div><img src="Assets/'+path+'.jpg" width="80%" height="80%"></div>'+
    '<div class="cartItemQty">Qty: 1 <span class="glyphicon glyphicon-menu-down"></span></div></div></div>'+
    '<div id = "cartTilesDiv"><div class="cartTiles col-xs-6"><span class="glyphicon glyphicon-gift"></span> Save for later</div>'+
    '<div class="cartTiles col-xs-6" onclick="removeItem()"><span class="glyphicon glyphicon-trash"></span> Remove</div></div></div>';

  var priceDetail = '<h3 id="priceDetailHead">Price Details</h3>'+
    '<div class="divPriceText col-xs-6">Price ('+counter+' item)</div>'+
    '<div class="divPriceAmount col-xs-6">Rs. '+totalPrice+'</div>'+
    '<div class="divPriceText col-xs-6">Delivery Charges</div>'+
    '<div class="divPriceAmount col-xs-6">Rs. '+deliveryCharge+'</div>'+
    '<hr id="hrPrice" class="col-xs-12">'+
    '<div class="divPriceText col-xs-6">Total Amount</div>'+
    '<div class="divPriceAmount col-xs-6">Rs. '+(totalPrice+deliveryCharge)+'</div>';

  var totalPriceDetail = '<div id="totalAmount" class="col-xs-6">'+(totalPrice+deliveryCharge)+'<br>'+
    '<a href="#priceDetail" id="veiwDetails">Veiw price details</a></div>'+
    '<div class="col-xs-6"><button id="placeOrder" value="Place Order">'+
    'Place Order</button></div>';

  if(sessionStorage.getItem("item")!=null){
    var t = sessionStorage.getItem("item");
    sessionStorage.setItem("item",(t+divMenuItem));
  }
  else{
    sessionStorage.setItem("item",(divMenuItem));
  }
  sessionStorage.setItem("priceDetail",(priceDetail));
  sessionStorage.setItem("totalPriceDetail",(totalPriceDetail));
  sessionStorage.setItem("counter",(counter));
  sessionStorage.setItem("totalPrice",(totalPrice));
  });
  
}