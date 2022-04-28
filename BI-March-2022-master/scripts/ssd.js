/*
///  to find the factorial of a number

// take input from the user
const number = prompt("enter the number")

// checking if number is negative
if (number < 0) {
    console.log("Error! please enter the positive no.")
}

// if number is 0
else if (number === 0) {
    console.log(`The factorial of ${number} is 1`)
}

// if number is positive
else {
    let fact=1
    for (let i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log(fact);
}

// factorial using function
const factorial=(N)=> {
    //base case for 0!
    if (N == 0 || N == 1) {
        return 1;
        //recursion case
    } else {
        return N * factorial(N - 1);
    }
}
const N =prompt("enter the number")
answer = factorial(N)

console.log(`The factorial of ${N} is ${answer}`)*
const n=prompt ("enter the number")
if(n==0){
    alert(0) 
}
else if(n<0){
    alert("enter the positive number")
}
else{
     a=n*n*n
   alert(`cube of the number ${a} `)
}*
let a=prompt("enter the lenght of side")
let formulae=1/4*Math.sqrt(3)*Math.pow(a,2)
area=formulae.toFixed(2)
alert(`area of the equilateral triangle is ${area})
*
//conert celcias into the farenhite
let celcias=prompt("enter the temprature in celcias")
let fofc_f=celcias*9/5+32
let farenhite=fofc_f.toFixed(2)
alert(`temprature in farenhite is ${farenhite}`)
console.log(typeof i)
const number=10
let sum=0
for(let i=1;i<=number;i++)
{ 

sum =i+sum


}
console.log(sum)
   
let N=Number( prompt('enter the no.'))
if(N==0){
    console.log("0")
}
else if(N<0){
    console.log("Error")
}
else{
    console.log(Math.pow(N,2))
}

for(let i=0;i<=10;i++){
    s=i*i
    
}
console.log(s)
//8
let A = prompt("Type somthing")
let b=(A.replace(/ /g,''))
alert(b.length)*/

//4
let month=Number(prompt("enter the month"))
switch(month){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        alert('31')
        break
     case 4:
     case 6:
     case 9:
     case 11:
     alert('30')
     break
     case 2:
         alert("28") 
         break  
                                                                        

    default:
        alert("enter values only upto 12")
        break
}
