let play = document.getElementById('play');
let pause = document.getElementById('pause');
let audioControls = document.getElementById('audioControls');


play.addEventListener('click', function(){

    // This is the class that activates the elements if the play button is clicked
    document.body.classList.add("spelen");

    // Play the music
    document.getElementById('soundTrack').play();
});

pause.addEventListener('click', function(){

    // This removes the class that activates everything
    document.body.classList.remove("spelen");
    
    // Pause the music
    document.getElementById('soundTrack').pause();
});

document.querySelector(".yellowLight").addEventListener("click", function(event){
    // This manipualates the lights
    document.body.classList.toggle("yellowLight");
});

document.querySelector('.blueLight').addEventListener("click", function(event){
    // This manipualates the lights
    document.body.classList.toggle("blueLight");
});

document.querySelector('.orangeLight').addEventListener("click", function(event){
    // This manipualates the lights
    document.body.classList.toggle("orangeLight");
});

audioControls.addEventListener('click', 
    function(event){
        document.body.classList.toggle("show");
    }
);




//OLD

// play.addEventListener('click', 
//     function (event) {         
//         //Play the music
//         document.getElementById('soundTrack').play();
        
//         //Turn the pause animation off
//         document.querySelector('.cat-head').classList.remove('pause-animation');
//         document.querySelector('.arm:nth-of-type(1)').classList.remove('pause-animation');
//         document.querySelector('.arm:nth-of-type(2)').classList.remove('pause-animation');

//         //Put classes on the element that have you move
//         document.querySelector('.cat-head').classList.add('play-animation-5sec');
//         document.querySelector('.arm:nth-of-type(1)').classList.add('play-animation-5sec');
//         document.querySelector('.arm:nth-of-type(2)').classList.add('play-animation-5sec');


//     }
// );

// pause.addEventListener('click', 
//     function (event) {
        
//         //Pause the music
//         document.getElementById('soundTrack').pause();
        
//         //Pause the element that are moving
//         document.querySelector('.cat-head').classList.add('pause-animation');
//         document.querySelector('.arm:nth-of-type(1)').classList.add('pause-animation');
//         document.querySelector('.arm:nth-of-type(2)').classList.add('pause-animation');
//     }
// );

