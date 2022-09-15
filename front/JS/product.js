//Récupérer l’id du produit à afficher via les paramètres de l'url
const idProduct = new URL(window.location.href).searchParams.get("id");

//Récupération des sélecteurs pour les futurs modifications
let titleProduct = document.getElementById("title");
let priceProduct = document.getElementById("price");
let descriptionProduct = document.getElementById("description");
let colorsProduct = document.getElementById("colors");
let imgProduct = document.querySelector(".item__img");
let img = document.createElement("img");
imgProduct.appendChild(img);

//Récupérer un produit grâce à l'id + afficher les détails de ce produit
getArticle();

//Récupérer un produit grâce à l'id + afficher les détails de ce produit

async function getArticle() {
    await fetch("http://localhost:3000/api/products/" + idProduct)
   .then((response) => response.json())    
   .then(product => {
       img.setAttribute("src", product.imageUrl);
       img.setAttribute("alt", product.altTxt);    
       titleProduct.innerHTML = product.name;
       priceProduct.innerHTML = product.price;
       descriptionProduct.innerHTML = product.description;
       document.title = product.name;

       for (let i=0; i < product.colors.length; i++) {
           let color = document.createElement("option");
           color.setAttribute("value", product.colors[i]);
           color.innerHTML = product.colors[i];
           colorsProduct.appendChild(color);
       }  
   });          
}