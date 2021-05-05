const calculator = {
    res: document.querySelector('#res'),
    a:document.querySelector('#a'),
    b:document.querySelector('#b'),

    sum: function(){
      let sum = +a.value + +b.value;
      res.value = sum;
    },

    mult: function(){
        let mult = a.value * b.value;
        res.value = mult;
    },

    show: function(){
        document.querySelector('#sum').addEventListener('click', this.sum)
        document.querySelector('#mult').addEventListener('click', this.mult);
    }
  }

  calculator.show();
  