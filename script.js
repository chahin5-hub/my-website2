let cart = JSON.parse(localStorage.getItem("cart")) || [];

let products = [
{name:"هاتف", price:200},
{name:"حاسوب", price:500},
{name:"سماعات", price:50},
{name:"لوحة مفاتيح", price:70}
];

function renderProducts(list){
let container = document.getElementById("products");
if(!container) return;

container.innerHTML = "";

list.forEach(p=>{
container.innerHTML += `
<div class="card">
<h3>${p.name}</h3>
<p>${p.price}$</p>
<button onclick="add('${p.name}',${p.price})">أضف للسلة</button>
</div>`;
});
}

function add(name,price){
cart.push({name,price});
localStorage.setItem("cart",JSON.stringify(cart));
alert("تمت الإضافة");
}

function showCart(){
let list = document.getElementById("cart");
let total = 0;
list.innerHTML="";

cart.forEach(i=>{
list.innerHTML += `<li>${i.name} - ${i.price}$</li>`;
total += i.price;
});

document.getElementById("total").innerText = total + "$";
}

function search(){
let value = document.getElementById("search").value;
let filtered = products.filter(p=>p.name.includes(value));
renderProducts(filtered);
}

function checkout(){
let msg = "طلب:\n";
cart.forEach(i=>{
msg += i.name + " - " + i.price + "$\n";
});
window.open("https://wa.me/213XXXXXXXXX?text=" + encodeURIComponent(msg));
}
