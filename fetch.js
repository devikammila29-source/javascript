
let res = "";
let btn = document.getElementById("showProductsBtn");
let container = document.getElementById("productContainer");
let message = document.getElementById("message");
btn.addEventListener("click", () => {
    message.innerHTML = "Loading products...";
    container.innerHTML = "";
    fetch("https://fakestoreapi.com/products")
        .then((response) => {
            return response.json();
        })
        .then((jsData) => {
            res = "";
            jsData.forEach((product) => {
                res += `
                    <div class="product-card">
                        <img
                            src="${product.image}"
                            alt="Product image"
                            class="product-image"
                        >
                        <h3 class="product-title">
                            ${product.title}
                        </h3>
                        <p class="product-category">
                            ${product.category}
                        </p>
                        <h2 class="product-price">
                            $${product.price}
                        </h2>
                        <p class="product-rating">
                            ⭐ ${product.rating.rate} / 5
                            (${product.rating.count} reviews)
                        </p>
                        <button class="buy-btn"
                                data-id="${product.id}">
                            Buy Now
                        </button>
                    </div>
                `;
            });
            container.innerHTML = res;
            message.innerHTML = "Products Loaded Successfully  🎉........!";
        })
        .catch((error) => {
            message.innerHTML = "Failed to load products.";
            console.log(error);
        });
});
