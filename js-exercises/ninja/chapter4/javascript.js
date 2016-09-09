//chapter 4
function chapter4(){
	//problem 1
	function fb(value){
		if(value<=  2){
			return 1;
		}else{
			return fb(value-1) + fb(value-2);
		}
	}
	console.log(fb(9));
	
	//problem 2
	var arr = [ 1, 3, 5, 7]; 
	var sum = addRec (arr); // 16 
	function addRec(arr){
		return arr.length>1 ? arr.pop() + addRec(arr):arr[0];
	}
	console.log(sum);
	
	//problem 3
	function getter(num){
		var x = num;
		return x;
	}
	function setter(num){
		if(isNaN(num)){
			console.log('this is not a number');
			return;
		}else{
			return getter(num);
		}
	}
	console.log(setter(1));
	
	//problem 4
	function test(obj){
		var value = {}.toString.call(obj).split(' ')[1].slice(0, -1).toLowerCase();
		return console.log(value);
	}
	function typeOf (value) {
		for(var i = 0; i < ataType.length; i++){
			test(ataType[i]);
		}
	}
	var ataType = [1, 6.2831, 'pi*2', [function(){}, 1], {}, function () {}];
	console.log(typeOf(ataType));

	//problem 5
	function distance(x1, x2, y1, y2, z1, z2){
		if((x1===null)||((x2===null))||((y1===null))||((y2===null))){
		   return console.log('One or more of the values were not numbers');
		}
		if(isNaN(x1)||(isNaN(x2))||(isNaN(y1))||(isNaN(y2))){	
			return console.log('One or more of the values were null');
		}
		if((z1===null) ||(z2===null)){
		    return Math.sqrt(Math.pow((x1-x2),2) + Math.pow((y1-y2),2));
		}   
		return Math.sqrt(Math.pow((x1-x2),2) + Math.pow((y1-y2),2) + Math.pow((z1-z2),2));
	}
	console.log(distance(1, 2, 2, 2, 1, 4));

	//problem 6
	function distance(x1, x2, y1, y2){
		if((x1===null)||((x2===null))||((y1===null))||((y2===null))){
		   return console.log('One or more of the values were not numbers');
		}
		if(isNaN(x1)||(isNaN(x2))||(isNaN(y1))||(isNaN(y2))){   
		 return console.log('One or more of the values were null');
		}
		return Math.sqrt(Math.pow((x1-x2),2) + Math.pow((y1-y2),2));
	}
	console.log(distance(1, 2, 2, 2));
}

console.log(chapter4());