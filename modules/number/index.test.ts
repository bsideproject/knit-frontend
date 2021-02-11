import { addCommas } from './index';

describe('addCommas', () => {
  test('with number type parameter', () => {
    expect(addCommas(10)).toBe('10');
    expect(addCommas(1000000)).toBe('1,000,000');
    expect(addCommas(10000.0)).toBe('10,000');
  });

  test('with string type parameter', () => {
    expect(addCommas('10')).toBe('10');
    expect(addCommas('1000000')).toBe('1,000,000');
    expect(addCommas('10000.00')).toBe('10,000.00');
  });
});
