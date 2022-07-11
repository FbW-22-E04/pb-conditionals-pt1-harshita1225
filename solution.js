//task -1
let int1=7;
let int2 = 89;

if( (int1 >=50 && int1<=99) || (int2 >=50 && int2<=99)){
    console.log(` From ${int1},${int2} one  or both of them is in the range of 50 to 99`);
}
else{
    console.log(`${int1}  and ${int2} none of them is  in the range of 50 to 99`);
}

console.log('------------------');
////task -2
let int3=99;
if( (int1 >=50 && int1<=99) || (int2 >=50 && int2<=99)|| (int3 >=50 && int3<=99)){
    console.log(` From ${int1},${int2}, ${int3} one  or all of them are in the range of 50 to 99`);
}
else{
    console.log(`${int1}  and ${int2} and ${int3} none of them is  in the range of 50 to 99`);
}

console.log('------------------');

//task -3

let a = 25;
let b = 48;
let c = 1;

if(a>b && a>c){
    console.log(`${a} is the maximum of all`);
}
else if (b>a && b>c){
    console.log(`${b} is the maximum of all`);
}
else{
    console.log(`${c} is the maximum of all`);
}


//same condition with int values

if(int1>int2 && int1>int3){
    console.log(`${int1} is the maximum of all`);
}
else if (int2>int1 && int2>int3){
    console.log(`${int2} is the maximum of all`);
}
else{
    console.log(`${int3} is the maximum of all`);
}


console.log('------------------');

//task -4

let str = "thon";

if( (str.charAt(0)=== 'P' || str.charAt(0)=== 'p') &&  (str.charAt(1)=== 'Y' || str.charAt(1)=== 'y') ){

    console.log(`${str}`);

}
else{
console.log(`Py${str}`);
}

//task -5

const sumInt1Int2 = int1 + int2;

if(sumInt1Int2 > 50 && sumInt1Int2 < 80){
    console.log(`print 65`);
}
else{
    console.log(`print 80`);
}

console.log(`------------------------`);
//task -6
let int4 = 22;
let int5 = 22;
if(int4- int5 === 8 || int4-int5 ===-8 || int4+int5 ===8){
    console.log(`True ,the sum or difference of ${int4} and ${int5} is 8`);
}
else{
    console.log(`False, the sum or difference of ${int4} and ${int5} is not 8`);
}
console.log(`------------------------`);

//task -7

if(int4 + int5 === 15 || int4 === 15 || int5 ===15 ){
    console.log(`True,either one or sum of bot is 15 `);
}
else{
    console.log(`False ,neither one nor some of both is 15`);
}
console.log(`------------------------`);
//task -8


if(int4 % 7 === 0 || int4 % 11 === 0 || int5 % 7 === 0 || int5 % 11 ===0){
    console.log(`True ,either ${int4} or ${int5} or both are mulitple of 7 or 11 `);
}
else{
    console.log(`False, neither ${int4} nor ${int5} are multiple of 7 or 11`);
}
console.log(`------------------------`);

//task -9
if( int4 === int5){
    console.log(`9.the result is:`, (int4 +int5 )*3);
}
else {
    console.log(`9.the result is:`, (int4 +int5 ));
}
console.log(`------------------------`);


//task -10

console.log(` 10. the value is :`, int5 > 19 ? (int5-19)*2 : (int5 - 19)) ;
console.log(`------------------------`);


//task -11 Bonus


let firstName = "nina";
let age = "33";
if( age <13 ){
    console.log(` ${firstName} is a child`);
}
else if( age >= 13 && age < 20 ){
    console.log(` ${firstName} is a teenager`);
}

else if( age >= 20 && age < 30 ){
    console.log(` ${firstName} is a young adult`);
}
else{
    console.log(` ${firstName} is an adult`);
}

console.log(`------------------------`);

//task -12 Bonus



console.log(`------------------------`);