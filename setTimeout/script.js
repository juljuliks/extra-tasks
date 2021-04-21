let img = document.querySelector('#img'),
startBtn = document.querySelector('#start'),
resetBtn = document.querySelector('#reset')
count = 0;

let flyInterval;

let flyAnimataion = function() {
    flyInterval = requestAnimationFrame(flyAnimataion);
    count++;
    if(count < 350) {
        img.style.top = count + 'px';
    } else {
        cancelAnimationFrame(flyInterval)
    }
    console.log(count);
}
let animate = false;
startBtn.addEventListener('click', function() {
    if (!animate) {
        startBtn.textContent = 'Остановить';
        flyInterval = requestAnimationFrame(flyAnimataion);
        animate = true;
    } else {
        startBtn.textContent = 'Продолжить';
        animate = false;
        cancelAnimationFrame(flyInterval)
    }
});

resetBtn.addEventListener('click', function() {
    img.style.top = '0';
    count = 0;
    startBtn.textContent = 'Начать';
})