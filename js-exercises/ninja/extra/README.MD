1. Given an array of words, write a function that will sort the array in ascending order. It should also take an optional argument that can customize the sorting order. Custom sorting orders: 
  1. descending 
  2. sort by length ascending/descending 
  3. sort by number of consonants ascending/descending.  
    ```javascript
          //descending
      //sort by length ascending/descending
      //sort by number of consonants ascending/descending.
      
      //part 1
      
      thisArray = [4, 2, 677, 32, 12, 1];
      function doArray(values){
      	var vals = values.sort((function(x, y){
      		return x - y;
      	}));
      	return vals.reverse();
      }
      doArray(thisArray);
      
      //part 2
      
      var part2=['12345','1234','12'];
      
      function checkLength(values){
      //console.log(part2[0].length);
      	console.log(values.sort(function(x, y){
      		return y.length - x.length;
      	}));
      	console.log(values.sort(function(x, y){
      		return x.length - y.length;
      	}));
      }
      
      checkLength(part2);
      
      //part 3
      
      function checks(value){
      	total= 0;
      	run = 0;
      		var checker =/([b-df-hj-np-tv-z])/g;
      		var number= value.match(checker);
      		return number.length;
      }
      	
      var part3 = ['donovan','john','greg','davin'];
      function checkLength(values){
      //console.log(part2[0].length);
      	console.log(values.sort(function(a, b){
      		return checks(a) - checks(b);
      	}));
      		console.log(values.sort(function(a, b){
      		return checks(b) - checks(a);
      	}));
      }
      checkLength(part3);

    
    ```

2. Create a function that can limit the execution of other functions to a determined amount of times.  

 Example: 

  ```javascript
      var limitFunc = function(fn, value){
    	var count = 0;	
    	return function(){
    		if(count < value){
    		count++;
    		fn();
    		}
    	};
    };
    var limited = limitFunc(function(){
    	console.log('this ran');
    },2);
    limited();
    limited();
    limited();

  ```


3. Create a function that will set the color, font­size, and background color of a DOM element. 
  1. If there are fewer arguments, it should place a default value.  
  2. Use the "this" parameter to access the values of the DOM element. (e.g. this.color or this.style.color)
  
	```javascript
	var div = document.getElementsByTagName('div')[0];

	div.new_function = function(setColor,setFontSize,setBGColor){
		if(setColor==undefined){
			setColor='yellow';
		}
		if(setFontSize==undefined){
			setFontSize='25px';
		}
		if(setBGColor===undefined){
			setBGColor='green'
		}
		this.style.color = setColor;
		this.style.fontSize =setFontSize;
		this.style.backgroundColor =setBGColor;
	}
	
	div.new_function('red','30px','lightblue');
	//div.new_function();
	
	```

4. Create a function that can copy either all or specific properties of an object into another. 

 
  ```  
    The functionality should depend on the arguments received.  
    // properties of objB are copied onto objA copyProp​(objA, objB); 
    // only properties p1 and p2 from objB are copied over to objA copyProp​(objA, objB, [​“p1”​, ​“p2”​]);  
  ```

5. Create a function that will: 
  1. return the number of vowels in a string 
  2. return the number of digits in a whole number using logarithm operations. Must be the same function. 
 	```javascript
 	var string = "donovan was here";
	var checkString=function(string){
	var matchThis;
		if(isNaN(string)){
			matchThis= string.match(/[aeiou]/gi);
		}
		var vowelsTot=matchThis.length;
		matchThis= Math.log10(vowelsTot)+1;
		return Math.floor(matchThis);
	
};


checkString(string);

 	```

6. Create a tree structure and a function that will display all of the elements in that tree. The function should not require any change in case the structure changes. 

a. Example of tree structure: 

                A  
             /  |  \ 
           a    b    c 
           |   / \   | \ 
          aa  ba bb  ca  cb 
                         | 
                         cba  
  ```javascript
/*
\\Print Example
    A
      a
        aa
      b
        ba
        bb
      c
        ca
        cb
          cba
*/
		v/*
\\Print Example
    A
      a
        aa
      b
        ba
        bb
      c
        ca
        cb
          cba
*/
		A={
			a:{
				aa:'aa'
			},
			b:{
				ba:'ba',
				bb:'bb'
			},
			c:{
				ca:'ca',
				cb:{
					cba:'cba'
				}
			},
		};
var count = 1;
function makeTree(tree){
	for(var key in tree){
		if(typeof tree[key]==="object"){
			console.log("  ".repeat(count)+(key));
			count++;
			makeTree(tree[key]);
			
		}else{
			console.log("  ".repeat(count)+tree[key]);	
		}
	}
	count--;
	
}
makeTree(A);

  ```
