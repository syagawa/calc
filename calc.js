
var timesAndAddIncrement = function(start, base, limit){

  if(!start){
    var start = 0;
  }

  if(!base){
    var base = 5;
  }

  if(!limit){
    var limit = 100;
  }

  var arr = [];

  for(var i = start; i < limit; i++){
    var num = i * base;

    var num2 = 0;
    for(var i2 = 0; i2 < i; i2++){
      num2 += i2;
    }

    arr.push(num + num2);

  }

  return arr;

};

timesAndAddIncrement(0, 5, 100);