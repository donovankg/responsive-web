# chapter 3 book work for Elaquent
problem 1.
```javascript
//code
function min(first,second){
		if(first < second){
			return first + " is less";
		}else if(first > second){
			return second +" is less";
		}else{
			return "the values are equal";
		}
	}
console.log(min(1,2));
//output
//1 is less
```
problem 2.
```javascript
//code
function isEven(number){
		if (number === 0)
			return "even";
		else if(number === 1)
			return "odd";
		else
			return isEven(number - 2);
		}
console.log(isEven(50));
//output
//even
```
problem 3.
```javascript
//code
var string ="this is a tebt Btring";
	function countBs(){
		var countb=0;
		for(i =0; i < string.length; i++){
			if (string.charAt(i)=="B"){
				countb++;
			}	
		}
		return countb;
	}
	function countChar(){
			string = string.toUpperCase();
		var count=0;
		for(i =0; i < string.length; i++){
			if (string.charAt(i)=="I"){
				count++;
			}	
		}
		return count;
	}
	console.log(countBs());
console.log(countChar());
//output
//1
//3
```
problem 4.
```javascript
//code
function fb(number){
		var current = 1;
		var back = 0;
		var newn = 0;
			for(i = 0; i < number;i){
				newn = current + back;
				back = current;
				current = newn;
				number--;
			}
		console.log(current);
		}
fb(6);
//output
//13
```
