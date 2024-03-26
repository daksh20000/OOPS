function BankAccount(customername, balance =0){
    this.customerName = customername;
    this.accountNum = Date.now();
    this.balance = balance;


    this.deposit = (amt)=>{
        this.balance += amt;
    }
    this.withdraw =(amt)=>{
        this.balance -= amt
    }
}
// const dakshAccount = new BankAccount("Daksh", 1000)
// const samAccount = new BankAccount("Sam")
// dakshAccount.deposit(5000)
// dakshAccount.withdraw(2000)
// console.log(dakshAccount, samAccount);


// ===================================

const accounts = []
const accountForm = document.querySelector("#accountForm")
const accountName = document.querySelector('#customerName')
const balance = document.querySelector("#balance")

accountForm.addEventListener('submit', (e)=>{
    e.preventDefault()

    this.account = new BankAccount(accountName.value, +balance.value )
    accounts.push(account)
    console.log(accounts);
})

const depositForm = document.querySelector("#deposit")
const accountNum = document.querySelector("#accountNumber")
const depositAmt = document.querySelector("#depositAmount")

depositForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    this.account = accounts.find(
        (arrayItem)=>arrayItem.accountNum === +accountNum.value
    )
    account.deposit(+depositAmt.value)
    console.log(account);
        
    
})