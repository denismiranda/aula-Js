// Trow 
  function sayMyName(name = '') {
    if (name === '') {
      throw("Nome é necessário")
    }

    console.log('depois do erro')
  }   


// Try/Catch
try {
  sayMyName()
} catch(e) {
  console.log(e)
}

console.log('após a funcção de erro')
