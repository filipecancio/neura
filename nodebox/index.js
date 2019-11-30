const Matrix = require('./Matrix');
const RedeNeural = require('./RedeNeural');
console.log("Redes Neurais - Exercício 01")

a = new RedeNeural(3,10,3)
b =  new Matrix(1,1)
b.replace([[1,2,3],[2,3],[3]]);
b.print()