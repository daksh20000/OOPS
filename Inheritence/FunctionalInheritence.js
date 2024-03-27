const BankAccount= function(customerName, balance = 0){
    this.customerName = customerName
    this.balance = balance
    this.accountNum = Date.now()

}

BankAccount.prototype.deposit = function(amt){
    this.balance+= amt;
}

BankAccount.prototype.withdraw = function(amt){
    this.balance -= amt;
}

//Current Account

const CurrentAccount = function(customerName, balance = 0){
    //creating inherited properties for current Acc(from Bank Acc)
    BankAccount.call(this, customerName, balance)
    this.transactionLimit = 50000;

}
//creating inhereted prototype for current
CurrentAccount.prototype = Object.create(BankAccount.prototype)

CurrentAccount.prototype.takeCurrentLoan = function(amt){
    this.balance += amt
    console.log("Taking Loan of $" + amt);
}


// Savings Account

const SavingsAccount = function(customerName, balance = 0){
    //creating inherited properties for savings account (from Bank Acc)
    BankAccount.call(this, customerName, balance)
    this.transactionLimit = 100000;

}

//creating inhereted prototype for Savings
SavingsAccount.prototype = Object.create(BankAccount.prototype)

SavingsAccount.prototype.takePersonalLoan = function(amt){
    this.balance += amt;
    console.log("Taking Loan of $" + amt);
}



// const dakshCurrentAcc = new CurrentAccount("Daksh", 10000)
// dakshCurrentAcc.takeCurrentLoan(7000)
// dakshCurrentAcc.deposit(7000)
// console.log(dakshCurrentAcc);

const jeanSavingsAcc = new SavingsAccount("Jean", 12000)
jeanSavingsAcc.withdraw(1000)
console.log(jeanSavingsAcc);
jeanSavingsAcc.takePersonalLoan(3000)
console.log(jeanSavingsAcc);
