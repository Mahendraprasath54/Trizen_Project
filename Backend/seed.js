require("dotenv").config();
const mongoose = require("mongoose");
const Product = require("./models/Product");
const connectDB = require("./config/db");

const products = [
  {
    name: "Smartphone Max 20",
    category: "Electronics",
    price: 45999,
    rating: 4.5,
    imageUrl: "https://via.placeholder.com/300x200?text=Smartphone+Max+20"
  },
  {
    name: "Noise Cancelling Headphones",
    category: "Electronics",
    price: 8999,
    rating: 4.2,
    imageUrl: "https://via.placeholder.com/300x200?text=Headphones"
  },
  {
    name: "Gaming Laptop Pro",
    category: "Computers",
    price: 89999,
    rating: 4.7,
    imageUrl: "https://via.placeholder.com/300x200?text=Gaming+Laptop"
  },
  {
    name: "Wireless Mouse",
    category: "Computers",
    price: 799,
    rating: 4.1,
    imageUrl: "https://via.placeholder.com/300x200?text=Wireless+Mouse"
  },
  {
    name: "Office Chair Ergonomic",
    category: "Furniture",
    price: 12999,
    rating: 4.3,
    imageUrl: "https://via.placeholder.com/300x200?text=Office+Chair"
  },
  {
    name: "Smart TV 55 inch",
    category: "Electronics",
    price: 55999,
    rating: 4.4,
    imageUrl: "https://via.placeholder.com/300x200?text=Smart+TV"
  },
  {
    name: "Bluetooth Speaker Mini",
    category: "Electronics",
    price: 2499,
    rating: 4.0,
    imageUrl: "https://via.placeholder.com/300x200?text=Speaker"
  },
  {
    name: "Running Shoes",
    category: "Fashion",
    price: 2999,
    rating: 4.2,
    imageUrl: "https://via.placeholder.com/300x200?text=Running+Shoes"
  },
  {
    name: "Casual T-Shirt",
    category: "Fashion",
    price: 799,
    rating: 3.9,
    imageUrl: "https://via.placeholder.com/300x200?text=T-Shirt"
  },
  {
    name: "Backpack 30L",
    category: "Accessories",
    price: 1499,
    rating: 4.1,
    imageUrl: "https://via.placeholder.com/300x200?text=Backpack"
  },
  {
    name: "Smartphone Lite 10",
    category: "Electronics",
    price: 25999,
    rating: 4.0,
    imageUrl: "https://via.placeholder.com/300x200?text=Smartphone+Lite+10"
  },
  {
    name: "Wireless Keyboard",
    category: "Computers",
    price: 1499,
    rating: 4.0,
    imageUrl: "https://via.placeholder.com/300x200?text=Keyboard"
  }
];

const seedData = async () => {
  try {
    await connectDB();
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log("Sample products inserted");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedData();
