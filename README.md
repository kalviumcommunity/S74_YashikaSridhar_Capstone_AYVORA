# AYVORA 🍽️ - Capstone Project
A full-stack food delivery web application built using React, Node.js, Express, and MongoDB with features like authentication, cart management, and real-time order tracking.

## 💡 Project Idea Brief
**AYVORA** is a modern food delivery application designed to offer a seamless and user-friendly experience for ordering food from various restaurants. This full-stack web app ensures a smooth journey from exploring menus to real-time order tracking and secure checkout.

The goal is to integrate an intuitive frontend with a powerful backend, incorporating key features such as authentication, restaurant listings, cart management, live tracking via WebSockets, and an admin dashboard.

---

## ✨ Key Features
- 🔐 **User Authentication** (JWT-based Signup/Login)
- 🍽️ **Restaurant Listings & Menu Browsing**
- 📍 **Real-Time Order Tracking** using WebSockets
- 🛒 **Cart Management & Secure Checkout**
- 💳 **Payment Gateway Integration** (Stripe/Razorpay)
- ⭐ **User Reviews and Ratings**
- 🏢 **Admin Dashboard for Restaurant Partners**

---

## 🛠️ Tech Stack
- **Frontend:** React + Vite, TailwindCSS
- **State Management:** Redux / Zustand
- **Backend:** Node.js + Express
- **Database:** MongoDB or PostgreSQL (via Prisma/Sequelize)
- **Authentication:** JWT
- **Real-time:** Socket.IO
- **Deployment:** Vercel (Frontend), Render (Backend)

---

## 📅 Weekly Plan & Timeline

### Week 1: Project Setup & Initial Design
- 🎨 Finalize UI/UX design in Figma
- 🗂️ Setup GitHub repo and base project structure
- 🏗️ Initialize frontend (React + Vite) & backend (Express)
- 🛢️ Setup database connection

### Week 2: Authentication & User Management
- 🔑 Implement JWT-based authentication (signup/login)
- 👤 User profile and session management
- 🔒 Middleware for protected routes

### Week 3: Restaurant Listings & Menu Management
- 🏠 Create restaurant schema and APIs
- 📜 Build UI for restaurant cards and menus
- 🔍 Search & filter functionality

### Week 4: Cart & Order Placement
- ➕ Add/remove items to cart using Redux/Zustand
- ✅ Order summary and checkout flow
- 📦 Order placement APIs

### Week 5: Payment & Order Tracking
- 🏦 Payment gateway integration (Stripe/Razorpay)
- 📡 Real-time order tracking via WebSockets
- 🕒 Order history and status

### Week 6: Admin Dashboard & Management
- 🖥️ Dashboard for restaurant partners
- ✏️ CRUD for menu & orders
- 📈 Analytics and insights

### Week 7: Testing, Debugging & Deployment
- 🛠️ E2E testing, bug fixing, and optimization
- 🚀 Deployment to Vercel (frontend) and Render (backend)
- 📄 Final documentation



## 🚀 Live Deployment

Frontend: https://funny-pastelito-055194.netlify.app/  

Backend: https://s74-yashikasridhar-capstone-ayvora.onrender.com


## ⚙️ Running the Project Locally

Follow these steps to run AYVORA on your local machine.

1️⃣ Clone the Repository

git clone https://github.com/kalviumcommunity/S74_YashikaSridhar_Capstone_AYVORA.git

2️⃣ Navigate to the Project Folder

cd S74_YashikaSridhar_Capstone_AYVORA

3️⃣ Install Dependencies

Frontend:
cd frontend
npm install

Backend:
cd backend
npm install

4️⃣ Start the Application

Start Backend Server:
npm start

Start Frontend:
npm run dev
