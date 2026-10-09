// Utility tool 1: calculate the final price after adding tax.
export function calculateTotal(price, taxRate = 0.1) {
  return price + price * taxRate;
}

// Utility tool 2: format a number as a currency string.
export function formatPrice(amount, currency = "USD") {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency
  }).format(amount);
}
