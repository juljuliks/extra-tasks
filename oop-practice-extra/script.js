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

    div.textContent = 'я элемент';
    div.style.cssText = `position: ${position}; margin: 0 auto; text-align: center; display: block; height: ${this.height}px; width: ${this.width}px; background: ${this.bg}; fontSize: ${this.fontSize}px;`;
}

const newElem = new DomElement('.square', '100', '100', 'orange', '16');
document.addEventListener('DOMContentLoaded',() => {
    newElem.createElement('absolute');
});

window.addEventListener('keydown', function (event) {
    let elem = document.querySelector('.square');
    let computedStyle = getComputedStyle(elem);

    function callback(step, position) {
        return (step + parseInt(position) + 'px');
    }
    if (event.key == 'ArrowDown') {
        elem.style.bottom = callback(-10, computedStyle.bottom);
    } else if (event.key == 'ArrowUp') {
        elem.style.bottom = callback(10, computedStyle.bottom);
    } else if (event.key == 'ArrowLeft') {
        elem.style.left = callback(-10, computedStyle.left);
    } else if (event.key == 'ArrowRight') {
        elem.style.left = callback(10, computedStyle.left);
    }
});