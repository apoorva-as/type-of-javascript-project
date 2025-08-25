function makebubble(){
var clutter ="";


for(var i=1 ;i<=102;i++){
  var rn=  Math.floor(Math.random()*10)
      clutter+= `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter
}

var timer = 30;
function runTimer(){
   var timerint = setInterval (function (){
        if(timer >0){
        timer--;
        document.querySelector("#timerval").textContent = timer;
    } else{
        clearInterval(timerint);
        document.querySelector("#pbtm").innerHTML = `<h1> GAME OVER! <h1>`;
    }
},1000);
}

var hitrn = 0;
function getNewhit(){
   hitrn=  Math.floor(Math.random()*10)
document.querySelector("#hitval").textContent= hitrn;
 
}

var score = 0;
function increaseScore(){
    score +=10;
    document.querySelector("#scoreval").textContent = score;
}

 document.querySelector("#pbtm").addEventListener("click",function(dets){
   var clickednum =Number(dets.target.textContent);
   if(clickednum=== hitrn){
    increaseScore();
    makebubble();
    getNewhit();
   }
 });





runTimer();

makebubble();

getNewhit();
