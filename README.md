# 🚀 TRIZEN — Full Stack E-Commerce Web App  
Modern MERN-based e-commerce platform with product search, filters, responsive UI, and dynamic hero slider.

---

## ✨ Features

### 🔹 Frontend (React)
- Fully responsive (Mobile + Tablet + Laptop)
- Hero slider with auto-slide, arrows, and dots
- Search bar with live suggestions
- Category filter
- Responsive product grid
- Footer with icons (React Icons)
- Clean UI with component-based structure

### 🔹 Backend (Node + Express + MongoDB)
- REST API `/products`
- MongoDB models using Mongoose
- Seed script with 45+ sample products
- .env support for environment variables

---

## 🛠 Tech Stack

### **Frontend**
- React.js  
- Axios  
- React Icons  
- CSS with Media Queries  

### **Backend**
- Node.js  
- Express.js  
- MongoDB (Atlas)  
- Mongoose  
- dotenv  

---

## 📁 Folder Structure
TRIZEN/
├── backend/
│ ├── models/
│ ├── controllers/
│ ├── routes/
│ ├── seed.js
│ └── server.js
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── screens/
│ │ ├── App.js
│ │ ├── Home.css
│ │ └── api.js
└── README.md

---

 ## Backend Setup

 1️ Install Dependencies
cd backend
npm install


2 Create `.env`
MONGODB_URI=your_mongodb_connection_url
PORT=5000


 3️ Run Seed Script
Inserts 45+ sample products.
node seed.js

4️  Start Backend
npm run dev


5 API available at: **http://localhost:5000/products**

---

Frontend Setup

## Install Dependencies
cd frontend
npm install


### Start React App
npm start


Runs on:  
👉 **http://localhost:3000**

---

## 🔌 API Connection

Inside **frontend/src/api.js**:

```js
import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:5000",
});
