import Validator from '../app';

test('case 1', () => {
  const result = Validator.validateUsername('Emma_Wotson');
  expect(result).toBe(true);
});

test('case 2', () => {
  const result = Validator.validateUsername('R@se');
  expect(result).toBe(false);
});

test('case 3', () => {
  const result = Validator.validateUsername('10Eric');
  expect(result).toBe(false);
});

test('case 4', () => {
  const result = Validator.validateUsername('Pete-');
  expect(result).toBe(false);
});

test('case 4', () => {
  const result = Validator.validateUsername('Pete-Fu1234g');
  expect(result).toBe(false);
});
