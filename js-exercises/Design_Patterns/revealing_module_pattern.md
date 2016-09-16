//revealing module pattern

var iPhoneSecrets = (function(days){

var modelNo = "iPhone 43",
cost = 99999,
pubVar = "";

	var setLife= function(){
		pubVar=  Math.floor(arguments[0]/12);
	};
	
	var publicInfo = function(){
		privateFn();
	};
	var privateFn = function(){
		console.log("the "+modelNo+ " will break in "+pubVar+" days.");
	};



return {
	checkLife: setLife,
	getCheckLife: publicInfo
};
	
})();
iPhoneSecrets.checkLife(365);
iPhoneSecrets.getCheckLife();
 
//output.
//the iPhone 43 will break in 30 days. 

https://repl.it/Dage/1