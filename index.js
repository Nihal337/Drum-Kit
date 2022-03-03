
 // detecting button Press

var noOfButtons = document.querySelectorAll(".drum").length ;
// basically event listener helps our button to trigger the function when a event has occured.

for(var i=0 ; i<noOfButtons ;i++) {
    document.querySelectorAll("button")[i].addEventListener("click",function(){

          var buttoninnerHTML = this.innerHTML ;

           makesound(buttoninnerHTML) ;

           buttonanimation(buttoninnerHTML) ;

    }) ;
   

} 
// detecting Keyboard Press

document.addEventListener("keydown",function(event) {
    
    makesound(event.key) ;

    buttonanimation(event.key) ;
    
} ) ;




function makesound(key) {

    switch (key) {

        case 'w': var audiow = new Audio("sounds/crash.mp3") ;
                  audiow.play() ;          
            break;
         case 'a': var audioa = new Audio("sounds/kick-bass.mp3") ;
                    audioa.play() ;
            break ;
         case 's': var audios = new Audio("sounds/snare.mp3") ;
                    audios.play() ;
            break ;
            case 'd': var audioa = new Audio("sounds/tom-1.mp3") ;
                    audioa.play() ;
            break ;
            case 'j': var audioj = new Audio("sounds/tom-2.mp3") ;
                    audioj.play() ;
            break ;        
            case 'k': var audiok = new Audio("sounds/tom-3.mp3") ;
                    audiok.play() ;
            break ;        
            case 'l': var audiol = new Audio("sounds/tom-4.mp3") ;
                    audiol.play() ;
             break ;       
                    
                     
    
        default: console.log(buttoninnerHTML) ;
            break;
    }

}

function  buttonanimation(currentkey) {

        var activeButton = document.querySelector("."+currentkey) ;
        activeButton.classList.add("pressed") ;

        setTimeout(function() {
                activeButton.classList.remove("pressed") ;
        },100) ;

}