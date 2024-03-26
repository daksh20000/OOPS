class BankAccount{
    // customerName;
    // accountNumber = Date.now();
    // balance = 0;

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

const dakshAcc = new BankAccount("Daksh", 1000)
console.log(dakshAcc);