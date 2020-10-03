var add = function(a,b){
    return a+b;
}
function complex(sum){
    console.warn(sum(50,100));
}
complex(add);
var sub = require('./sub');
console.log(sub(20,10));