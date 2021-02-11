export function addCommas(number: number | string) {
  if (typeof number !== 'number' && typeof number !== 'string') return number;
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
