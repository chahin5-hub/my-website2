let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* إضافة منتج */
function add(name,price){
let item = cart.find(i=>i.name===name);

if(item){
item.qty++;
}else{
cart.push({name,price,qty:1});
}

save();
alert("تمت الإضافة");
}

/* حفظ */
function save(){
localStorage.setItem("cart",JSON.stringify(cart));
}

/* عرض السلة */
function showCart(){
let list = document.getElementById("cart");
let total = 0;
list.innerHTML="";

cart.forEach((i,index)=>{
let subtotal = i.price * i.qty;
total += subtotal;

list.innerHTML += `
<li>
${i.name} - ${i.price}$  

<br>
<button onclick="changeQty(${index},1)">➕</button>
${i.qty}
<button onclick="changeQty(${index},-1)">➖</button>

<br>
المجموع: ${subtotal}$

<br>
<button onclick="removeItem(${index})">❌ حذف</button>
<hr>
</li>
`;
});

document.getElementById("total").innerText = total + "$";
}

/* تغيير الكمية */
function changeQty(i,delta){
cart[i].qty += delta;

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

/* تفريغ السلة */
function clearCart(){
cart = [];
save();
showCart();
}
