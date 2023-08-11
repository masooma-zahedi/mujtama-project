var index = 0;
document.addEventListener("DOMContentLoaded", function () {
    setInterval(function() {
        var i = 1;
        index += i;
         var images = document.querySelectorAll(".images");
         var dots = document.querySelectorAll(".dot");
         for (i=0; i<images.length;i++){
            images[i].style.display="none";
         }
         for(i=0; i<dots.length;i++){
            dots[i].className=dots[i].className.replace(" active"," ");
         }
         if(index > images.length-1){
            index = 0;
         }
         if(index < 0){
            index = images.length-1;
         }
    console.log('hi');
         images[index].style.display = "block";
         dots[index].className += " active";
    }, 4000);
  });
showImg(index);
function showImg(i){
     index += i;
     var images = document.querySelectorAll(".images");
     var dots = document.querySelectorAll(".dot");
     for (i=0; i<images.length;i++){
        images[i].style.display="none";
     }
     for(i=0; i<dots.length;i++){
        dots[i].className=dots[i].className.replace(" active"," ");
     }
     if(index > images.length-1){
        index = 0;
     }
     if(index < 0){
        index = images.length-1;
     }

     images[index].style.display = "block";
     dots[index].className += " active";
}

