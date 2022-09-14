/** Récupérer du tableau des produits */

getProducts();

/** Création des articles via le tableau */

createProducts();

async function getProducts() {
    let products = await fetch("http://localhost:3000/api/products");
    console.log("Produits récupérés avec succès")
    return products.json()
};

async function createProducts() {
    let result = await getProducts()
    .then((product) => {
        for (let i=0; i < product.length; i++) {

            //Créer l'élément "a"
            let productLink = document.createElement("a");
            document.querySelector(".items").appendChild(productLink);
            productLink.href = `product.html?id=${product[i]._id}`;
            console.log("lien récupéré");
            
            //Créer l'élément "article"
            let productArticle = document.createElement("article");
            productLink.appendChild(productArticle);
            console.log("élément article créé");

            //Créer l'élément "image"
            let productImg = document.createElement("Img");
            productArticle.appendChild(productImg);
            productImg.src = product[i].imageUrl;
            productImg.alt = product[i].altTxt;
            console.log("élément Img créé");

            //Créer l'élément "h3"
            let productName = document.createElement("h3");
            productArticle.appendChild(productName);
            productName.classList.add("productName");
            productName.innerHTML = product[i].name;

        



        



        }



    })



}