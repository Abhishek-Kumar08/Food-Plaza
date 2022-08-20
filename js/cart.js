document.addEventListener("DOMContentLoaded",(e)=>{
    if(sessionStorage.getItem("item")!=null){
        document.getElementById("cartH").className = 'hidden';  
        document.getElementById("cartContent").innerHTML += sessionStorage.getItem("item");
    }
});
document.querySelector("#resetCart").addEventListener("click",()=>{
    document.getElementById("divCart").innerHTML = "";
    sessionStorage.clear();
});
