/*let users=["john","peter","henry"]
console.log(users)
users.push("mary")
console.log(users)
users.push("justin","xyz")
console.log(users)
users.pop()
console.log(users)
users.shift()
console.log(users)
users.unshift("shruthi","jaya")
console.log(users)
console.log(users)*
function rotateLeft(arr){

    let first = arr.shift();
    arr.push(first);
    return arr;
}
;
;
function printArray(arr, size)
{
    for (let i = 0; i < size; i++)
        document.write(arr[i] + " ");
}
let arr = [1, 2, 4, 5,6,7]
console.log(rotateLeft(arr));
console.log(printArray(arr, 2))
*/
let arr = [1,2,3,4,5,6,7]
a=7,2
if(a===7,2){
function rotateLeft(arr){

    let first = arr.shift();
    arr.push(first);
    return arr}
    console.log(rotateLeft(arr))
}
//15
function evaluatePostfix(exp)
{
		let stack=[];
		for(let i=0;i<exp.length;i++)
		{
			let c=exp[i];
			
			if(! isNaN( parseInt(c) ))
			stack.push(c.charCodeAt(0) - '0'.charCodeAt(0))
			else
			{
				let val1 = stack.pop()
				let val2 = stack.pop()
				switch(c)
				{
					case '+':
					stack.push(val2+val1)
					break
					
					case '-':
					stack.push(val2- val1)
					break;
					
					case '/':
					stack.push(val2/val1)
					break
					
					case '*':
					stack.push(val2*val1)
					break
			}
			}
		}
		return stack.pop()
}

let exp=prompt(`531\*+9-`)
alert("postfix evaluation: "+evaluatePostfix(exp))
