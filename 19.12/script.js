// let text=prompt('text');
// for(let i=1;i<7;i++){
//     let el=document.createElement(`h${i}`);
//     el.innerText=text;
//     el.style.color='blue';
//     document.body.append(el);

// }
// let element=prompt('element');
// let text1=prompt('text');
// let color=prompt('color');
// let el1=document.createElement('element');
// el1.innerText=text1;
// el1.style.color=color;

// document.body.append(el1);

// for(let i=1;i<21;i++){
//     let box=document.createElement('div');
//     box.style.width='10px';
//     box.style.height='10px';
//     box.style.backgroundColor=`rgb(${RC()},${RC()},${RC()})`;
// }

// function RC(){
//     return Math.floor(Math.random() * 256)
// }



function getRandomInt( max){
    return Math.floor(Math.random()* max);

}
function getRandomInts(num){
    let ints=[];
    while(ints.length<num-1){
        let randNum = getRandomInt(36);
        if(!ints.indexOf(randNum)>-1){
            ints.push(randNum);
        }
    }
    return ints;
}
for(let i=1;i<6;i++){
    let ball=document.createElement('div');
    ball.style.backgroundColor='color';
    ball.style.borderRadius='50%';
    ball.style.display='flex';
    ball.style.alignItems='center';
    ball.style.flexDirection='center';
    ball.innerText=getRandomInts(5);
    document.body.append(ball);
}