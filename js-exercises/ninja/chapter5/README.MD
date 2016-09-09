1. Implement the following: 
  1. A bank that holds client’s information: 
    1. account number; 
    2. balance 
  2. A set of clients where each can: 
    1. hold money of their own; 
    2. deposit money into the bank (to any account); 
    3. retrieve money from the bank (from personal account only); 
    4. view current balance in bank (from personal account only) 
  3. A client cannot deposit more money than what it has; 
  4. A client cannot retrieve more money that what is in its account; 
  5. All financial information must be private 
  
  Use of closures  

```javascript


var bankIstance = new Bank("myBank"); 
var user1 = bankIstance.newUser('asd',100,'pass1');
var user2 = bankIstance.newUser('asd',200,'pass2');
function Bank(name){

	var id = 0;
	var accounts={};
	this.newUser = function(user, balance, key){
		var accId = id++;
		accounts[accId]={
			name: user,
			balance: balance,

		};
		return {
			getBalance:function(pass){
				if(key != pass){
					return 'password is incorrect';
				}
				return accounts[accId].balance;
				},
			getWithdrawl:function(pass,amount){
				if(key != pass){
					return 'password is incorrect';
				}
				if(amount > accounts[accId].balance){
					return 'your account lacks the amount of funds for this transaction';
				}
				accounts[accId].balance-=amount;
				return accounts[accId].balance;
				
				},
			getDeposit:function(pass, amount){
				if(key != pass){
					return 'password is incorrect';
				}
				accounts[accId].balance+=amount;	
				return accounts[accId].balance;
				},
		};
	};
}
	//user 1
	console.log(user1.getBalance('pass1'));//shows balace
	console.log(user1.getDeposit('pass1',50));//deposits into account
	console.log(user1.getWithdrawl('pass1',15));//withdrawls from account
	console.log(user1.getBalance('pass1')); //shows balance
	console.log(user1.getDeposit('key',50));//incorrect password
	console.log(user1.getWithdrawl('pass1',15));//withdrawls from account
	//user 2
	console.log(user2.getDeposit('pass2',50));//incorrect password
	console.log(user2.getWithdrawl('pass2',15));//withdrawls from account



```



2. Implement the following: 
  
  A large building has many people and pieces of equipment. A new tech­support employee has been hired to help out solve users’ problems and fix broken 
  equipment. The new employee is still unfamiliar with the layout but is doing his best to keep track of where everyone and everything is. 
    1. Implement a structure that represents the building. 
    2. Must contain data types representing equipment and users. ii. Equipment can be associated with rooms or specific people 
    3. Each piece of equipment and person is associated with a specific floor and room. 
    4. The new tech­support employee must be able to find users and equipment as quickly as possible. 

  Use of memoization and implementation of a simple searching algorithm. 
  ```javascript
  building={
	F1:{
		R1:["pc","mouse"],
		R2:["pc","mouse"]
	},
	F2:{
		R1:["pc","mouse"],
		R2:["asa","mouse"]
	},
	F3:{
		R1:["pc","mouse"],
		R2:["asa","mouse"]
	},
	F4:{
		R1:["pc","mouse"],
		R2:["asa","mouse"]
	},
	F5:{
		R1:["pc","mouse"],
		R2:["asa","mouse"]
	}
};

var searchFn=function(obj,value){
	var room;
	var floor;
	var result=[];
	function search(obj,value){
		for(var key in obj){
			if(Array.isArray(obj[key])){
				room=key;
				for(var i=0;i<obj[key].length;i++){
					if(obj[key][i]==value){
						result.push("Room: "+room+" Floor "+floor);	
					}
				}	
			}else if(typeof obj[key]== 'object'){
				floor=key;
				search(obj[key],value);
			}
		}
	}
	search(obj,value);
	return result;
};

console.log(searchFn(building,'pc'));
  
  ```
