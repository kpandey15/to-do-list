const d= new Date();

document.getElementById("date").innerHTML=d.getDate();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
document.getElementById("day").innerHTML = days[d.getDay()];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
document.getElementById("month").innerHTML = months[d.getMonth()];
document.getElementById("year").innerHTML = d.getFullYear();
let a = document.getElementById('he');

function start(){
  document.getElementById("he").style.backgroundColor = "whitesmoke";
   var x = document.createElement('input');
  x.setAttribute("type", "text");
  x.size =30;
  x.style.borderColor = "whitesmoke";
  x.style.backgroundColor= "whitesmoke";
  x.style.borderRadius = "5px";
  x.style.borderStyle = "none";
  x.placeholder = "Enter To-Do";
  x.style.outline = "none";

   var y = document.createElement('button');
   var f  = document.createElement('img');
   f.src = "Screenshot (72).png" ;
   f.style.width ="25px";
   f.style.height = "25px";
   var z =2;
   y.appendChild(f);
   y.style.backgroundColor = "whitesmoke";
  
   y.style.borderBottomStyle ="none";
   y.style.borderRightStyle = "none";
   y.style.borderTopStyle ="none";
   y.style.borderLeftStyle = "none";
   y.style.borderRadius = "95px";
   y.onclick = function() {
    GFGfun()
      };
     function GFGfun(){
      if(z==2){
        f.src = "Screenshot (70).png" ;
           x.style.textDecorationLine = "line-through";
           var audio = new Audio('mixkit-retro-game-notification-212.wav');
            audio.play();
           
          z=1;
         }
      else if(z==1){
          f.src = "Screenshot (72).png" ;
           x.style.textDecorationLine = "none";
           z=2;
         }
      }
  a.appendChild(x); 
    a.appendChild(y);
    var g = document.createElement('hr');
    a.appendChild(g);
    
  
}

