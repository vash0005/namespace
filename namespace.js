 var VASH0005 = {

     init: function () {

         let newElement = document.createElement("div");

         newElement.className = "box";

         newElement.textContent = "vash0005";

         let boxes = document.getElementById("boxes");

         boxes.appendChild(newElement);
         
         

         newElement.addEventListener("click", function(){
             
             newElement.style.borderColor = "black";
             newElement.style.backgroundColor = "red";
             
         });
         
         

         newElement.addEventListener("mouseover", function(){
             newElement.className.toggle("highlight");    
        });

         newElement.addEventListener("mouseout", function(){
             
             newElement.className.toggle("highlight");
             newElement.removeAttribute('style');
             
        });


     }

     };