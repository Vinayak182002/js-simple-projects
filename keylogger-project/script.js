const logDiv = document.getElementById("log");
const stateDiv = document.getElementById("state");
const startBtn = document.getElementById("start-btn")
const stopBtn = document.getElementById("stop-btn");

startBtn.addEventListener("click",(event)=>{
    document.addEventListener("keydown",handleDown)
    document.addEventListener("keyup",handleUp)
    startBtn.disabled = true;
    stopBtn.disabled = false;
})

stopBtn.addEventListener("click",(event)=>{
    document.removeEventListener("keydown",handleDown)
    document.removeEventListener("keyup",handleUp)
    logDiv.textContent = "";
    stateDiv.textContent = "";
    stopBtn.disabled = true;
    startBtn.disabled = false;
})

function handleDown(o){
    logDiv.textContent = `Key ${o.key} pressed down`;
    stateDiv.textContent = 'Key is down';
}

function handleUp(o){
    logDiv.textContent = `Key ${o.key} pressed up`;
    stateDiv.textContent = 'Key is up';
}
