let cart = JSON.parse(localStorage.getItem("cart")) || [];
let coupon = localStorage.getItem("coupon") || "";

/* إضافة */
function add(name,price,img){
let item = cart.find(i=>i.name===name);

if(item){
item.qty++;
}else{
cart.push({name,price,qty:1,img});
}

save();
notify("تمت الإضافة للسلة 🛒");
}

function save(){
localStorage.setItem("cart",JSON.stringify(cart));
}

/* عرض */
function showCart(){
let list = document.getElementById("cart");
let subtotal = 0;

list.innerHTML="";

cart.forEach((i,index)=>{
let sub = i.price * i.qty;
subtotal += sub;

list.innerHTML += `
<div class="item">
<img src="${i.img}">
<h3>${i.name}</h3>

<p>${i.price}$</p>

<div>
<button onclick="changeQty(${index},1)">➕</button>
${i.qty}
<button onclick="changeQty(${index},-1)">➖</button>
</div>

<p>المجموع: ${sub}$</p>

<button onclick="removeItem(${index})">❌</button>
<hr>
</div>
`;
});

/* حساب */
let tax = subtotal * 0.1;
let total = subtotal + tax;

/* كوبون */
if(coupon === "SALE10"){
total *= 0.9;
}

document.getElementById("subtotal").innerText = subtotal.toFixed(2)+"$";
document.getElementById("tax").innerText = tax.toFixed(2)+"$";
document.getElementById("total").innerText = total.toFixed(2)+"$";
}

/* كمية */
function changeQty(i,d){
cart[i].qty += d;

if(cart[i].qty <= 0){
cart.splice(i,1);
}

save();
showCart();
}

/* حذف */
function removeItem(i){
cart.splice(i,1);
save();
showCart();
}

/* كوبون */
function applyCoupon(){
let c = document.getElementById("coupon").value;

if(c === "SALE10"){
coupon = c;
localStorage.setItem("coupon",c);
notify("تم تطبيق الخصم 🎉");
}else{
notify("كود غير صحيح ❌");
}

showCart();
}

/* تفريغ */
function clearCart(){
cart = [];
save();
showCart();
}

/* إشعار */
function notify(msg){
let n = document.createElement("div");
n.className="notify";
n.innerText=msg;

document.body.appendChild(n);

setTimeout(()=>{n.remove()},2000);
}
