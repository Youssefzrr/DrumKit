
var buttons = document.querySelectorAll('button');
var sound = {
    "w": "sounds/tom-1.mp3",
    "a": "sounds/tom-2.mp3",
    "s": "sounds/tom-3.mp3",
    "d": "sounds/tom-4.mp3",
    "j": "sounds/snare.mp3",
    "k": "sounds/crash.mp3",
    "l": "sounds/kick-bass.mp3"
};
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
       var drum=new Audio(sound[this.innerHTML]);
       drum.play();
       buttonAnimation(this.innerHTML)
        
    });
}

    document.addEventListener("keydown",(event)=>{
        var drum=new Audio(sound[event.key]);
        drum.play();
        buttonAnimation(event.key)
        
    });
    function buttonAnimation(currentKey){
    var activeButton=   document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100)
    activeButton.addEventListener("c",)
    }

