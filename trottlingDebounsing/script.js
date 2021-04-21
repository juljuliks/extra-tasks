const input = document.querySelector('input'),
p = document.querySelector('p');


const throttle = (fn, delay) => {
    let last = 0;
    return () => {
        const now = new Date().getTime();
        if((now - last) < delay) {
            return;
        }
        last = now;
        return fn()
    }
}

input.addEventListener('keydown', throttle(() => {
    p.textContent = input.value;
}, 300));