let backgroundVideo = document.getElementById('background')
let welcomeContent = document.getElementById('welcomecontent')

function playOrPause(){
    if(backgroundVideo.paused){
        backgroundVideo.play();
    }
    else{
        backgroundVideo.pause();
    }
}

function muteUnmute(){
    if(backgroundVideo.volume == 0){
        backgroundVideo.volume = 1
    }
    else{
        backgroundVideo.volume = 0
    }
}

function changeContent(){
    welcomeContent
}