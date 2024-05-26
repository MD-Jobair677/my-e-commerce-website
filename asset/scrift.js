$(document).ready(function(){
    var manus = $('.manu');
    manus.each(function(){
     $(this).click(function(){
     
      $(this).removeClass('text-xolor');
      $(this).addClass("text-xolor");
     })
      
  
    });


    let side = document.querySelector("#side");
    let manu = document.querySelector("#manu");
    manu.addEventListener("click",function(){
     side.classList.toggle('toggle-icon');
    
    
     let manu2 = document.querySelector("#manu");
     let remove = document.querySelector("#remove");
    
    })


    






})