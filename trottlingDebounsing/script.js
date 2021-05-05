const input = document.querySelector('input'),
p = document.querySelector('p');


const debounce = (fn, delay) => {
    let timoutId;
    return function() {
        if(timoutId) {
            clearTimeout(timoutId)
        }
        timoutId = setTimeout(function() {
            fn()
        }, delay)
    }
}

input.addEventListener('keydown', debounce(e => {
    p.textContent = input.value;
}, 300));