# 📝 Fullstack Notes App

Welcome to my **Fullstack Notes App**! This project is a milestone for me as it marks my very first journey into building a full-stack application using the **MERN** (MongoDB, Express, React, Node.js) stack.

It is a clean, modern, and responsive notes management system designed to help users capture and organize their thoughts effortlessly.

---

## 🚀 Learning Journey

This project was built while I was learning the ropes of web development. It covers:

- Building a RESTful API with **Express** and **Node.js**.
- Database management and schema modeling with **MongoDB** & **Mongoose**.
- Creating a dynamic and interactive frontend with **React** (Vite).
- State management and side-effect handling with **Axios** and Hooks.
- Modern styling with **Tailwind CSS** and **DaisyUI**.
- Deployment preparation (serving frontend from backend in production).

---

## ✨ Features

- **Create Notes**: Quick and easy note creation with titles and content.
- **Read Notes**: A beautiful grid layout to view all your notes at a glance.
- **Detail View**: Focus on a single note to read its full content.
- **Update Notes**: Edit your existing notes seamlessly.
- **Delete Notes**: Remove notes you no longer need.
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop.
- **Toasts Notifications**: Real-time feedback using `react-hot-toast`.

---

## 🛠️ Tech Stack

### Frontend

- **Framework**: React 19 (Vite)
- **Styling**: Tailwind CSS + DaisyUI
- **Icons**: Lucide React
- **Routing**: React Router 7
- **HTTP Client**: Axios
- **Notifications**: React Hot Toast

### Backend

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (via Mongoose)
- **Environment**: Dotenv for configuration
- **CORS**: Cross-Origin Resource Sharing for development

---

## ⚙️ Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- MongoDB account (Atlas or local)

### 1. Clone the repository

```bash
git clone https://github.com/ddennis18/fullstack-notesapp.git
cd fullstack-notesapp
```

### 2. Backend Setup

Create a `.env` file in the `backend` directory:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
NODE_ENV=development
```

Install backend dependencies:

```bash
cd backend
npm install
```

### 3. Frontend Setup

Install frontend dependencies:

```bash
cd ../frontend
npm install
```

### 4. Running the Application

**Run Backend (Development):**

```bash
cd backend
npm run dev
```

**Run Frontend (Development):**

```bash
cd frontend
npm run dev
```

The application will be running at `http://localhost:5173` (Frontend) and the API at `http://localhost:5000` (Backend).

---

## 📂 Project Structure

```text
fullstack-notesapp/
├── backend/            # Express server & API
│   ├── src/
│   │   ├── config/     # DB connection
│   │   ├── controllers/# API logic
│   │   ├── models/     # Mongoose schemas
│   │   ├── routes/     # Express routes
│   │   └── index.js    # Entry point
│   └── .env            # Environment variables
├── frontend/           # React frontend
│   ├── src/
│   │   ├── components/ # Reusable UI components
│   │   ├── pages/      # Application screens
│   │   ├── lib/        # Utilities (axios config, etc.)
│   │   └── App.jsx     # Main entry
│   └── tailwind.config.js
└── package.json        # Root scripts
```

---

---

## 🛣️ API Endpoints

| Method     | Endpoint         | Description             |
| :--------- | :--------------- | :---------------------- |
| **GET**    | `/api/notes`     | Fetch all notes         |
| **GET**    | `/api/notes/:id` | Fetch a single note     |
| **POST**   | `/api/notes`     | Create a new note       |
| **PUT**    | `/api/notes/:id` | Update an existing note |
| **DELETE** | `/api/notes/:id` | Remove a note           |

### 🧪 Testing the API

The project includes `.http` files at the root (`post.http`, `put.http`, `delete.http`) which can be used with the **REST Client** extension in VS Code to test the API endpoints directly.

---

## 👤 Author

- GitHub: [@ddennis18](https://github.com/ddennis18)

---

Developed with ❤️ while learning the MERN Stack.
