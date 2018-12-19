var imgList=document.querySelectorAll(".img-item");
var lightBox=document.querySelector(".lightbox_container");
var close = Document.getElementById("close");
var lighBoxImg = document.querySelector(".lightbox-img");

for(i=0; i<imgList.length ;i++){
    imgList[i].addEventListener("click" , function(e){
        var targetsrc = e.target.src;
        lightBox.classList.add("show");
        lightBoxImg.style.backgroundImage = "url("+targetsrc+")"
        
    })
    
    
    
}
close.addEventListener("click" ,function(){
                       
                       lightBox.classList.remove("show");
                       })