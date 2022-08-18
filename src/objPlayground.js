/*
  Implemente a função calculator que recebe dois números inteiros como parâmetro e retorna um objeto com as seguintes chaves:
    - sum;
    - mult;
    - div;
    - sub.
  Para cada chave atribua como valor a operação correspondente à sua chave:
    - sum: retorna o resultado da soma dos dois números;
    - mult: retorna o resultado da multiplicação dos dois números;
    - div: retorna o resultado da divisão dos dois números;
    - sub: retorna o resultado da subtração dos dois números.

  Os resultados das divisões devem sempre ser arredondados para baixo.

  Parâmetros:
  - Dois números inteiros.

  Comportamento:
  calculator(1, 2); // { sum: 3, mult: 2, div: 0, sub: -1 }

  Depois de ter implementado a função calculator, desenvolva uma função que converta objetos em arrays, de chaves, valores ou ambos.
  A sua função deve receber dois parâmetros:

    * o primeiro parâmetro deve ser uma string que indica o tipo de conversão;
    * o segundo parâmetro deve ser um objeto semelhante ao que é retornado pela função calculator que você acabou de desenvolver.

  Parâmetros:
  - Uma string que indica o tipo de conversão;
  - Um objeto no formato { sum: 3, mult: 2, div: 0, sub: -1 };

  Comportamento:
  arrayGenerator('keys', { sum: 3, mult: 2, div: 0, sub: -1 }) // [ 'sum', 'mult', 'div', 'sub' ]
  arrayGenerator('values', { sum: 3, mult: 2, div: 0, sub: -1 }) // [ 3, 2, 0, -1 ]
  arrayGenerator('entries', { sum: 3, mult: 2, div: 0, sub: -1 }) // [ [ 'sum', 3 ], [ 'mult', 2 ], [ 'div', 0 ], [ 'sub', -1 ] ]
*/

const calculator = (number1, number2) => {
  let sum = number1 + number2;
  let mult = number1 * number2;
  let div = number1 / number2;
  let sub = number1 - number2;
  const objCalculator = {
    sum: Math.floor(sum),
    mult: Math.floor(mult),
    div: Math.floor(div),
    sub: Math.floor(sub),
  };
  return objCalculator;
};
console.log(calculator(5, 4));

const arrayGenerator = (type, object) => {
  if (type === 'keys') {
    const key = Object.keys(object);
    return key;
  }
  if (type === 'values') {
    const value = Object.values(object);
    return value;
  }
  if (type === 'entries') {
    const entries = Object.entries(object);
    return entries;
  }
};
console.log(arrayGenerator('keys', { sum: 3, mult: 2, div: 1, sub: 0 }));
console.log(arrayGenerator('values', { sum: 3, mult: 2, div: 1, sub: 0 }));
console.log(arrayGenerator('entries', { sum: 3, mult: 2, div: 1, sub: 0 }));

module.exports = { calculator, arrayGenerator };
