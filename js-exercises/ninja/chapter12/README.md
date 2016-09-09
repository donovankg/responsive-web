1. Given the following HTML markup, create a JS function that can print out the attributes                             of the DOM elements: 
```javascript

<div id=’a’ class=’square’ style=’display:inline­block’ val=’something important’></div> 

//Example: 
printAttr (el, [‘id’, ‘class’, ‘style’, ‘val’]); 
// should print out: 
// a 
// square 
// display:inline­block // something important 

//Example: 
//printAttr (el, [‘id’, ‘class’, ‘style’, ‘val’]); 
// should print out: 
// a 
// square 
// display:inline­block // something important

    function attr(element,name,value){
            name = name.replace(/-([a-z])/ig,
    			function(all,letter){
    				return letter.toUpperCase();
                                });
    
            if (typeof value !== 'undefined') {
            	element[name] = value;
            }
            return element[name];
    		}
    
          window.onload = function(){
          	var div = document.getElementsByTagName('div')[0];
       		assert(true,div.getAttribute('id'));
            assert(true,div.getAttribute('class'));
            assert(true,div.getAttribute('style'));
            assert(true,div.getAttribute('val'));
    
          };
    function assert(value, desc) {
      var resultsList = document.getElementById("results");
      if (!resultsList) {
        resultsList = document.createElement('div');
        document.getElementsByTagName('body')[0].appendChild(resultsList);
        resultsList.setAttribute('id','results');
      }
      var li = document.createElement("li");
      li.className = value ? "pass" : "fail";
      li.appendChild(document.createTextNode(desc));
      resultsList.appendChild(li);
    }
```
Use of built in JS functionality for attribute retrieval 

