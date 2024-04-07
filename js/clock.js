const clock = document.querySelector("#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const secs = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${secs}`;
}
getClock();
setInterval(getClock, 1000);
