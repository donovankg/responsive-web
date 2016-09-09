//chapter 2
function chapter2(){
	// problem 1
	var thing ="#";
	var i;
	for (i = 0; i < 7; i++){
		console.log(thing);
		thing = thing+"#";
	}
	//problem 2
	var string = 1;
	var threes;
	var fives;
	for (v =0; v<100;v++){
		if((string%3===0)&&(string%5===0)){
			console.log("FizzBuzz");
		}
		else if(string%3===0){
		console.log("Fizz");
		}else if(string%5===0){
			console.log("Buzz");
		}else{
			console.log(string);
		}
		string++;
	}
	//problem 3
	var output ="";
	var space;
	for(j=0; j< 8;j++){
		for(i = 1; i < 5; i++){
			output = output +"#"+ " ";
		}
			if(j%2===0){
				space="";
			}else{
				space=" ";
			}
		console.log(space+output);
		output="";
	}
}
console.log(chapter2());
