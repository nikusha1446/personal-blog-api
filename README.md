# Blogging API

A simple and fast **Node.js + Prisma + PostgreSQL** backend API for managing a personal blog.  
Supports creating, reading, updating, and deleting articles with tags and timestamps.

## 🚀 Features

- Create, read, update, and delete articles (CRUD)
- Automatic timestamps (`createdAt` and `updatedAt`)
- Built with **Node.js**, **Express**, and **Prisma ORM**
- PostgreSQL database
- Clean and simple RESTful API design

## 🛠️ Tech Stack

- **Node.js**
- **Express**
- **Prisma ORM**
- **PostgreSQL**

## 📦 Installation

1. Clone the repo:

   ```bash
   git clone https://github.com/nikusha1446/personal-blog-api.git
   cd personal-blog-api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:  
   Create a `.env` file in the project root:

   ```env
   DATABASE_URL="your_database_connection_string"
   PORT=5000
   ```

4. Run migrations:

   ```bash
   npx prisma migrate dev
   ```

5. Start the server:

   ```bash
   npm run dev
   ```

Server will run at:  
`http://localhost:5000`

---

## 📝 API Endpoints

| Method | Endpoint               | Description          |
| ------ | ---------------------- | -------------------- |
| GET    | `/api/v1/articles`     | Get all articles     |
| GET    | `/api/v1/articles/:id` | Get a single article |
| POST   | `/api/v1/articles`     | Create a new article |
| PUT    | `/api/v1/articles/:id` | Update an article    |
| DELETE | `/api/v1/articles/:id` | Delete an article    |
