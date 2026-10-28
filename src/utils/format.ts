const inr = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' });

export function formatPrice(amount: number): string {
  return inr.format(amount);
}
