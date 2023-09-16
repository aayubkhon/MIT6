// MODULE packge CORE

// setTimeout(function(){
//    console.log('ishga tushdi');
// },5000);

// let count = 0;
// setInterval(function(){
//    console.log("hisob",count);
//    count ++;
// },1000);

// const fs = require('fs');
// const data = fs.readFileSync('./input.txt','utf8');
// const {networkingInterfaces} = require('os')
// console.log(data);

// console.log('*************');

// fs.writeFileSync('./input.txt',`${data} \n\t\t By Leo` );
// const new_data = fs.readFileSync('./input.txt','utf8');
// console.log(new_data);



// B-Task: Shunday function tuzing, u 1ta parametr ega bolsin, 
// hamda osha stringda qatnashgan raqamlarni sonini 
// return qilsin. Masalan: getDigits("ag1aw5g6") return qilsin 3


function getDigits(text){
   let count = 0;
   for (let i = 0; i < text.length; i++) {
      if(Number.isInteger(Number(text[i]))){
         count = count + 1;
         
      }
   }
   console.log(count);
}
getDigits('ag1aw5g6');




