# Project Name

A RESTful API built with Node.js, Express.js, and MongoDB following the MVC architecture.

## 📁 Project Structure

```
project-root/
│
├── config/          # Database and application configuration
├── controller/      # Business logic and request handlers
├── middleware/      # Custom middleware functions
├── model/           # MongoDB/Mongoose models
├── route/           # API routes
├── upload/          # Uploaded files storage
│
├── server.js        # Application entry point
├── package.json
└── package-lock.json
```

---

## 🚀 Features

- REST API architecture
- MVC design pattern
- MongoDB database integration
- Express middleware support
- File upload functionality
- Error handling
- Environment configuration support

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Multer (for file uploads)
- dotenv
- Nodemon

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/project-name.git
```

### 2. Navigate to project folder

```bash
cd project-name
```

### 3. Install dependencies

```bash
npm install
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Update the values according to your environment.

---

## ▶️ Running the Application

### Development Mode

```bash
npm run dev
```

### Production Mode

```bash
npm start
```

Server will run on:

```
http://localhost:5000
```

---

## 📌 API Endpoints

### Example

| Method | Endpoint | Description |
|----------|------------|------------|
| GET | /api/users | Get all users |
| GET | /api/users/:id | Get user by ID |
| POST | /api/users | Create user |
| PUT | /api/users/:id | Update user |
| DELETE | /api/users/:id | Delete user |

Replace these endpoints with your actual routes.

---

## 📤 File Upload

Uploaded files are stored inside:

```
upload/
```

Make sure the directory exists before uploading files.

---

## 🔒 Middleware

The project includes middleware for:

- Authentication
- Authorization
- Error handling
- Request validation

Customize middleware according to project requirements.

---

## 🗄️ Database

MongoDB is used as the primary database.

Connection configuration is located inside:

```
config/
```

---

## 🧪 Testing

Run tests:

```bash
npm test
```

---- add ----

<img width="1115" height="617" alt="Screenshot 2026-06-09 121744" src="https://github.com/user-attachments/assets/8058c0cf-97a1-4b9b-b702-c545eb45a8fd" />



---- get all data ----

<img width="1084" height="944" alt="Screenshot 2026-06-09 121827" src="https://github.com/user-attachments/assets/13610b7b-3265-4632-82e1-791a543d172e" />



---- find by id ----

<img width="1095" height="738" alt="Screenshot 2026-06-09 121920" src="https://github.com/user-attachments/assets/8e37cac8-c59b-4a59-b28e-4226bf528cd1" />



----- delete by id -----

<img width="1092" height="629" alt="Screenshot 2026-06-09 121949" src="https://github.com/user-attachments/assets/cccf129a-ffc0-4efc-a2d8-5742a5d92ee6" />

----- update -----

<img width="1104" height="740" alt="Screenshot 2026-06-09 122016" src="https://github.com/user-attachments/assets/b0b5b5f9-fbb6-4926-9c21-6c2fa461bc11" />


## 👨‍💻 Author

Your Name

GitHub: https://github.com/kalpeshgoswami/Node.js/tree/main/11.event_project
