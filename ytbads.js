function randomRange(l,h){
  var range = (h-l);
  var random = Math.floor(Math.random()*range);
  if (random === 8){random+=1;}
  return l+random;
}

function get_random_yid(){
    
    var ids = document.getElementsByClassName("youtube-id");
    var idx = randomRange(ids.length,0);
    return ids[idx].getAttribute("id");
}

function frx_ytb_show(autoPlay){
    
    var videos = document.getElementsByClassName("youtube-frame"); 
 
    for (var i=0; i<videos.length; i++) {
  
        var youtube = videos[i];
  
        var yid = get_random_yid();
        youtube.setAttribute("id", yid);
        youtube.style["position"]="relative";
  
        if(autoPlay)
           youtube.setAttribute("src",
           "https://www.youtube.com/embed/" + youtube.id 
           + "?autoplay=1&autohide=1&border=0&wmode=opaque&enablejsapi=1");
            else
            youtube.setAttribute("src",
                "https://www.youtube.com/embed/" + youtube.id 
                + "?autohide=1&border=0&wmode=opaque");
     }
}
