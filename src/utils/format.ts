export function formatPrice(amount: number): string {
  const rupees = Math.floor(amount);
  const paise = Math.round((amount - rupees) * 100);
  return '₹' + rupees + '.' + (paise < 10 ? '0' + paise : paise);
}
