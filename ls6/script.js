// let randomNumber=Array.from({length: 6}, ()=>Math.floor(Math.random()*(10-(-10))+(-10)));
// console.log(randomNumber);
// function numArr(randomNumber){
// let count=0;
// for(let i=0;i<6;i++){
//     if(randomNumber[i]<0){
//         count++;
//         break;
//     }
// }
// for(let i=0;i<6;i++){
//     if(count==0){
//         console.log(randomNumber[i]*(-1));
//     }
// }
// }
// numArr(randomNumber);
let arr=['Иван',"strat","солнце","машина",'я учу JS','меня зовут John'];
const alpha=Array.from(Array(26)).map((e,i) => i +65);
const alphabet= alpha.map((x)=>String.fromCharCode(x));
console.log(alphabet);