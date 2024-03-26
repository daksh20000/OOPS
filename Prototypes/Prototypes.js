function BankAccount(customername, balance =0){
    this.customerName = customername;
    this.accountNum = Date.now();
    this.balance = balance;
}


BankAccount.prototype.deposit = function(amt){
    this.balance += amt;
}
BankAccount.prototype.withdraw = function (amt){
    this.balance -= amt;
}

const dakshAccount = new BankAccount("Daksh", 1000)
console.log(dakshAccount);
dakshAccount.deposit(5000) 
console.log(dakshAccount);
dakshAccount.withdraw(500)
console.log(dakshAccount);
