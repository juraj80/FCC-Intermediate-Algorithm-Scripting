function sumAll(arr) {
 
  var min=Math.min.apply(0,arr);
  var max=Math.max.apply(0,arr);
  
  var out=0;
  
  for(var i=min;i<=max;i++){ 
   out+=i;
   }
  
  return console.log(out);
}

sumAll([1, 4]);
