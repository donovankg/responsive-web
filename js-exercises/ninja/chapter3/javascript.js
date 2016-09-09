//chapter 3

function chapter3(){
	
	//problem 1
	function multi(one, two){
		    var temp= one * two;
		    return (temp-(Math.floor(temp/13)*3));
		}

	var answer = multi (9,6);
	console.log(answer);
	//problem 2
    var list= [1, 4, 6, 7, 2];
	var total= 0;
	function add(array){
	    function subadd(array){
	    	for(var i =0; i < list.length; i++)
	    	total=total+list[i];
	    	return total;
		}
		return subadd(array);
	}
	console.log(add(list));

	//problem 3
	var myMath = {
	one   :1,
	two   :2,
	three :3,
	adds: function(){
		return this.one + this.two + this.three;
		},
		mul: function(){
			return this.one * this.two * this.three;
		},
		fact: function(){
			return this.one / this.two / this.three;
		}
	}
	console.log(myMath.adds());
	console.log(myMath.mul());
	console.log(myMath.fact());

	//problem 4
	image={
		name: 'myImage',
		width: 40,
		height: 40,
		data: Array(4,4),
		pixelData: Array(20, 4),
		report:function(){
			console.log(this)
		}
	};
	console.log(image.report());

	//problem 5
	function printObjProp(test, check){
		var output ="";
		for(var key in obj){
			if((check!==true)||(key!=='c')){
			if(obj.hasOwnProperty(check)===false){
				 output= output +' '+key;
				}
			}
		}
		console.log(output);
	}
	function CustomObject (a, b) { 
	  this.a = a; 
	  this.b = b;
	} 
	CustomObject.prototype.c = function () { return this.a + this.b; };
	var obj = new CustomObject (1, 2);
	printObjProp (obj); // output: a, b, c
	printObjProp (obj, false); // output: a, b, c 
	printObjProp (obj, true); // output: a, b 
}

console.log(chapter3());