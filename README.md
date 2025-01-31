### Live Demo

Check the hosted backend API: [API Link of Book & Order Management]((https://e-commerce-backend-two-mocha-93.vercel.app/))

# 📚 Book & Order Management Project

A simple project for managing books, orders, and a shopping cart, built with TypeScript, Node.js, Express, and Mongoose. The frontend is developed using React, Next.js, TypeScript, and Ant Design (AntD). It includes features to create, update, delete, and fetch books, manage a shopping cart, integrate with ShurjoPay for payments, and calculate total revenue.

---

## 🚀 Features

### 📚 Book Management:

- Create a book.
- Retrieve all books or a single book by ID.
- Update a book.
- Delete a book.

### 🛒 Shopping Cart:

- Add books to the cart.
- Update book quantity in the cart.
- Remove books from the cart.
- View cart summary.

### 🛒 Order Management:

- Place an order for books in the cart.
- View total revenue from orders.

### 📊 Revenue Calculation:

- Automatically calculate total revenue based on orders.

### ✨ Payment Integration:

- Secure payment processing via **ShurjoPay**.

---

## 🎯 Technologies Used

### **Backend:**

- **TypeScript**: Strongly typed JavaScript.
- **Node.js**: Server runtime environment.
- **Express.js**: Web framework for building APIs.
- **Mongoose**: MongoDB object modeling for Node.js.
- **MongoDB**: NoSQL database for data storage.

### **Frontend:**

- **React.js**: Component-based UI library.
- **Next.js**: Server-side rendering and static generation.
- **TypeScript**: Ensuring type safety.
- **Ant Design (AntD)**: UI components for a professional design.

---

## 📚 API Endpoints

### Book Routes

| Method | Endpoint                  | Description              |
| ------ | ------------------------- | ------------------------ |
| POST   | /api/products             | Create a new book.       |
| GET    | /api/products             | Get all books.           |
| GET    | /api/products/\:productId | Get a single book by ID. |
| PUT    | /api/products/\:productId | Update a book by ID.     |
| DELETE | /api/products/\:productId | Delete a book by ID.     |

### Shopping Cart Routes

| Method | Endpoint         | Description                   |
| ------ | ---------------- | ----------------------------- |
| POST   | /api/cart/add    | Add a book to the cart.       |
| PUT    | /api/cart/update | Update book quantity in cart. |
| DELETE | /api/cart/remove | Remove a book from the cart.  |
| GET    | /api/cart        | Get cart details.             |

### Order Routes

| Method | Endpoint            | Description                       |
| ------ | ------------------- | --------------------------------- |
| POST   | /api/orders         | Place an order for books.         |
| GET    | /api/orders/revenue | Calculate and view total revenue. |

### Payment Routes (ShurjoPay)

| Method | Endpoint              | Description                      |
| ------ | --------------------- | -------------------------------- |
| POST   | /api/payment/initiate | Initiate payment with ShurjoPay. |
| GET    | /api/payment/status   | Get payment status.              |

---

## ⚙️ Installation and Setup

Clone the project

```bash
  git clone https://github.com/Barkat-Ullah/assignment-of-mongoose.git
```

Go to the project directory

```bash
  cd assignment-of-mongoose
```

Install dependencies

```bash
  npm install
```

###### 🌍 Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file:

- `DATABASE_URL="Enter your database URL"`
- `PORT=5000`
- `SHURJOPAY_MERCHANT_KEY="Your ShurjoPay Merchant Key"`
- `SHURJOPAY_API_URL="https://securepay.shurjopay.com"`

Start the server

```bash
  npm run start:dev
```

---

## 📋sample API Request and Response

### Create a Book

#### Request:

```http
POST /api/products/create-product
Content-Type: application/json
```

```json
{
  "title": "Whispers of the Soul",
  "author": "Emily Carter",
  "price": 20,
  "category": "Science",
  "description": "A collection of heartfelt poems.",
  "quantity": 10
}
```

#### Response:

```json
{
  "success": true,
  "message": "Book is created successfully",
  "data": {
    "_id": "12345abcd",
    "title": "Whispers of the Soul",
    "author": "Emily Carter",
    "price": 20,
    "category": "Science",
    "description": "A collection of heartfelt poems.",
    "quantity": 10,
    "inStock": true,
    "createdAt": "2024-11-19T12:00:00.000Z",
    "updatedAt": "2024-11-19T12:00:00.000Z"
  }
}
```

### Example: Total Revenue

#### Request:

```
GET /api/orders/revenue
```

#### Response:

```json
{
  "success": true,
  "data": {
    "_id": null,
    "totalRevenue": 150
  }
}
```

---

## 🎥 Video Overview

Visit the demo for a better experience of this project: [Book & Order Management 🎥]((https://drive.google.com/file/d/1Hz1nSZCC0zf1MLE2cNaGKGgKTuZmKzRN/view?usp=sharing))

---

## 🌟 Contact

**Author**: Barkat Ullah Rakib

- **GitHub**: [@Barkat-ullah](https://github.com/Barkat-Ullah)
- **Email**: [barkatullah585464@gmail.com](barkatullah585464@gmail.com)

---

Now supporting **React, Next.js, TypeScript, Ant Design, and ShurjoPay Payment Integration!** 🎉

