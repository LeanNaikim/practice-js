// 'use strict'

// // == vs ===
// let a = 10;
// let b = '10';

// console.log(a == b);
// console.log(a === b);

// // Ternary Operator


// // Nullish Coalescing Operator 

// // ??
// // let c = 0;
// // let d = c ?? 'default value';


// // || handler better than ??
// let c = 0;
// let d = c || 'default value';

// console.log(d);

// let product = {
//     id : 1,
//     name  : 'Laptop',
//     description: '',
//     price: 5000,
//     img: 'laptop.jpg',
//     variant: null
// }

// // let color = product.description || "No description available"
// // console.log(color);

// let product1 = {
//     id : 1,
//     name  : 'Laptop',
//     description: '',
//     price: 5000,
//     img: 'laptop.jpg',
//     variant: {
//         color: 'pink'
//     }
// }

// let color1 = product1?.variant?.color || 'No color available'
// console.log(color1);

// let product2 = {
//     id : 1,
//     name  : 'Laptop',
//     description: '',
//     price: 5000,
//     img: 'laptop.jpg',
//     variant: {
//         color: 'blue',
//         size: '15 inch'
//     }
// }

// // learn destructuring 
// // old way
// // let name = product2.name;
// // let price = product2.price;
// // let img = product2.img;

// // new way
// // let {name: title,price,img} = product2;
// // console.log(title,price,img);

// let {name: title,price,img,variant: {color,size}} = product2;
// console.log(title,price,img,color,size);




'use strict'
import { cardComponent } from "../component/cardComponent.js"
// let renderArea = document.querySelector("#render-area");

import { products } from "../data/products.js"
const renderArea = document.querySelector("#render-area");

products.map((product) => {
    renderArea.innerHTML += cardComponent(product);

})
