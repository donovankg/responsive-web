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