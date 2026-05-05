let cart = JSON.parse(localStorage.getItem("cart")) || [];
let user = localStorage.getItem("user");

/* منتجات */
let products = [
{name:"هاتف", price:200, desc:"هاتف ذكي", sale:150},
{name:"حاسوب", price:500, desc:"حاسوب قوي", sale:null},
{name:"سماعات", price:50, desc:"صوت ممتاز", sale:30},
{name:"كيبورد", price:70, desc:"إضاءة RGB", sale:null}
];

/* عرض المنتجات */
function renderProducts(){
let container = document.getElementById("products");
if(!container) return;

container.innerHTML="";

products.forEach(p=>{
container.innerHTML += `
<div class="card">
<h3>${p.name}</h3>
<p>${p.desc}</p>
<p>${p.sale ? `<span class="sale">${p.sale}$</span> <del>${p.price}$</del>` : p.price+"$"}</p>
<button onclick="add('${p.name}',${p.sale || p.price})">أضف</button>
</div>`;
});
}

/* إضافة للسلة */
function add(name,price){
cart.push({name,price});
localStorage.setItem("cart",JSON.stringify(cart));
alert("تمت الإضافة");
}

/* عرض السلة */
function showCart(){
let list=document.getElementById("cart");
let total=0;

cart.forEach(i=>{
list.innerHTML+=`<li>${i.name} - ${i.price}$</li>`;
total+=i.price;
});

document.getElementById("total").innerText=total+"$";
}

/* تسجيل */
function login(){
let name=document.getElementById("name").value;
localStorage.setItem("user",name);
alert("تم تسجيل الدخول");
window.location="index.html";
}
