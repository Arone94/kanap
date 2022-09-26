const id = new URL(window.location.href).searchParams.get("id");
console.log(id);

const orderId = document.getElementById('orderId');
orderId.innerHTML = id;
console.log(orderId);

localStorage.clear();
console.log("localStorage vide");