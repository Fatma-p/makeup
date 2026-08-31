const searchBtn = document.getElementById("searchBtn");
const searchBox = document.getElementById("searchBox");

searchBtn.addEventListener("click", function () {

    searchBox.classList.toggle("active");

});


function searchProducts() {

    const searchInput =
        document.getElementById("searchInput");

    const searchValue =
        searchInput.value.toLowerCase().trim();

    const products =
        document.querySelectorAll(".product-card");

    products.forEach(function(product) {

        const productName =
            product.querySelector("h3")
            .textContent
            .toLowerCase();

        if (productName.includes(searchValue)) {

            product.style.display = "block";

        } else {

            product.style.display = "none";

        }

    });

}


/* =========================
   SCROLL TO SHOP
========================= */

function scrollToShop() {

    document
        .getElementById("shop")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================
   PRODUCT FILTER
========================= */

const filterButtons =
    document.querySelectorAll(".filter");

const productCards =
    document.querySelectorAll(".product-card");


filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        filterButtons.forEach(function(btn) {

            btn.classList.remove("active");

        });

        button.classList.add("active");

        const category =
            button.getAttribute("data-category");


        productCards.forEach(function(product) {

            const productCategory =
                product.getAttribute("data-category");


            if (
                category === "all" ||
                category === productCategory
            ) {

                product.style.display = "block";

            } else {

                product.style.display = "none";

            }

        });

    });

});


/* =========================
   CATEGORY BUTTONS
========================= */

function showCategory(category) {

    scrollToShop();

    setTimeout(function() {

        const filter =
            document.querySelector(
                `.filter[data-category="${category}"]`
            );

        if (filter) {

            filter.click();

        }

    }, 500);

}


/* =========================
   SHOPPING CART
========================= */

let cart = [];

let cartCount = 0;

let cartTotal = 0;


function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    cartCount++;

    cartTotal += price;

    document.getElementById("cartCount")
        .textContent = cartCount;

    updateCart();

    openCart();

}


/* =========================
   UPDATE CART
========================= */

function updateCart() {

    const cartItems =
        document.getElementById("cartItems");

    const total =
        document.getElementById("cartTotal");


    if (cart.length === 0) {

        cartItems.innerHTML =
            `<p class="empty-cart">
                Your cart is empty.
            </p>`;

    } else {

        cartItems.innerHTML = "";


        cart.forEach(function(item, index) {

            const cartItem =
                document.createElement("div");

            cartItem.className = "cart-item";

            cartItem.innerHTML = `

                <div>

                    <h4>
                        ${item.name}
                    </h4>

                    <p>
                        $${item.price}
                    </p>

                </div>

                <button
                    class="remove-item"
                    onclick="removeFromCart(${index})"
                >
                    ×
                </button>

            `;

            cartItems.appendChild(cartItem);

        });

    }

    total.textContent =
        cartTotal.toFixed(2);

}


/* =========================
   REMOVE PRODUCT
========================= */

function removeFromCart(index) {

    cartTotal -= cart[index].price;

    cart.splice(index, 1);

    cartCount--;

    document.getElementById("cartCount")
        .textContent = cartCount;

    updateCart();

}


/* =========================
   OPEN CART
========================= */

const cartBtn =
    document.getElementById("cartBtn");

const cartPopup =
    document.getElementById("cartPopup");


cartBtn.addEventListener("click", function() {

    cartPopup.classList.add("active");

});


function openCart() {

    cartPopup.classList.add("active");

}


function closeCart() {

    cartPopup.classList.remove("active");

}


/* =========================
   TESTIMONIALS
========================= */

const reviews = [

    {
        text:
        "Amazing products! The quality is beautiful and the packaging is absolutely gorgeous.",

        name:
        "Sarah Ahmed",

        image:
        "images/customer1.jpg"
    },

    {
        text:
        "I really loved the perfume. The smell is elegant and lasts for a long time.",

        name:
        "Maya Ali",

        image:
        "images/customer2.jpg"
    },

    {
        text:
        "The makeup products are beautiful and the colors are exactly what I wanted.",

        name:
        "Lina Omar",

        image:
        "images/customer3.jpg"
    }

];


let currentReview = 0;


function showReview(index) {

    document.getElementById("reviewText")
        .textContent =
        `"${reviews[index].text}"`;

    document.getElementById("customerName")
        .textContent =
        reviews[index].name;

    document.getElementById("customerImage")
        .src =
        reviews[index].image;

}


document.getElementById("nextReview")
    .addEventListener("click", function() {

        currentReview++;

        if (currentReview >= reviews.length) {
            currentReview = 0;
        }

        showReview(currentReview);

    });


document.getElementById("prevReview")
    .addEventListener("click", function() {

        currentReview--;

        if (currentReview < 0) {
            currentReview = reviews.length - 1;
        }

        showReview(currentReview);

    });


/* =========================
   NEWSLETTER
========================= */

function subscribe() {

    const email =
        document.getElementById("email").value.trim();


    if (email === "") {

        alert("Please enter your email.");

        return;

    }


    if (!email.includes("@")) {

        alert("Please enter a valid email.");

        return;

    }


    alert(
        "Thank you for subscribing to Glow Beauty! 💕"
    );


    document.getElementById("email").value = "";

}


/* =========================
   QUICK VIEW
========================= */

const quickButtons =
    document.querySelectorAll(".quick-view");


quickButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        if (button.textContent === "♡") {

            button.textContent = "♥";

            button.style.color = "#bd707c";

        } else {

            button.textContent = "♡";

            button.style.color = "black";

        }

    });

});