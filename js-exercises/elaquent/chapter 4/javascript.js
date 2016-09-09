//chapter 4
function chapter4(){

	//problem 1
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

	// problem 2
	function ranges(start, end){
		var total = 0;
		var number1 = [];
	for(i=start;i <end; i++){
		 number1.push(i+1);
		 //console.log(number1)
		total= total+ Number(number1[i]);
		}
		return total;
}

console.log(ranges(0, 10));
	//problem 3
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
//add a helper function

function nth(list, n){
	if(n==0)
		return list
		else{
			return nth(list.next, n-1)
		}
	}
console.log(nth(list,1));


	//problem 4
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
}
console.log(chapter4());
