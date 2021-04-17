const DomElement = function (selector, height, width, bg = '#ccc', fontSize = '14px') {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
}

DomElement.prototype.createElement = function(position) {
    let sel = this.selector.split('')[0];
    let newSelector = this.selector.split('').splice(1, 50).join('');
    let div = document.createElement('div');
    if (sel === '.') {
        document.body.appendChild(div);
        div.setAttribute('class', newSelector);
    } else if ((sel === '#')) {
        document.body.appendChild(div);
        div.setAttribute('id', newSelector);
    };
    div.style.position = position;
    console.log(getComputedStyle(div).position);
    console.log(getComputedStyle(div).left);
    console.log(getComputedStyle(div).bottom);

    div.textContent = 'я элемент';
    div.style.cssText = `text-align: center; height: ${this.height}px; width: ${this.width}px; background: ${this.bg}; fontSize: ${this.fontSize}px;`;
}

const newElem = new DomElement('.square', '100', '100', 'orange', '16');
document.addEventListener('DOMContentLoaded',() => {
    newElem.createElement('absolute');
});

window.addEventListener('keydown', function (event) {
    let elem = document.querySelector('.square');
    let computedStyle = getComputedStyle(elem);
    elem.style.left = '100px';
    elem.style.bottom = '100px';

    function callback(step, position) {
        console.log(step);
        console.log(parseInt(position));
        console.log((step + parseInt(position) + 'px'));
        return (step + parseInt(position) + 'px');
    }
    if (event.key = 'ArrowDown') {
        elem.style.bottom = callback(-10, computedStyle.bottom);
    } else if (event.key = 'ArrowUp') {
        elem.style.bottom = callback(10, computedStyle.bottom);
    } else if (event.key = 'ArrowLeft') {
        elem.style.left = callback(-10, computedStyle.left);
    } else if (event.key = 'ArrowRight') {
        elem.style.left = callback(10, computedStyle.left);
    }
})