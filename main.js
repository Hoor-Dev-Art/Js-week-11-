// Import the two tools from utils.js.
import { calculateTotal, formatPrice } from "./utils.js";

// Use the imported tools.
const price = 50;
const total = calculateTotal(price);
const formattedPrice = formatPrice(price);
const formattedTotal = formatPrice(total);

const results = document.getElementById("results");
results.innerHTML = `
  <p><strong>Original price:</strong> ${formattedPrice}</p>
  <p><strong>Price with 10% tax:</strong> ${formattedTotal}</p>
  <p><strong>Tool 1:</strong> calculateTotal() adds tax to a price.</p>
  <p><strong>Tool 2:</strong> formatPrice() formats a number as currency.</p>
`;
