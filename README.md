# DevConnect - Developer Networking Platform

## 📋 Project Overview
DevConnect is a comprehensive developer networking platform that allows developers to showcase their skills, projects, and connect with other professionals. The platform features real-time messaging, connection management, and portfolio展示.

**Key Features:**
- 🔐 JWT Authentication & Protected Routes
- 👥 User Profile Management
- 💼 Project Portfolio with CRUD operations
- 🛠️ Skills Management
- 🔗 Professional Networking & Connections
- 💬 Real-time Chat with WebSockets
- 📱 Responsive Design with TailwindCSS

## 🛠 Technologies Used

### Frontend
- **React.js** with Hooks
- **TailwindCSS** for styling
- **React Router DOM** for navigation
- **Lucide React** for icons
- **React Toastify** for notifications
- **WebSocket** for real-time features

### Backend
- **Node.js** with Express.js
- **MongoDB** with Mongoose
- **JWT** for authentication
- **bcrypt** for password hashing
- **Socket.io** for real-time communication
- **CORS** for cross-origin requests

## 🚀 Local Development Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Backend Setup

1. **Navigate to backend directory**
```bash
cd backend
```

2. **Install dependencies**
```bash
npm install
```

3. **Environment Configuration**
Create `.env` file in backend directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/devconnect
JWT_SECRET=your_jwt_secret_key_here
NODE_ENV=development
```

4. **Start the backend server**
```bash
npm run dev
```
Backend will run on `http://localhost:5000`

### Frontend Setup

1. **Navigate to frontend directory**
```bash
cd frontend
```

2. **Install dependencies**
```bash
npm install
```

3. **Environment Configuration**
Create `.env` file in frontend directory:
```env
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_WS_URL=http://localhost:5000
```

4. **Start the frontend development server**
```bash
npm start
```
Frontend will run on `http://localhost:3000`

## 🔑 Testing Credentials

You can either:
1. **Register a new account** through the signup form
2. **Use test credentials** (if pre-populated in your database):

```
Email: test@devconnect.com
Password: password123
```

## 🌐 API Documentation

### Base URL
`http://localhost:5000/api`

### Authentication Headers
All endpoints except auth require:
```http
Authorization: Bearer <your-jwt-token>
Content-Type: application/json
```

### 🔐 Authentication Endpoints

#### Register User
**POST** `/auth/register`
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "phone": "+1234567890",
  "place": "New York",
  "role": "Frontend Developer"
}
```

#### Login User
**POST** `/auth/login`
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response (both endpoints):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "Frontend Developer"
  }
}
```

### 👤 User Profile Endpoints

#### Get User Profile
**GET** `/users/profile`

**Response:**
```json
{
  "user": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+1234567890",
    "place": "New York",
    "role": "Frontend Developer"
  }
}
```

#### Update User Profile
**PUT** `/users/profile/update`
```json
{
  "name": "John Doe Updated",
  "email": "john.updated@example.com",
  "phone": "+1234567899",
  "place": "San Francisco",
  "role": "Full Stack Developer"
}
```

### 💼 Projects Endpoints

#### Get User Projects
**GET** `/projects/user/:userId`

**Response:**
```json
{
  "data": [
    {
      "_id": "507f1f77bcf86cd799439012",
      "title": "E-Commerce Website",
      "description": "A full-stack e-commerce platform",
      "technologies": "React, Node.js, MongoDB",
      "githubLink": "https://github.com/john/ecommerce",
      "liveLink": "https://ecommerce-demo.com"
    }
  ]
}
```

#### Create Project
**POST** `/projects`
```json
{
  "title": "New Project",
  "description": "Project description",
  "technologies": "React, Node.js",
  "githubLink": "https://github.com/user/repo",
  "liveLink": "https://demo.com"
}
```

#### Update Project
**PUT** `/projects/:projectId`
```json
{
  "title": "Updated Project",
  "description": "Updated description",
  "technologies": "React, TypeScript"
}
```

#### Delete Project
**DELETE** `/projects/:projectId`

### 🛠️ Skills Endpoints

#### Get User Skills
**GET** `/skills/:userId`

**Response:**
```json
{
  "data": [
    {
      "_id": "507f1f77bcf86cd799439014",
      "skill": "React",
      "level": "Advanced"
    }
  ]
}
```

#### Add Skill
**POST** `/skills`
```json
{
  "skill": "TypeScript",
  "level": "Intermediate"
}
```

#### Delete Skill
**DELETE** `/skills/:skillId`

### 🔗 Connections Endpoints

#### Discover Users
**GET** `/connections/discover`

**Response:**
```json
{
  "data": [
    {
      "_id": "507f1f77bcf86cd799439021",
      "name": "Jane Smith",
      "role": "Backend Developer",
      "place": "San Francisco"
    }
  ]
}
```

#### Get My Connections
**GET** `/connections/my-connections`

**Response:**
```json
{
  "data": [
    {
      "_id": "507f1f77bcf86cd799439021",
      "name": "Jane Smith",
      "role": "Backend Developer",
      "connectionId": "607f1f77bcf86cd799439031"
    }
  ]
}
```

#### Send Connection Request
**POST** `/connections/request`
```json
{
  "recipientId": "507f1f77bcf86cd799439021"
}
```

#### Respond to Request
**PUT** `/connections/respond/:connectionId`
```json
{
  "action": "accept"
}
```

### 💬 Messages Endpoints

#### Get Messages
**GET** `/messages/:connectionId`

**Response:**
```json
[
  {
    "_id": "707f1f77bcf86cd799439051",
    "sender": {
      "_id": "507f1f77bcf86cd799439011",
      "name": "John Doe"
    },
    "content": "Hello there!",
    "createdAt": "2024-01-27T10:30:00.000Z"
  }
]
```

#### Send Message
**POST** `/messages`
```json
{
  "recipientId": "507f1f77bcf86cd799439021",
  "content": "Hello, let's connect!"
}
```

### ⚠️ Error Responses
All endpoints may return:
```json
{
  "message": "Error description"
}
```

**Status Codes:**
- `400` - Bad Request
- `401` - Unauthorized
- `404` - Not Found
- `500` - Internal Server Error

## 📱 Application Screenshots

### Dashboard Overview


### Profile Management


### Projects Portfolio


## 🔧 Available Scripts

### Frontend
- `npm start` - Run development server
- `npm run build` - Create production build
- `npm test` - Run test suite

### Backend
- `npm run dev` - Run with nodemon
- `npm start` - Run production server
- `npm test` - Run tests

## 📁 Postman Collection
A complete Postman collection is available in the repository root: 
`Madesh_S_DevConnect_API_Collection.json`

Import this file into Postman to test all API endpoints with pre-configured environments and examples.

## 📈 Scalability Note
See `SCALABILITY.md` for detailed information on how this application can be scaled for production use, including database optimization, caching strategies, and deployment considerations.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Developer

**Madesh S**
- GitHub: [Madesh-S](https://github.com/Madesh-S)
- LinkedIn: [madesh-s](https://linkedin.com/in/madesh-s)
- Email: madesh@example.com
- Phone: +91 9876543210

---

**Note:** Make sure MongoDB is running before starting the backend server. For production deployment, update environment variables accordingly.
