
// phần video
var video=document.getElementById("video");

function play_pause(){
    if(video.paused==true)
    {
        video.play();
    }
    else
    {
        video.pause();
    }
}
function makeSmall(){
    video.width=300;
}
function makeNomal(){
    video.width=500;
}
function makeBig(){
    video.width=830;
}
