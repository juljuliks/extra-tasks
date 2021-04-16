const DomElement = function(selector, height, width, bg = '#ccc', fontSize = '14px') {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
}

DomElement.prototype.createElement = function() {
    let selector = this.selector.split('')[0];
    let div = document.createElement('div');
    if (selector === '.') {
        document.body.appendChild(div);
        div.setAttribute('class', this.selector);
    } else if ((selector === '#')) {
        document.body.appendChild(div);
        div.setAttribute('id', this.selector);
    };
    div.textContent = 'я элемент';
    div.style.cssText = `text-align: center; display: inline-block; height: ${this.height}px; width: ${this.width}px; background: ${this.bg}; fontSize: ${this.fontSize} px; margin-left: 30px`;
}

const firstElem = new DomElement('.square', '150', '150', 'green', 16);
firstElem.createElement();

const secondElem = new DomElement('#big-square', '200', '200', 'red', 14);
secondElem.createElement('fsd');

