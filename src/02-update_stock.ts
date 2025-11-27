function updateStock(currentStock: number, quantityChange: number): number {
  return currentStock + quantityChange;
}

console.log("Stock actualizado:", updateStock(100, -20));
console.log("Stock actualizado:", updateStock(50, +30));
