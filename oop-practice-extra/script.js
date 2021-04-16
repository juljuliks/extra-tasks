let elem;
const DomElement = function(selector, height, width, bg = '#ccc', fontSize = '14px') {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
}

DomElement.prototype.createElement = function() {
    let sel = this.selector.split('')[0];
    let newSelector = this.selector.split('').splice(1, 6).join('');
    let div = document.createElement('div');
    if (sel === '.') {
        document.body.appendChild(div);
        div.setAttribute('class', newSelector);
    } else if ((sel === '#')) {
        document.body.appendChild(div);
        div.setAttribute('id', newSelector);
    };
    div.textContent = 'я элемент';
    div.style.cssText = `position: absolute; top: 200px; left: 200px; text-align: center; margin: 30px; height: ${this.height}px; width: ${this.width}px; background: ${this.bg}; fontSize: ${this.fontSize}px;`;
}

document.addEventListener('DOMContentLoaded', function() {
    const newElem = new DomElement('.square', '100', '100', 'orange', 16);
    let elem = document.getElementsByTagName('div');
    document.body.addEventListener('keydown', (event) => {
            console.log(event.key);
            if (event.key = 'ArrowDown') {
                elem[0].style.transform = 'translateY(-30px)';
            }
            if (event.key = 'ArrowUp') {
                elem[0].style.transform = 'translateY(20px)';
            }
            if (event.key = 'ArrowLeft') {
                elem[0].style.transform = 'translateX(-30px)';
            }
            if (event.key = 'ArrowRight') {
                elem[0].style.transform = 'translateX(20px)'
            }
    });
    document.body.addEventListener('keyup', (event) => {
        elem[0].style.transform = 'none'
    })
    newElem.createElement();
})



