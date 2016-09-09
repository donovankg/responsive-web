
	var bankInstance = new Bank("mybank");
	var acc = bankInstance.createAccount("long", 1, "hi");
	acc.getNumber("hi");
	var anishacct = bankInstance.createAccount("Anish", 100000, "gohome");
	console.log(anishacct.getNumber("gohome"));

	//Inner funtion
	function Bank(name){
		
		var accounts={};
		var id=1;
		this.name=name;
		this.createAccount=function account(name, balance, key) {
			var accId=id++;
			accounts[accId]={
				name:name,
				amount:balance
			};
		return {
			getNumber: function (key1) {
				if(key==key1)
				return { 
					name: accounts[accId].name,
					amount: accounts[accId].amount
				};
			},	
	//balance
			getBalance: function(key1) {
				if(key==key1)
				return accounts[accId].balance;
			},
	//deposit
			deposit: function(money) {
				balance += money;
				return balance;
			},
	//deposit		
			withdraw: function(cash) {
				if (balance > cash){
					balance -= cash;
					return balance;
				}
			
			return "Insufficient funds";
			}
		};
	};
	
}
