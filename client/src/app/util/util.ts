export function getCookie(key: string) {
  //to get cookie from the portal
  const b = document.cookie.match('(^|;)\\s*' + key + '\\s*=\\s*([^;]+)');
  return b ? b.pop() : '';
}

export function currencyFormat(amount: number) {
  return '$' + (amount / 100).toFixed(2);
}
