const Seconds = document.getElementById('seconds');
const MilliSeconds = document.getElementById('milliseconds');
const Start = document.getElementById('start');
const Stop = document.getElementById('stop');
const Reset = document.getElementById('reset');

let sec = 0;
let millisec = 0;
let timeInterval;

const Timer = () => {
    millisec++;

    if(millisec < 9){
        MilliSeconds.innerHTML = `0 ${millisec}`;
    }
    if(millisec > 9){
        MilliSeconds.innerHTML = millisec;
    }
    if(millisec > 99){
        sec++;
        Seconds.innerHTML = `0 ${sec}`;
        millisec = 0;
        MilliSeconds.innerHTML = `0 ${millisec}`
    }

    if(sec > 9){
        Seconds.innerHTML = sec;
    }
}

// Start
Start.addEventListener('click', ()=>{
    timeInterval = setInterval(Timer, 10);
});

// Stop
Stop.addEventListener('click', () => {
    clearInterval(timeInterval);
})

// Reset
Reset.addEventListener('click', () => {
    clearInterval(timeInterval);
    sec = "00";
    millisec = "00";
    Seconds.innerHTML = sec;
    MilliSeconds.innerHTML = millisec;
})