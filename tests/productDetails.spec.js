const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verificar se productDetails é uma função.', () => {
    expect(typeof productDetails).toBe('function');
  });
  it('Verificar se o retorno da função é um array.', () => {
    expect(typeof productDetails(['your', 'array'])).toBe('object');
  });
  it('Verificar se o array retornado pela função contém dois itens dentro.', () => {
    expect(productDetails(productDetails(2).length, 2));
  });
  it('Verificar se os dois itens dentro do array retornado pela função são objetos.', () => {
    expect(typeof productDetails()).toBe('object');
  });
  it('Verificar se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.', () => {
    expect(productDetails('Alcool', 'macacão')[0]).not.toEqual(productDetails('Alcool', 'macacão')[1]);
  });
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    // Teste se o retorno da função é um array.
    // Teste se o array retornado pela função contém dois itens dentro.
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    // Teste se os dois productIds terminam com 123.
 
});
