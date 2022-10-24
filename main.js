/* 漢堡包開關 */
function init(){
  document.getElementById("Burger_Button").onclick=function(){
    let menu = document.getElementById("Nav-Item");
    menu.classList.toggle("hidden");
  }
}
/* 點小圖換大圖 */
function clickchangeimg(){
  var list = document.getElementsByClassName("littlepic")
  var bigpic = document.getElementsByClassName("bigpic")
  for(var i = 0;i<list.length;i++){
    console.log(i);
    list[i].onclick = function(){
      bigpic[0].src = this.src;
    }
  }
}

window.addEventListener("load",init,false)

