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
    div.style.cssText = `position: absolute; top: 200px; left: 200px;
    text-align: center; margin: 30px;
    height: ${this.height}px; width: ${this.width}px; background: ${this.bg}; fontSize: ${this.fontSize}px;`;
}

document.addEventListener('DOMContentLoaded', function() {
    const newElem = new DomElement('.square', '100', '100', 'orange', 16);
    let body = document.body;
    let elem = document.getElementsByTagName('div');
    console.log(elem);
    
    body.style.position = 'relative';
    body.addEventListener('keydown', (event) => {
            console.dir(window.getComputedStyle(elem[0]));
            console.log(event.key);
            if (event.key = 'ArrowDown') {
                elem[0].style.top = '100';
            }
            else if (event.key = 'ArrowUp') {
                elem[0].style.top = '150';
            }
            else if (event.key = 'ArrowLeft') {
                elem[0].style.left = '100';
            }
            else if (event.key = 'ArrowRight') {
                elem[0].style.left = '150';
            }
    });
    document.body.addEventListener('keyup', (event) => {
        elem[0].style.top = '200';
        elem[0].style.left = '200';
    })
    newElem.createElement();
})



