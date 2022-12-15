

  let family = {
      incomes : [2500, 3200, 250.43, 360.47],
      expenses : [320.64, 112.50, 178.99, 900]
  }

  function sum(array) {
    let total = 0;
    
    for(let value of array) {
      total += value
    }

    return total 
  }


  function calculateBalance() {
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses
    
    const itsOk = total >= 0

    let balanceText = "negativo"
    
    if (itsOk) {
      balanceText = "positivo"
    }
    
    console.log(`Seu saldo é ${balanceText}: R$${total.toFixed(2)}`)
  }

  calculateBalance()