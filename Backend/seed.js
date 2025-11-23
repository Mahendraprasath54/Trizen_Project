require("dotenv").config();
const mongoose = require("mongoose");
const Product = require("./models/Product");

const products = [
  // Electronics
  { name: "Smartphone Max 20", category: "Electronics", price: 45999, rating: 4.5, imageUrl: "https://via.placeholder.com/300x200?text=Smartphone+Max+20" },
  { name: "Noise Cancelling Headphones", category: "Electronics", price: 8999, rating: 4.2, imageUrl: "https://via.placeholder.com/300x200?text=Headphones" },
  { name: "Smartphone Lite 15", category: "Electronics", price: 29999, rating: 4.1, imageUrl: "https://via.placeholder.com/300x200?text=Smartphone+Lite+15" },
  { name: "4K Action Camera", category: "Electronics", price: 11999, rating: 4.4, imageUrl: "https://via.placeholder.com/300x200?text=Action+Camera" },
  { name: "Smart Watch 6 Pro", category: "Electronics", price: 7999, rating: 4.3, imageUrl: "https://via.placeholder.com/300x200?text=Smart+Watch" },

  // Computers
  { name: "Gaming Laptop Pro", category: "Computers", price: 89999, rating: 4.7, imageUrl: "https://via.placeholder.com/300x200?text=Gaming+Laptop" },
  { name: "Wireless Mouse", category: "Computers", price: 799, rating: 4.1, imageUrl: "https://via.placeholder.com/300x200?text=Wireless+Mouse" },
  { name: "Mechanical Keyboard", category: "Computers", price: 3499, rating: 4.5, imageUrl: "https://via.placeholder.com/300x200?text=Keyboard" },
  { name: "27-inch Monitor", category: "Computers", price: 15999, rating: 4.4, imageUrl: "https://via.placeholder.com/300x200?text=Monitor" },
  { name: "USB-C Hub 8-in-1", category: "Computers", price: 2499, rating: 4.2, imageUrl: "https://via.placeholder.com/300x200?text=USB+Hub" },

  // Furniture
  { name: "Office Chair Ergonomic", category: "Furniture", price: 12999, rating: 4.3, imageUrl: "https://via.placeholder.com/300x200?text=Office+Chair" },
  { name: "Standing Desk", category: "Furniture", price: 19999, rating: 4.5, imageUrl: "https://via.placeholder.com/300x200?text=Standing+Desk" },
  { name: "Bedside Table", category: "Furniture", price: 3499, rating: 4.2, imageUrl: "https://via.placeholder.com/300x200?text=Bedside+Table" },
  { name: "Bookshelf 6 Layer", category: "Furniture", price: 6999, rating: 4.1, imageUrl: "https://via.placeholder.com/300x200?text=Bookshelf" },
  { name: "Sofa 3-Seater", category: "Furniture", price: 22999, rating: 4.6, imageUrl: "https://via.placeholder.com/300x200?text=Sofa" },

  // Fashion
  { name: "Running Shoes", category: "Fashion", price: 2999, rating: 4.2, imageUrl: "https://via.placeholder.com/300x200?text=Running+Shoes" },
  { name: "Casual T-Shirt", category: "Fashion", price: 799, rating: 3.9, imageUrl: "https://via.placeholder.com/300x200?text=T-Shirt" },
  { name: "Men's Jacket", category: "Fashion", price: 2499, rating: 4.3, imageUrl: "https://via.placeholder.com/300x200?text=Jacket" },
  { name: "Women Handbag", category: "Fashion", price: 1899, rating: 4.4, imageUrl: "https://via.placeholder.com/300x200?text=Handbag" },
  { name: "Sports Shorts", category: "Fashion", price: 599, rating: 4.0, imageUrl: "https://via.placeholder.com/300x200?text=Shorts" },

  // Accessories
  { name: "Backpack 30L", category: "Accessories", price: 1499, rating: 4.1, imageUrl: "https://via.placeholder.com/300x200?text=Backpack" },
  { name: "Sunglasses UV400", category: "Accessories", price: 799, rating: 4.2, imageUrl: "https://via.placeholder.com/300x200?text=Sunglasses" },
  { name: "Leather Wallet", category: "Accessories", price: 499, rating: 4.3, imageUrl: "https://via.placeholder.com/300x200?text=Wallet" },
  { name: "Analog Wrist Watch", category: "Accessories", price: 1299, rating: 4.1, imageUrl: "https://via.placeholder.com/300x200?text=Watch" },
  { name: "Travel Pouch", category: "Accessories", price: 399, rating: 4.0, imageUrl: "https://via.placeholder.com/300x200?text=Pouch" },

  // Home Appliances
  { name: "Smart TV 55 inch", category: "Electronics", price: 55999, rating: 4.4, imageUrl: "https://via.placeholder.com/300x200?text=Smart+TV" },
  { name: "Air Fryer 4L", category: "Home Appliances", price: 6999, rating: 4.3, imageUrl: "https://via.placeholder.com/300x200?text=Air+Fryer" },
  { name: "Electric Kettle", category: "Home Appliances", price: 999, rating: 4.0, imageUrl: "https://via.placeholder.com/300x200?text=Kettle" },
  { name: "Vacuum Cleaner", category: "Home Appliances", price: 4999, rating: 4.2, imageUrl: "https://via.placeholder.com/300x200?text=Vacuum" },
  { name: "Mixer Grinder", category: "Home Appliances", price: 3499, rating: 4.3, imageUrl: "https://via.placeholder.com/300x200?text=Mixer" },

  // Sports
  { name: "Cricket Bat", category: "Sports", price: 1299, rating: 4.1, imageUrl: "https://via.placeholder.com/300x200?text=Cricket+Bat" },
  { name: "Football Size 5", category: "Sports", price: 699, rating: 4.2, imageUrl: "https://via.placeholder.com/300x200?text=Football" },
  { name: "Badminton Racket", category: "Sports", price: 1199, rating: 4.4, imageUrl: "https://via.placeholder.com/300x200?text=Badminton" },
  { name: "Yoga Mat 6mm", category: "Sports", price: 499, rating: 4.3, imageUrl: "https://via.placeholder.com/300x200?text=Yoga+Mat" },
  { name: "Dumbbell Set 10kg", category: "Sports", price: 2499, rating: 4.5, imageUrl: "https://via.placeholder.com/300x200?text=Dumbbells" },

  // Beauty
  { name: "Hair Dryer 2000W", category: "Beauty", price: 1599, rating: 4.4, imageUrl: "https://via.placeholder.com/300x200?text=Hair+Dryer" },
  { name: "Trimmer Pro", category: "Beauty", price: 1299, rating: 4.2, imageUrl: "https://via.placeholder.com/300x200?text=Trimmer" },
  { name: "Perfume Classic 100ml", category: "Beauty", price: 999, rating: 4.3, imageUrl: "https://via.placeholder.com/300x200?text=Perfume" },
  { name: "Makeup Kit Basic", category: "Beauty", price: 499, rating: 4.1, imageUrl: "https://via.placeholder.com/300x200?text=Makeup+Kit" },
  { name: "Face Wash Tea Tree", category: "Beauty", price: 249, rating: 4.0, imageUrl: "https://via.placeholder.com/300x200?text=Face+Wash" }
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
