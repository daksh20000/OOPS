class BankAccount{
    constructor(customerName, balance = 0){
        this.customerName = customerName
        this.balance = balance
        this.accountNum = Date.now()
    }

    deposit(amt){
        this.balance += amt;
    }
    withdraw(amt){
        this.balance -= amt;
    }
}
class CurrentAccount extends BankAccount{
    constructor(moreParams, customerName, balance = 0){
        super(customerName, balance)
        this.limit = 50000;
    }

    takeCurrentLoan(amt){
        this.balance += amt;
        console.log("Current load of $ " + amt);
    }
}
class SavingsAccount extends BankAccount{
    constructor(customerName, balance = 0){
        super(customerName, balance)
        this.limit = 100000;
    }

    takePersonalLoan(amt){
        this.balance += amt;
        console.log("personal load of $ " + amt);
    }
}

const dakshSavingAcc = new SavingsAccount("Daksh", 10000)
console.log(dakshSavingAcc);