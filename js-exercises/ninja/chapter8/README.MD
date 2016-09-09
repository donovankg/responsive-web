1. Create a function that will display a random sentence to the console every minute. 
  
  Basic use of timers 
  ```javascript
      var sentences = {
	1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
	2: 'Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
	3: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
	4: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using `Content here, content here`, making it look like readable English.'
};
min = Math.ceil(5);
max = Math.floor(1);
test = 0;
//while (test != 4){
	function minMax(){	
		test  = Math.floor(Math.random() * (max-min))+min;
		console.log(sentences[test]);
	}
var output = setInterval(minMax, 60000);

    console.log(output);
  ```

2. Create functions A, B, and C that execute every 30s, 1min, and 1min 15s respectively.                             Use only 1 timer/interval to control all three functions.  

  use of a central timer controller 
	```javascript
		var timers = {
		      timerID: 0,
		      timers: [],
		      turn: 0,
		      add: function(fn) {
		          this.timers.push(fn)
		  },
		  start: function() {
		    if(this.timerID) return;
		    (function runNext() {
		      if (timers.timers.length > 0) {
		        for(var i = 0; i < timers.timers.length; i++){
		            if (timers.timers[i].addFunction() === false){
		              timers.timers.splice(i,1);
		              i--;
		            }
		        }
		        timers.turn++;
		        timers.timersID = setTimeout(runNext,15000);
		      }
		    })();
		  },
		  stop: function() {
		      clearTimeout(this.timerID);
		      this.timerID = 0;
		  }
		  };
		  timers.add({
		      addFunction:
		          function A() {
		              console.log("A fired");
		          },
		          interval: 2 //2 * 15ms = 30ms
		  });
		  timers.add({
		      addFunction: 
		          function B() {
		              console.log("B fired");
		          },
		          interval: 4// 4 * 15ms = 60ms
		  });
		  timers.add({
		      addFunction: 
		          function C() {
		              console.log("C fired");
		      },
		    interval: 5// 5 * 15ms = 75ms
		  });
		
		  timers.start();
	```
