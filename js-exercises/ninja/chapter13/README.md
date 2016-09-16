1. Create a 5 x 5 grid (use tables or divs.) Each element of the grid will be sequentially numbered and each element must respond to a click event by alerting its corresponding number. 

  Event assignment, and delegation.
	```javascript
	var section = document.getElementsByTagName('section')[0];
	var count = 1;
	for(var i = 0;i < 25; i++){
	var div = document.createElement('div');
	div.innerHTML = count;
	section.appendChild(div);
	count++;
	}
	
	section.addEventListener('click',doThis,false);
	
	
	function doThis(event){
		console.log(event);
		alert(event.target.innerHTML);
	}
	
	```


2. Create a button that can only be used 3 times. Indicate the usage of the button using the meter element. Once the button has been pressed three times, it must not activate again. 

  Removing events, closures, and form element usage.  
	```javascript
		var button = document.getElementsByTagName('button')[0];
		var meter = document.getElementsByTagName('meter')[0];
		
		
		button.addEventListener('click',fn,true);
		function removeEvent(){
			button.removeEventListener('click',fn,true);
		}
		function fn(event){
			
			meter.value ++;
			if(meter.value === 3 ){
				removeEvent();
			}
		}
		
	```
	https://repl.it/D2jd
