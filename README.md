Trendora is a full-stack e-commerce web application designed to provide users with a seamless online shopping experience. It features user authentication, product browsing, shopping cart, order tracking, admin management, and integrates Razorpay for secure payments.

## 🚀 Features

### 👤 User
- User Registration and Login
- Browse Products by Category
- Add Products to Cart
- Checkout and Order Tracking
- Razorpay Payment Integration

### 🛠️ Admin
- Admin Authentication
- Product Management (Add, Update, Delete)
- User Management

## 🧱 Tech Stack

| Layer        | Technology        |
|--------------|-------------------|
| **Frontend** | HTML5, CSS3, JavaScript, React |
| **Backend**  | Node.js, Express.js |
| **Database** | MongoDB |
| **Payment**  | Razorpay |
| **Authentication** | JSON Web Tokens (JWT), bcrypt |
| **Version Control** | Git, GitHub |

## 💳 Razorpay Integration

Razorpay is used to securely process payments during checkout. After confirming an order, users are redirected to the Razorpay payment interface, where they can complete the transaction.

## 📁 Project Structure

```
/client             → Frontend (React)
/server             → Backend (Express)
/models             → Mongoose Schema
/routes             → API Routes
/controllers        → Business Logic
/utils              → Razorpay Config, Middlewares
.env                → Environment Variables
README.md
```

## 🧪 Testing

- Functional Testing: Jest, Postman
- Unit Testing: Mocha & Chai (Backend)
- Manual UI Testing for responsiveness

## 🛠️ Setup Instructions

1. **Clone the Repository**

```bash
git clone https://github.com/yourusername/Trendora.git
cd Trendora
```

2. **Set Up Environment Variables**

Create a `.env` file in the `/server` directory:

```env
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret
```

3. **Install Dependencies**

```bash
# For server
cd server
npm install

# For client
cd ../client
npm install
```

4. **Run the App**

```bash
# In server/
npm run dev

# In client/
npm start
```

5. **Visit in Browser**

```
http://localhost:3000
```
### 👩‍💻 Developed by Rutika Ambadkar
