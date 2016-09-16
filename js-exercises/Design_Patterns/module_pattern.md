//The Module Pattern example

//this pattern shows practices of taking 

var milesTraveled = (function(){
	var miles = 0;
	return{
		mileCount: function (){
			miles++;
			return miles;
		},
		milesreset: function(){
			return (miles= 0) +' traveled before the value was reset';
		}
	};
})();

console.log(milesTraveled.mileCount()); //1
console.log(milesTraveled.mileCount()); //2
console.log(milesTraveled.mileCount()); //3
console.log(milesTraveled.mileCount()); //4
console.log(milesTraveled.mileCount()); //5
console.log(milesTraveled.milesreset()); //0 traveled before the value was reset
console.log(milesTraveled.mileCount()); //1
console.log(milesTraveled.mileCount()); //2

//output
1
2
3
4
5
0 traveled before the value was reset
1
2

https://repl.it/DabS