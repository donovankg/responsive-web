//chapter 3
//problem 1
function chapter3(){
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
	//problem 2
	function isEven(number){
		if (number === 0)
			return "even";
		else if(number === 1)
			return "odd";
		else
			return isEven(number - 2);
		}
	console.log(isEven(50));

	//problem 3
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
	// problem 4
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
}
console.log(chapter3());
