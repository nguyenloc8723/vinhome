var index =1     ;
loadimage = function() {
    var imgs =["images/bia1.jpg","images/hero_bg_2.jpg","images/bia4.jpg","images/bia6.jpg"]; 
    document.getElementById('image').src = imgs[index];
    index++ ; 
    if (index==4) {
        index =0 ;
    }
}
setInterval(loadimage,2000);