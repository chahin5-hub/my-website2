let cart = JSON.parse(localStorage.getItem("cart")) || [];

let products = [
{
name:"هاتف ذكي",
price:200,
sale:150,
img:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
desc:"هاتف حديث",
specs:"RAM 8GB - 128GB",
rating:"⭐⭐⭐⭐⭐"
},
{
name:"حاسوب محمول",
price:500,
img:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
desc:"حاسوب قوي",
specs:"i7 - 16GB RAM",
rating:"⭐⭐⭐⭐"
},
{
name:"سماعات",
price:50,
sale:30,
img:"https://images.unsplash.com/photo-1518444065439-e933c06ce9cd",
desc:"صوت نقي",
specs:"Bluetooth",
rating:"⭐⭐⭐⭐⭐"
}
];

function renderProducts(){
let c = document.getElementById("products");
if(!c) return;

c.innerHTML="";

products.forEach((p,i)=>{
c.innerHTML += `
<div class="card">
${p.sale ? `<span class="badge">🔥 تخفيض</span>`:""}

<img src="${p.img}">

<h3>${p.name}</h3>
<p>${p.desc}</p>

<p>
${p.sale ? `<span style="color:yellow">${p.sale}$</span> <del>${p.price}$</del>` : p.price+"$"}
</p>

<p class="rating">${p.rating}</p>

<span class="favorite" onclick="fav()">❤️</span>

<button onclick="add('${p.name}',${p.sale || p.price})">أضف</button>

<a href="product.html?id=${i}">
<button>تفاصيل</button>
</a>

</div>`;
});
}

function add(name,price){
cart.push({name,price});
localStorage.setItem("cart",JSON.stringify(cart));
alert("تمت الإضافة");
}

function showCart(){
let list=document.getElementById("cart");
let total=0;
list.innerHTML="";

cart.forEach(i=>{
list.innerHTML += `<li>${i.name} - ${i.price}$</li>`;
total+=i.price;
});

document.getElementById("total").innerText=total+"$";
}

function fav(){
alert("❤️ أضيف للمفضلة");
}

function loadProduct(){
let id=new URLSearchParams(window.location.search).get("id");
let p=products[id];

document.getElementById("product").innerHTML=`
<img src="${p.img}" style="width:300px">
<h2>${p.name}</h2>
<p>${p.desc}</p>
<p>${p.specs}</p>
<p>${p.rating}</p>
<p>${p.price}$</p>
<button onclick="add('${p.name}',${p.price})">شراء</button>
`;
}
