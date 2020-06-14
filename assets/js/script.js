'use strict';

var button = document.querySelectorAll(".face");
console.log(button);
for(var i = 0; i < button.length; i++){
  button[i].onclick = function(){
    var content = this.parentElement;
    console.log(content);
    var active = content.classList.contains("active");
    if(!active){
      content.classList.add("active");
    }
    else{
      content.classList.remove("active"); 
    }
  }
}

















