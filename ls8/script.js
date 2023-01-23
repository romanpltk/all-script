// document.body.childNodes[0].style.backgroundColor='red';
// let el=document.getElementById('header');
// el.style.fontSize='30px';
// let text= document.getElementsByClassName('text');
// console.log(text);
// let arrText=document.getElementsByTagName('p');
// console.log(arrText);
let text=document.getElementsByTagName('h1');
text[0].style.color='blue';
text[1].style.color='yellow';
text[2].style.color='red';
let ptext=document.getElementsByTagName('p');
for(let i=0;i<ptext.length;i++){
    if(i%2==0){
        ptext[i].style.backgroundColor='red';
    }
}
let text1= document.getElementsByClassName('blue');
for(let item of text1){
    item.style.color='yellow';
}
let text2= document.getElementsByClassName('red');
for(let item of text2){
    item.style.color='red';
}



// let el=document.querySelector('h1');
// console.log(el);