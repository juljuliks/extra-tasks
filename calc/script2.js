function getResult(x,y){
    let result;
        pow = x**y;
        result = 0;
        
    pow = pow.toString().split('');
    console.log(pow);
    pow.forEach(num => {
        result += +num;
    })
    return result;
  }
  
  console.log(getResult(4, 8))