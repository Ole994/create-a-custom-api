//the ternary operator
// const products = [
//     {
//         type: "produt A",
//         delivered: false
//     },

//     {
//         type: "produt B",
//         delivered: true
//     },

//     {
//         type: "produt C",
//         delivered: false
//     },

//     {
//         type: "produt D",
//         delivered: true
//     },
// ];

// const container = document.querySelector(".product-container");

// for (let i = 0; i < products.length; i++) {
//     let colour = "blue";

//     if (products[i].delivered) {
//         colour = "green"
//     }

//     container.innerHTML += `<div class ="product" style ="background-color: ${colour}">
//                                 ${products[i].type}   
//                             </div>
//     `
// }

//Object destructuring

// const things = {
//     id: 4657,
//     name: "Great Gatsby",
//     tags: ["tag a", "tag b", "tag c", "tag d",],
//     nice: {
//         country: "France"
//     },
// };


// const log = (id, name, tags) =>{
//     console.log (id);
//     console.log (name);
//     console.log (tags);

   

// } 

// log (things)
// const { id, name: nameThings } = things;

// const name = things.name;

// const { country } = things.nice;

// console.log ("nice");


//http://localhost:1337/admin/auth/register-admin


// const queryString = document.location.search;

// console.log(queryString);

// const params = new URLSearchParams(queryString);

// console.log (params)

// const id = params.get("id");

// console.log (id);

// const name = params.get("name");

// console.log (name);

import {baseUrl} from "./js/settings/api.js"

const productsUrl = baseUrl + "products"













