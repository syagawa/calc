
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

    var numnum = 0;
    for(var ii = 0; ii < i; ii++){
      numnum += ii;
    }

    arr.push(num + numnum);

  }

  return arr;

};

timesAndAddIncrement(0, 5, 100);