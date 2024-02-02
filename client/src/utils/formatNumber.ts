export function fCurrency(number: number): string {
  return formatCurrency(number);
}

export function fPercent(number: number): string {
  return formatPercentage(number);
}

export function fNumber(number: number): string {
  return formatNumber(number);
}

export function fShortenNumber(number: number): string {
  return shortenNumber(number);
}

export function fData(number: number): string {
  return formatData(number);
}

function formatCurrency(number: number): string {
  if (Number.isInteger(number)) {
    return `$${number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  } else {
    return `$${number.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  }
}

function formatPercentage(number: number): string {
  return `${(number / 100).toFixed(1)}%`;
}

function formatNumber(number: number): string {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function shortenNumber(number: number): string {
  const suffixes = ["", "k", "m", "b", "t"];
  const index = Math.floor(Math.log10(Math.abs(number)) / 3);
  const suffix = suffixes[index];
  const shortened = (number / 10 ** (index * 3)).toFixed(2).replace(".00", "");
  return `${shortened}${suffix}`;
}

function formatData(number: number): string {
  const suffixes = ["b", "kb", "mb", "gb", "tb", "pb", "eb", "zb", "yb"];
  const index = Math.floor(Math.log2(Math.abs(number)) / 10);
  const suffix = suffixes[index];
  const formatted = (number / 2 ** (index * 10)).toFixed(1);
  return `${formatted} ${suffix}`;
}
