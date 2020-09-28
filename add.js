var add = function(a,b){
    return a+b;
}
// console.log((add(10,20)));

function complex(sum){
    console.warn(sum(50,100));
}
complex(add);