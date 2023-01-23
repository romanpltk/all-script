function zd1(num1,num2){
if(num1>num2){
    return num1;
}
else{
    return num2;
}
}
console.log(zd1(Math.random()*(100-0)+0,Math.random()*(100-0)+0));
let num=+prompt('number');
zD2(num);
function zD2(val){
for(let i=1;i<10;i++){
    num *= i;
    console.log(num);
}
}
let Name=prompt('name');
zD3(Name);
function zD3(val1){
    console.log(`hi, ${val}`);
}

