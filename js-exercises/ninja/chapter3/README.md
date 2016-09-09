#Chapter 3 Exercises
1. Create a function that will multiply two numbers. The function must return the result in base 13. 

    Example: 
    ```javascript
    function multi(one, two){
	    var temp= one * two;
	    return (temp-(Math.floor(temp/13)*3));
	}

var answer = multi (9,6);
console.log(answer);

    ```
    Basic function creation together with built­in JS Math functionality. 

2. Create a function that will return the addition of N numbers. 

    Example: 
    ```javascript
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

    ```
    Dynamic argument list handling with JS 

3. Create an object that will hold methods for adding, multiplying, and factorial operations. 

    Example: 
    ```javascript
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

    ```
    
    Use of anonymous functions and functions as object properties (methods.)  


4. Create a custom object that will hold an image’s mock information such as pixel color                             data, image size, and name. It must be able to return the information. 

    Example:
    ```javascript
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
    ```

5. Create a function that will print out the properties of an object.  

    a. If one parameter is provided, it should print out all of the properties accessible by that object. 
    
    b. If a second, boolean value, parameter is provided, it should only print out the values that belong to the object instance itself if true.  

  Example: 
  ```javascript
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

  ```
