const display =
document.getElementById("display");

const led =
document.getElementById("led");

let totalSeconds = 0;

let running = false;

function updateDisplay(){

    const h =
    Math.floor(totalSeconds / 3600);

    const m =
    Math.floor(
        (totalSeconds % 3600) / 60
    );

    const s =
    totalSeconds % 60;

    display.textContent =
        String(h).padStart(2,"0")
        + ":"
        + String(m).padStart(2,"0")
        + ":"
        + String(s).padStart(2,"0");
}

document
.getElementById("hourBtn")
.onclick = () => {

    totalSeconds += 3600;

    updateDisplay();
};

document
.getElementById("minBtn")
.onclick = () => {

    totalSeconds += 60;

    updateDisplay();
};

document
.getElementById("secBtn")
.onclick = () => {

    totalSeconds += 1;

    updateDisplay();
};

document
.getElementById("startStop")
.onclick = () => {

    running = !running;
};

setInterval(()=>{

    if(!running) return;

    if(totalSeconds > 0){

        totalSeconds--;

        updateDisplay();
    }
    else{

        running = false;

        led.classList.add("active");

        setTimeout(()=>{

            led.classList.remove("active");

        },15000);
    }

},1000);

updateDisplay();
