
// ==========================
// script.js
// متجر إلكتروني احترافي
// ==========================

// ===== CART =====

let cart = [];

// إضافة منتج للسلة
function addToCart(name, price = 0, image = "") {

    const product = {
        name: name,
        price: price,
        image: image,
        quantity: 1
    };

    // التحقق هل المنتج موجود
    const existing = cart.find(item => item.name === name);

    if(existing){

        existing.quantity++;

    } else {

        cart.push(product);

    }

    updateCartCount();

    saveCart();

    showNotification(name + " تمت إضافته للسلة 🛒");

}

// ===== UPDATE CART COUNT =====

function updateCartCount(){

    let count = 0;

    cart.forEach(item => {

        count += item.quantity;

    });

    const cartCounter = document.getElementById("cart-count");

    if(cartCounter){

        cartCounter.innerText = count;

    }

}

// ===== SAVE CART =====

function saveCart(){

    localStorage.setItem("cart", JSON.stringify(cart));

}

// ===== LOAD CART =====

function loadCart(){

    const savedCart = localStorage.getItem("cart");

    if(savedCart){

        cart = JSON.parse(savedCart);

        updateCartCount();

    }

}

loadCart();


// ==========================
// NOTIFICATION
// ==========================

function showNotification(message){

    const notification = document.createElement("div");

    notification.classList.add("notification");

    notification.innerText = message;

    document.body.appendChild(notification);

    setTimeout(() => {

        notification.classList.add("show");

    }, 100);

    setTimeout(() => {

        notification.classList.remove("show");

        setTimeout(() => {

            notification.remove();

        }, 500);

    }, 2500);

}


// ==========================
// DARK MODE
// ==========================

const darkBtn = document.getElementById("dark-mode-btn");

if(darkBtn){

    darkBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        if(document.body.classList.contains("dark-mode")){

            localStorage.setItem("theme", "dark");

        } else {

            localStorage.setItem("theme", "light");

        }

    });

}

// تحميل الثيم
window.addEventListener("load", () => {

    const theme = localStorage.getItem("theme");

    if(theme === "dark"){

        document.body.classList.add("dark-mode");

    }

});


// ==========================
// SEARCH PRODUCTS
// ==========================

const searchInput = document.getElementById("search");

if(searchInput){

    searchInput.addEventListener("keyup", () => {

        const value = searchInput.value.toLowerCase();

        const cards = document.querySelectorAll(".product-card");

        cards.forEach(card => {

            const title = card.querySelector("h3").innerText.toLowerCase();

            if(title.includes(value)){

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

}


// ==========================
// HERO AUTO SLIDER
// ==========================

const heroImages = [

"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop",

"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop",

"https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop"

];

let currentHero = 0;

const heroImg = document.getElementById("hero-img");

if(heroImg){

    setInterval(() => {

        currentHero++;

        if(currentHero >= heroImages.length){

            currentHero = 0;

        }

        heroImg.src = heroImages[currentHero];

    }, 4000);

}


// ==========================
// SCROLL ANIMATION
// ==========================

const hiddenElements = document.querySelectorAll(".hidden");

window.addEventListener("scroll", () => {

    hiddenElements.forEach(el => {

        const position = el.getBoundingClientRect().top;

        const screen = window.innerHeight / 1.3;

        if(position < screen){

            el.classList.add("show-element");

        }

    });

});


// ==========================
// PRODUCT QUICK VIEW
// ==========================

function quickView(name, price, image){

    const modal = document.getElementById("quick-view");

    if(modal){

        modal.style.display = "flex";

        document.getElementById("quick-title").innerText = name;

        document.getElementById("quick-price").innerText = "$" + price;

        document.getElementById("quick-image").src = image;

    }

}

function closeQuickView(){

    const modal = document.getElementById("quick-view");

    if(modal){

        modal.style.display = "none";

    }

}


// ==========================
// LOADING SCREEN
// ==========================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if(loader){

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 500);

    }

});


// ==========================
// MOBILE MENU
// ==========================

const menuBtn = document.getElementById("menu-btn");

const mobileMenu = document.getElementById("mobile-menu");

if(menuBtn){

    menuBtn.addEventListener("click", () => {

        mobileMenu.classList.toggle("active-menu");

    });

}


// ==========================
// SCROLL TO TOP
// ==========================

const topBtn = document.getElementById("top-btn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        topBtn.style.display = "flex";

    } else {

        topBtn.style.display = "none";

    }

});

function scrollToTop(){

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

}
