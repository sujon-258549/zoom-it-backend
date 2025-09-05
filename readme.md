npm i -y
npm install mongoose express cors dotenv
npm install typescript --save-dev
tsc -init //tsc file create
npm i -D eslint@9.14.0 @eslint/js @types/eslint\_\_js typescript typescript-eslint

npm i -D --exact prettier

npm i ts-node-dev


# ⚡ ZoomIt E-commerce Backend

A robust **Node.js & Express.js backend** for the ZoomIt E-commerce platform.  
It handles **authentication, product & order management, and admin operations** with MongoDB.

---

## 📌 Table of Contents
1. [Overview](#-overview)  
2. [Features](#-features)  
3. [Tech Stack](#-tech-stack)  
4. [Project Structure](#-project-structure)  
5. [Database Models](#-database-models)  
6. [Installation & Setup](#-installation--setup)  
7. [Environment Variables](#-environment-variables)  
8. [NPM Packages](#-npm-packages)  
9. [API Documentation](#-api-documentation)  
10. [Deployment](#-deployment)  
11. [Author](#-author)  

---

## 🔎 Overview
The backend provides a **RESTful API** for ZoomIt E-commerce with the following capabilities:  

- User registration & login (JWT-based authentication)  
- Role-based access (Admin / User)  
- CRUD operations for products & categories  
- Order management with status tracking  
- Secure password hashing & validation  

---

## ✨ Features
- JWT Authentication & Authorization  
- Password encryption using **bcrypt**  
- MongoDB database management via **Mongoose**  
- Cloudinary integration for product images  
- Full CRUD for products, categories, orders, and users  
- Admin dashboard endpoints for management  
- Input validation with **express-validator**  

---

## 🛠 Tech Stack
- **Node.js**  
- **Express.js**  
- **MongoDB & Mongoose**  
- **JWT & bcrypt**  

---
.env
NODE_ENV=development
DATABASE_URL=mongodb+srv://rootx:rY8yaJnFp0cgqOYU@cluster0.yx0jx.mongodb.net/rootx?retryWrites=true&w=majority&appName=Cluster0
PORT=4000
JWT_ACCESS_TOCEN=fksdlaaaaaaaaaaaaaadlsfkjjjjjj
JWT_EXPIRE_IN_ACCESSTOKEN=1h
BCRYPC_HAS=5

