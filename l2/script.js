console.log('1 km = 0,621371 mile');
let dist=+prompt('km');
const mile= 0.621371;
let a=dist*mile;

console.log(`${dist}km = ${a}mile`);
let num=+prompt('число');
if(num >0){
    console.log('число положительное');
}else if(num<0){
    console.log('число отрицательное');
}
else{
    console.log('0');
}
let month=+prompt('номер месяца');
switch(month){
    case 1:console.log('Январь');break;
    case 2:console.log('Февраль');break;
    case 3:console.log('Март');break;
    case 4:console.log('Апрель');break;
    case 5:console.log('Май');break;
    case 6:console.log('Июнь');break;
    case 7:console.log('Июль');break;
    case 8:console.log('Август');break;
    case 9:console.log('Сентябрь');break;
    case 10:console.log('Октябрь');break;
    case 11:console.log('Ноябрь');break;
    case 12:console.log('Декабрь');break;
    default: console.log(false);
}
