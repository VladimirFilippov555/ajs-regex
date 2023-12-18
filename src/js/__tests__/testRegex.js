import Validator from '../regex';

const validator = new Validator();

test.each([
  ['IvanNikolaevich', true],
  ['Ivan565_-np', true],
  ['Ivanov56575__-df', false],
  ['5Ivan', false],
  ['_Ivan-Nikolaevich', false],
  ['Ivan-Ivanovich88', false],
  ['-Ivan347Ivanovich', false],
])('check validateUsername function', (username, expected) => {
  const result = validator.validateUsername(username);
  expect(result).toBe(expected);
});