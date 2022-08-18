/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const getCharacter = require('../src/getCharacter');

/*
A função getCharacter recebe uma string que representa o nome de um personagem e retorna um objeto contendo seu nome, sua classe e suas frases.

O retorno será de acordo com a seguinte relação:

 Parâmetro  |      Nome       |    Classe   |              Frases
----------------------------------------------------------------------------------
   Arya     |   Arya Stark    |    Rogue    | 'Not today', 'A girl has no name.'
  Brienne   |  Brienne Tarth  |    Knight   | 'Im No Lady, Your Grace.', 'I, Brienne Of Tarth, Sentence You To Die.'
Melissandre |   Melissandre   | Necromancer | 'Death By Fire Is The Purest Death.', 'For The Night Is Dark And Full Of Terrors.'

- Se o parâmetro não estiver na tabela, a função retorna `undefined`.
- Se o parâmetro estiver, a função retorna um objeto no formato abaixo:

  {
    name: 'Nome do Personagem',
    class: 'Classe do Personagem' ,
    phrases: ['frase1', 'frase2']
  }

- OBS.: O parâmetro não é CASE SENSITIVE, portanto Arya, ArYa e ARYA tem o mesmo resultado.

Escreva pelo menos seis testes para essa função garantindo que a implementação de getCharacter está correta.

Parâmetros:
  - Uma string.

Comportamento: 
  - getCharacter('Arya');

Retorno:
{
  name: 'Arya Stark',
  class: 'Rogue',
  phrases: [ 'Not today', 'A girl has no name.' ]
}
*/

describe('9 - Implemente os casos de teste da função `getCharacter`', () => {
  it('Verifica se a função `getCharacter` retorna o objeto do personagem corretamente.', () => {
    expect(getCharacter(undefined)).toBeUndefined();
  });
  it('Verifica se a função retorna o objeto correto para o parâmetro "Arya"', () => {
    expect(typeof getCharacter('Arya')).toMatch('object');
  });
  it('Verifica se a função retorna o objeto correto para o parâmetro "Brienne"', () => {
    expect(typeof getCharacter('Brienne')).toMatch('object');
  });
  it('Verifica se a função retorna o objeto correto para o parâmetro "Melissandre"', () => {
    expect(typeof getCharacter('Brienne')).toMatch('object');
  });
  it('Verifica se a função retorna o objeto correto para o parâmetro "Melissandre"', () => {
    expect(getCharacter('ARYA').name).toBe('Arya Stark');
  });
  it('Verifica se ao passar um nome que não está na stabela, a função retorna undefined.', () => {
    expect(getCharacter('Fernando')).toBeUndefined();
  });

    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se a função, quando não recebe nenhum parâmetro, retorna undefined.
    // Teste se a função retorna o objeto correto para o parâmetro 'Arya',
    // Teste se a função retorna o objeto correto para o parâmetro 'Brienne',
    // Teste se a função retorna o objeto correto para o parâmetro 'Melissandre',
    // Teste se o parâmetro não é Case Sensitive, ou seja, independente de conter letras maiúsculas ou minúsculas retorna o mesmo objeto relativo a ele.
    // Teste se ao passar um nome que não está na tabela, a função retorna undefined.
  
});
