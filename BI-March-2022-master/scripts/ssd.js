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
alert(b.length)

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

function form (a,b,c){
   
     return (-b - Math.sqrt(Math.pow(b,2) - 4*a*c) )/2*a 
     return(-b + Math.sqrt(Math.pow(b,2) - 4*a*c) )/2*a

}
res=form(1,5,6)
console.log(res)*
let a= Number(prompt("enter the number"))
let b=Number(prompt("enter the number"))
let c=Number(prompt("enter the number"))
let root1= (-b + Math.sqrt(Math.pow(b,2) - 4*a*c) )/2*a 
let root2= (-b - Math.sqrt(Math.pow(b,2) - 4*a*c) )/2*a 
alert(`${root1.toFixed(2)}and${root2.toFixed(2)}`)
//


function sortByOccurences(arr) {
    // create a new map
    let map = new Map();
    console.log(map)
    let count = 1;
    console.log(count)
    let len = arr.length;
    console.log(length)
    // set the element and count in map
    for (let i = 0; i < len; i++) {
        // if map have this element then count + 1
        if (map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1)
        }
        // else set the count as 1
        else {
            map.set(arr[i], count)
        }
    }
    // assign the map as 2D array
    let newArray = [...map];
    console.log(newArray)
    //sort the elements in decending order
    newArray.sort((a, b) => (b[0] - a[0]))
    console.log(newArray)
    //sort the occurence in decending order
    newArray.sort((a, b) => (b[1] - a[1]))
    console.log(newArray)
    let result = newArray.map(x => x[0])
    console.log(result)
    return result;
}

let arr = [3, 3, 4, 4, 7, 8]
console.log(sortByOccurences(arr));*/

// JavaScript Program to search an element
//in a sorted and pivoted array*/

// Standard Binary Search function*/
/*function binarySearch( arr, low,
				high, key){
	if (high < low)
		return -1;

	let mid = Math.floor((low + high) / 2); /*low + (high - low)/2;*
	if (key == arr[mid])
		return mid;

	if (key > arr[mid])
		return binarySearch(arr, (mid + 1), high, key);

	// else
	return binarySearch(arr, low, (mid - 1), key);
}

//Function to get pivot. For array 3, 4, 5, 6, 1, 2
//it returns 3 (index of 6) *
function findPivot( arr, low, high){
	// base cases
	if (high < low)
		return -1;
	if (high == low)
		return low;

	let mid = Math.floor((low + high) / 2); /*low + (high - low)/2;*
	if (mid < high && arr[mid] > arr[mid + 1])
		return mid;

	if (mid > low && arr[mid] < arr[mid - 1])
		return (mid - 1);

	if (arr[low] >= arr[mid])
		return findPivot(arr, low, mid - 1);

	return findPivot(arr, mid + 1, high);
}*

//Searches an element key in a pivoted
//sorted array arr[] of size n *
function pivotedBinarySearch( arr, n, key){
	let pivot = findPivot(arr, 0, n - 1);

	// If we didn't find a pivot,
	// then array is not rotated at all
	if (pivot == -1)
		return binarySearch(arr, 0, n - 1, key);

	// If we found a pivot, then first compare with pivot
	// and then search in two subarrays around pivot
	if (arr[pivot] == key)
		return pivot;

	if (arr[0] <= key)
		return binarySearch(arr, 0, pivot - 1, key);

	return binarySearch(arr, pivot + 1, n - 1, key);
}

// Driver program to check above functions *
// Let us search 3 in below array
let arr1 = [ 5, 6, 7, 8, 9, 10, 1, 2, 3 ];
let n = arr1.length;
let key = 3;
// Function calling
document.write( "Index of the element is : "
		+ pivotedBinarySearch(arr1, n, key));
        /*PROBLEM NO12

let arr1 =[2,6,12,20,30] ;
let n = prompt('enter the n');
let key = (arr1[n])
alert(key)*
let users=["john","peter","henry","mary","justin","emelia"]
let new_users=users.slice(1)//returns new array with the sliced elements
let user1=users.slice(1,4)
let user2=users.slice(-5,-1)
console.log(new_users)
console.log(users)
console.log(user2)
console.log(user1)*
let users=["john","peter","henry"]
console.log(users)
users.push("mary")
console.log(users)
users.push("justin","xyz")
console.log(users)
b=users.pop()
console.log(b)
console.log(users)
users.shift()
console.log(users)
users.unshift("shruthi","jaya")
console.log(users)
let str="231*+9-"
a=str.charAt(0)
console.log(a)*/
let arr1 =[2,6,12,20,30] ;
let n=5
let b=n-1
    /*if (b==1){
        b=n-1
    }*/
let key = (arr1[b])
console.log(key)