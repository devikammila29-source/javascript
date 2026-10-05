class Product {
    static company = "Samsung";
    static category = "Electronics";
    static location = "Hyderabad";
    constructor(product_Name, product_Id, product_Price, product_Rating) {
        this.productName = product_Name;
        this.productId = product_Id;
        this.productPrice = product_Price;
        this.productRating = product_Rating;
    }
    displayDetails() {
        console.log("Company :", Product.company);
        console.log("Category :", Product.category);
        console.log("Location :", Product.location);
        console.log("Product Name :", this.productName);
        console.log("Product ID :", this.productId);
        console.log("Product Price :", this.productPrice);
        console.log("Product Rating :", this.productRating);
    }
}
let product1 = new Product("Samsung Mobile", 563, 25000, 4.5);
console.log("----------Product 1-----------");
product1.displayDetails();
let product2 = new Product("Samsung TV", 506, 45000, 4.2);
console.log("----------Product 2-----------");
product2.displayDetails();
let product3 = new Product("Samsung Laptop", 562, 65000, 4.7);
console.log("----------Product 3-----------");
product3.displayDetails();