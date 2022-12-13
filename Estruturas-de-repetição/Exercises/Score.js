
let notas = 00

if (notas >= 90 && notas <= 100) {

    console.log(' Nota A.')

} else if (notas >= 80 && notas <= 89) {

    console.log(' Nota B.')

} else if (notas >= 70 && notas <= 79) {

    console.log(' Nota C.')

} else if (notas >= 60 && notas <= 69) {
 
    console.log(' Nota D.')

} else if (notas >= 0 && notas <= 59 ) {

    console.log(' Nota E.')

} else if (notas >100) {

  console.log("Sua nota atingiu o limite de 100 pontos")

} else if (notas < 0) {

    console.log("Nota inválida.")

}