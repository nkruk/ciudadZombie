var Sound = function(src) {
    this.audioElement = document.createElement("audio");
    this.audioElement.src = src;
    this.audioElement.setAttribute("preload", "auto");
    this.audioElement.setAttribute("controls", "none");
    this.audioElement.style.display = "none";
    
    document.addEventListener('DOMContentLoaded', function () {
      document.body.appendChild(this.audioElement);
    });
    this.play = function(){
        this.audioElement.play();
    }
    this.stop = function(){
        this.audioElement.pause();
    }
  };