function createBankAccount(startAmount) {
  let balance = startAmount; 

  return {
    deposit: function(amount) {
      balance = balance + amount;
      return balance;
    },
    withdraw: function(amount) {
      if (amount > balance) {
        return "Not enough money";
      }
      balance = balance - amount;
      return balance;
    },
    getBalance: function() {
      return balance;
    }
  };
}


const myAccount = createBankAccount(100);  

console.log(myAccount.deposit(50));   
console.log(myAccount.withdraw(30));    
console.log(myAccount.getBalance());  

console.log(myAccount.withdraw(200));   
console.log(myAccount.balance);          
