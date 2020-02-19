let play = document.getElementById('play');
let pause = document.getElementById('pause');
let audioControls = document.getElementById('audioControls');


play.addEventListener('click', 
    function (event) {         
        //Speel music af
        document.getElementById('soundTrack').play();
        
        //Haal de puaze animatie weg 
        document.querySelector('.cat-head').classList.remove('pause-animation');
        document.querySelector('.arm:nth-of-type(1)').classList.remove('pause-animation');
        document.querySelector('.arm:nth-of-type(2)').classList.remove('pause-animation');

        //Zet een class zodat bepaalde gedeeltes bewegen
        document.querySelector('.cat-head').classList.add('play-animation-5sec');
        document.querySelector('.arm:nth-of-type(1)').classList.add('play-animation-5sec');
        document.querySelector('.arm:nth-of-type(2)').classList.add('play-animation-5sec');


    }
);

pause.addEventListener('click', 
    function (event) {
        
        //Pauzeer de muziek
        document.getElementById('soundTrack').pause();
        
        //Pauzeer de elmenten die bewegen
        document.querySelector('.cat-head').classList.add('pause-animation');
        document.querySelector('.arm:nth-of-type(1)').classList.add('pause-animation');
        document.querySelector('.arm:nth-of-type(2)').classList.add('pause-animation');
    }
);


audioControls.addEventListener('click', 
    function(event){
        controlDis = document.getElementById('soundTrack').classList.toggle('apare');
    }
);
