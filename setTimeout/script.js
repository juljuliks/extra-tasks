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
    if(startBtn.textContent !== 'Остановить') startBtn.textContent = 'Начать';
})







// let animateInterval,
// count = 0;

// let popupAnimate = function () {
//     animateInterval = requestAnimationFrame(popupAnimate);
//     count++;
//     console.log(count);
//     if (count < 17) {
//         popupContent.style.left = count * 30 + 'px';
//         // count = 0;
//     } else {
//         cancelAnimationFrame(animateInterval)
//     }



// popUp.style.display = 'block';
//                 popupContent.style.left = '0%';
//                 animateInterval = requestAnimationFrame(popupAnimate);
