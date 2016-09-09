# chapter 4 book work for Elaquent

problem 1.
```javascript
//code
	var newArray = [2, 3, 5, 7, 11];
	var newArr =[];
	function test(){
		var count = 0;
		var test = 4;
		for(var i = newArray.length; i >= 0; i--)
			{
				newArr.push(newArray[i]);
				count++;
			}
		return newArr.splice(1);
	}
	console.log(test());
	console.log(newArray);
//output
//[ 11, 7, 5, 3, 2 ]
//[ 2, 3, 5, 7, 11 ]
```
problem 2.
```javascript
//code
	function ranges(start, end){
		var total = 0;
		var number1 = [];
  	for(i=start;i <end; i++){
	    number1.push(i+1);
	    total= total+ Number(number1[i]);
		}
		return total;
}
console.log(ranges(0, 10));
//output
//55
```
problem 3.
```javascript
//code
var list={
		value:1,
		next: {
			value:2,
			next: {
				value:3,
				next: null
			}
		}
	}
function nth(list, n){
	if(n==0)
		return list
		else{
			return nth(list.next, n-1)
		}
	}
console.log(nth(list,1));
//output
//{ value: 2, next: { value: 3, next: null } }
```
problem 4.
```javascript
//code
var car1={
		color: "red",
		type: "car",
		make: {
			tires: 4,
			doors: 2,
			year: 1998
		}
	}
	var car2={
		color: "blue",
		type: "truck",
		make: {
			tires: 4,
			doors: 4,
			year: 2001
		}
	}

	function deepEqual(car1, car2){
		for(var key1 in car1){
			console.log(`Object1.${key1} contains ${car1[key1]}`);
			if(typeof car1[key1]=='object'){
				deepEqual(car1[key1], car2);
			}
		}
		for(var key2 in car2){
			console.log(`Object2.${key2} contains ${car1[key2]}`);
		}
	}
	deepEqual(car1, car2); 
//output
//Object1.color contains red
//Object1.type contains car
//Object1.make contains [object Object]
//Object1.tires contains 4
//Object1.doors contains 2
//Object1.year contains 1998
//Object2.color contains undefined
//Object2.type contains undefined
//Object2.make contains undefined
//Object2.color contains red
//Object2.type contains car
//Object2.make contains [object Object]
```
