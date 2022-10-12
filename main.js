/* 漢堡包開關 */
function init(){
  document.getElementById("Burger_Button").onclick=function(){
    let menu = document.getElementById("Nav-Item");
    menu.classList.toggle("hidden");
  }
}
window.addEventListener("load",init,false)