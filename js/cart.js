document.addEventListener("DOMContentLoaded",()=>{
    if(sessionStorage.getItem("item")!=null){
        document.getElementById("cartH").className = 'hidden';  
        document.getElementById("priceDetails").className = 'container';  
        document.getElementById("payment").className = 'container';  
        document.getElementById("totalPrice").className = 'container';  
        document.getElementById("cartContent").innerHTML += sessionStorage.getItem("item");
        document.getElementById("priceDetails").innerHTML = sessionStorage.getItem("priceDetail");
        document.getElementById("totalPrice").innerHTML = sessionStorage.getItem("totalPriceDetail");
    }
});
function removeItem(){
    document.getElementById("cartContent").innerHTML = "";
    sessionStorage.clear();
}
