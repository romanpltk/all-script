// // let obj= new Object();
// let arr=[1,2,3];
// // let obj={
// //     0: 1,
// //     1: 2,
// //     2: 3
// // }
// // console.log(arr[0]);
// // console.log(obj['0']);

// let user={
//     name:'Богдан',
//     surname:'Петров',
//     age: 20,
//     hobby: {
//         it:true,
//         football: false,
//         photo: true
//     }
// };
// console.log(user);
// // user.age=25;
// // user.gender='m';
// // console.log(user);
// // delete user.surname;
// // console.log(user);
// console.log('age' in user);
// for(let item in user){
//     if(typeof user[item]=='object'){
//         for(let key in user[item]){
//         console.log(`ключ ${key}, значение ${user[item][key]                     }`);}
//     }else{
//         console.log(`ключ ${item}, значение ${user[item]}`);
//     }
    
// }
let arr=[
    {name:'Dima',
    age:10,
gender:'m'},
    {name:'Larisa',
    age:23,
gender:'w'},
    {name:'Petya',
    age:40,
gender:'m'}
]
let count=0;
let count2=0;
function aArr(arr){
  for(let i=0;i<arr.length;i++){
if(arr[i].gender=='m'){
    count++;
}
else{
    count2++;
}
  }
}
aArr(arr);
console.log(count, count2);
let count_age=0;
function bArr(arr){
    let yourage=+prompt('age');
    for(let j=0;j<3;j++){
        if(arr[j].age>=yourage){
            count_age++;
        }
    }
}
bArr(arr);
console.log(count_age);