//fundamentales
let productName: string = "Teclado Mecánico";
let productPrice: number = 45000;

//tipo union
let productId: string | number;
productId = "ABC123";
console.log("productId string:", productId);

productId = 789;
console.log("productId number:", productId);

// interfaz basica
interface Product {
  name: string;
  price: number;
}

const myProduct: Product = {
  name: "Monitor 27 pulgadas",
  price: 210000,
};

console.log("myProduct:", myProduct);
