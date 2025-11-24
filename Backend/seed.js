require("dotenv").config();
const mongoose = require("mongoose");
const Product = require("./models/Product");

const products = [
  // Electronics
  { name: "Smartphone Max 20", category: "Electronics", price: 45999, rating: 4.5, imageUrl: "https://images.unsplash.com/photo-1729860648491-d4d45960910c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Noise Cancelling Headphones", category: "Electronics", price: 8999, rating: 4.2, imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop" },
  { name: "Smartphone Lite 15", category: "Electronics", price: 29999, rating: 4.1, imageUrl: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=300&h=200&fit=crop" },
  { name: "4K Action Camera", category: "Electronics", price: 11999, rating: 4.4, imageUrl: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=300&h=200&fit=crop" },
  { name: "Smart Watch 6 Pro", category: "Electronics", price: 7999, rating: 4.3, imageUrl: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=300&h=200&fit=crop" },

  // Computers
  { name: "Gaming Laptop Pro", category: "Computers", price: 89999, rating: 4.7, imageUrl: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=300&h=200&fit=crop" },
  { name: "Wireless Mouse", category: "Computers", price: 799, rating: 4.1, imageUrl: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=200&fit=crop" },
  { name: "Mechanical Keyboard", category: "Computers", price: 3499, rating: 4.5, imageUrl: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=300&h=200&fit=crop" },
  { name: "27-inch Monitor", category: "Computers", price: 15999, rating: 4.4, imageUrl: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=300&h=200&fit=crop" },
  { name: "USB-C Hub 8-in-1", category: "Computers", price: 2499, rating: 4.2, imageUrl: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=300&h=200&fit=crop" },

  // Furniture
  { name: "Office Chair Ergonomic", category: "Furniture", price: 12999, rating: 4.3, imageUrl: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=300&h=200&fit=crop" },
  { name: "Standing Desk", category: "Furniture", price: 19999, rating: 4.5, imageUrl: "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=300&h=200&fit=crop" },
  { name: "Bedside Table", category: "Furniture", price: 3499, rating: 4.2, imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=200&fit=crop" },
  { name: "Bookshelf 6 Layer", category: "Furniture", price: 6999, rating: 4.1, imageUrl: "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=300&h=200&fit=crop" },
  { name: "Sofa 3-Seater", category: "Furniture", price: 22999, rating: 4.6, imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=200&fit=crop" },

  // Fashion
  { name: "Running Shoes", category: "Fashion", price: 2999, rating: 4.2, imageUrl: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=300&h=200&fit=crop" },
  { name: "Casual T-Shirt", category: "Fashion", price: 799, rating: 3.9, imageUrl: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=300&h=200&fit=crop" },
  { name: "Men's Jacket", category: "Fashion", price: 2499, rating: 4.3, imageUrl: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=200&fit=crop" },
  { name: "Women Handbag", category: "Fashion", price: 1899, rating: 4.4, imageUrl: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=300&h=200&fit=crop" },
  { name: "Sports Shorts", category: "Fashion", price: 599, rating: 4.0, imageUrl: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=300&h=200&fit=crop" },

  // Accessories
  { name: "Backpack 30L", category: "Accessories", price: 1499, rating: 4.1, imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=200&fit=crop" },
  { name: "Sunglasses UV400", category: "Accessories", price: 799, rating: 4.2, imageUrl: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=200&fit=crop" },
  { name: "Leather Wallet", category: "Accessories", price: 499, rating: 4.3, imageUrl: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=300&h=200&fit=crop" },
  { name: "Analog Wrist Watch", category: "Accessories", price: 1299, rating: 4.1, imageUrl: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=300&h=200&fit=crop" },
  { name: "Travel Pouch", category: "Accessories", price: 399, rating: 4.0, imageUrl: "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=300&h=200&fit=crop" },

  // Home Appliances & Electronics
  { name: "Smart TV 55 inch", category: "Electronics", price: 55999, rating: 4.4, imageUrl: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=300&h=200&fit=crop" },
  { name: "Air Fryer 4L", category: "Home Appliances", price: 6999, rating: 4.3, imageUrl: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=300&h=200&fit=crop" },
  { name: "Electric Kettle", category: "Home Appliances", price: 999, rating: 4.0, imageUrl: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=300&h=200&fit=crop" },
  { name: "Vacuum Cleaner", category: "Home Appliances", price: 4999, rating: 4.2, imageUrl: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=300&h=200&fit=crop" },
  { name: "Mixer Grinder", category: "Home Appliances", price: 3499, rating: 4.3, imageUrl: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=300&h=200&fit=crop" },

  // Sports
  { name: "Cricket Bat", category: "Sports", price: 1299, rating: 4.1, imageUrl: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=300&h=200&fit=crop" },
  { name: "Football Size 5", category: "Sports", price: 699, rating: 4.2, imageUrl: "https://images.unsplash.com/photo-1614632537190-23e4146777db?w=300&h=200&fit=crop" },
  { name: "Badminton Racket", category: "Sports", price: 1199, rating: 4.4, imageUrl: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=300&h=200&fit=crop" },
  { name: "Yoga Mat 6mm", category: "Sports", price: 499, rating: 4.3, imageUrl: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=300&h=200&fit=crop" },
  { name: "Dumbbell Set 10kg", category: "Sports", price: 2499, rating: 4.5, imageUrl: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=300&h=200&fit=crop" },

  // Beauty
  { name: "Hair Dryer 2000W", category: "Beauty", price: 1599, rating: 4.4, imageUrl: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=300&h=200&fit=crop" },
  { name: "Trimmer Pro", category: "Beauty", price: 1299, rating: 4.2, imageUrl: "https://images.unsplash.com/photo-1621607512214-68297480165e?w=300&h=200&fit=crop" },
  { name: "Perfume Classic 100ml", category: "Beauty", price: 999, rating: 4.3, imageUrl: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=300&h=200&fit=crop" },
  { name: "Makeup Kit Basic", category: "Beauty", price: 499, rating: 4.1, imageUrl: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=200&fit=crop" },
  { name: "Face Wash Tea Tree", category: "Beauty", price: 249, rating: 4.0, imageUrl: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=300&h=200&fit=crop" }
];


async function seed() {
  try {
    console.log("Connecting to DB...");
    const conn = await mongoose.connect(process.env.MONGODB_URI);

    console.log(`Connected to DB: ${conn.connection.name}`);

    await Product.deleteMany({});
    console.log("Old products deleted");

    await Product.insertMany(products);
    console.log("40 sample products inserted");

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

seed();
