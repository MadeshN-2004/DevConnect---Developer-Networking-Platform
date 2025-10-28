# API.md

# DevConnect API Documentation

## 📋 Overview
Complete REST API documentation for DevConnect - Developer Networking Platform. All endpoints require JWT authentication unless specified.

## 🌐 Base URL
```
http://localhost:5000/api
```

## 🔐 Authentication
All endpoints (except auth endpoints) require JWT token in headers:
```http
Authorization: Bearer <your-jwt-token>
Content-Type: application/json
```

---

## 🔑 Authentication Endpoints

### Register User
**POST** `/auth/register`

**Request Body:**
```json
{
  "name": "Madesh S",
  "email": "madesh@example.com",
  "password": "password123",
  "phone": "+91 9876543210",
  "place": "Chennai",
  "role": "Full Stack Developer"
}
```

**Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "name": "Madesh S",
    "email": "madesh@example.com",
    "role": "Full Stack Developer"
  }
}
```

**Status Codes:**
- `201` - User created successfully
- `400` - Validation error
- `409` - Email already exists
- `500` - Server error

### Login User
**POST** `/auth/login`

**Request Body:**
```json
{
  "email": "madesh@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "name": "Madesh S",
    "email": "madesh@example.com",
    "role": "Full Stack Developer"
  }
}
```

**Status Codes:**
- `200` - Login successful
- `400` - Validation error
- `401` - Invalid credentials
- `500` - Server error

### Verify Token
**GET** `/auth/verify-token`

**Headers:**
```
Authorization: Bearer <token>
```

**Response:**
```json
{
  "valid": true,
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "name": "Madesh S",
    "email": "madesh@example.com"
  }
}
```

**Status Codes:**
- `200` - Token valid
- `401` - Invalid token

---

## 👤 User Profile Endpoints

### Get User Profile
**GET** `/users/profile`

**Response:**
```json
{
  "user": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "Madesh S",
    "email": "madesh@example.com",
    "phone": "+91 9876543210",
    "place": "Chennai",
    "role": "Full Stack Developer",
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
  }
}
```

**Status Codes:**
- `200` - Success
- `401` - Unauthorized
- `404` - User not found

### Update User Profile
**PUT** `/users/profile/update`

**Request Body:**
```json
{
  "name": "Madesh S Updated",
  "email": "madesh.updated@example.com",
  "phone": "+91 9876543211",
  "place": "Bangalore",
  "role": "Senior Full Stack Developer"
}
```

**Response:**
```json
{
  "user": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "Madesh S Updated",
    "email": "madesh.updated@example.com",
    "phone": "+91 9876543211",
    "place": "Bangalore",
    "role": "Senior Full Stack Developer"
  }
}
```

**Status Codes:**
- `200` - Profile updated
- `400` - Validation error
- `401` - Unauthorized
- `404` - User not found

### Get User by ID
**GET** `/users/:userId`

**Response:**
```json
{
  "user": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "Madesh S",
    "email": "madesh@example.com",
    "role": "Full Stack Developer",
    "place": "Chennai"
  }
}
```

**Status Codes:**
- `200` - Success
- `404` - User not found

---

## 💼 Projects Endpoints

### Get User Projects
**GET** `/projects/user/:userId`

**Response:**
```json
{
  "data": [
    {
      "_id": "507f1f77bcf86cd799439012",
      "title": "DevConnect Platform",
      "description": "A developer networking platform with real-time features",
      "technologies": "React, Node.js, MongoDB, Socket.io",
      "githubLink": "https://github.com/Madesh-S/devconnect",
      "liveLink": "https://devconnect-demo.com",
      "userId": "507f1f77bcf86cd799439011",
      "createdAt": "2024-01-20T10:30:00.000Z"
    }
  ]
}
```

**Status Codes:**
- `200` - Success
- `404` - User not found

### Create Project
**POST** `/projects`

**Request Body:**
```json
{
  "title": "E-Commerce Website",
  "description": "A full-stack e-commerce platform",
  "technologies": "React, Node.js, MongoDB",
  "githubLink": "https://github.com/Madesh-S/ecommerce",
  "liveLink": "https://ecommerce-demo.com"
}
```

**Response:**
```json
{
  "data": {
    "_id": "507f1f77bcf86cd799439013",
    "title": "E-Commerce Website",
    "description": "A full-stack e-commerce platform",
    "technologies": "React, Node.js, MongoDB",
    "githubLink": "https://github.com/Madesh-S/ecommerce",
    "liveLink": "https://ecommerce-demo.com",
    "userId": "507f1f77bcf86cd799439011",
    "createdAt": "2024-01-21T10:30:00.000Z"
  }
}
```

**Status Codes:**
- `201` - Project created
- `400` - Validation error
- `401` - Unauthorized

### Update Project
**PUT** `/projects/:projectId`

**Request Body:**
```json
{
  "title": "E-Commerce Platform v2.0",
  "description": "Enhanced e-commerce platform with new features",
  "technologies": "React, Node.js, MongoDB, Redis",
  "githubLink": "https://github.com/Madesh-S/ecommerce-v2",
  "liveLink": "https://ecommerce-v2-demo.com"
}
```

**Response:**
```json
{
  "data": {
    "_id": "507f1f77bcf86cd799439013",
    "title": "E-Commerce Platform v2.0",
    "description": "Enhanced e-commerce platform with new features",
    "technologies": "React, Node.js, MongoDB, Redis",
    "githubLink": "https://github.com/Madesh-S/ecommerce-v2",
    "liveLink": "https://ecommerce-v2-demo.com"
  }
}
```

**Status Codes:**
- `200` - Project updated
- `400` - Validation error
- `401` - Unauthorized
- `404` - Project not found

### Delete Project
**DELETE** `/projects/:projectId`

**Response:**
```json
{
  "message": "Project deleted successfully"
}
```

**Status Codes:**
- `200` - Project deleted
- `401` - Unauthorized
- `404` - Project not found

---

## 🛠️ Skills Endpoints

### Get User Skills
**GET** `/skills/:userId`

**Response:**
```json
{
  "data": [
    {
      "_id": "507f1f77bcf86cd799439014",
      "skill": "React",
      "level": "Advanced",
      "userId": "507f1f77bcf86cd799439011"
    },
    {
      "_id": "507f1f77bcf86cd799439015",
      "skill": "Node.js",
      "level": "Advanced",
      "userId": "507f1f77bcf86cd799439011"
    }
  ]
}
```

**Status Codes:**
- `200` - Success
- `404` - User not found

### Add Skill
**POST** `/skills`

**Request Body:**
```json
{
  "skill": "TypeScript",
  "level": "Intermediate"
}
```

**Response:**
```json
{
  "data": {
    "_id": "507f1f77bcf86cd799439016",
    "skill": "TypeScript",
    "level": "Intermediate",
    "userId": "507f1f77bcf86cd799439011"
  }
}
```

**Status Codes:**
- `201` - Skill added
- `400` - Validation error
- `401` - Unauthorized

### Delete Skill
**DELETE** `/skills/:skillId`

**Response:**
```json
{
  "message": "Skill deleted successfully"
}
```

**Status Codes:**
- `200` - Skill deleted
- `401` - Unauthorized
- `404` - Skill not found

---

## 🔗 Connections Endpoints

### Discover Users
**GET** `/connections/discover`

**Response:**
```json
{
  "data": [
    {
      "_id": "507f1f77bcf86cd799439021",
      "name": "Jane Smith",
      "email": "jane@example.com",
      "role": "Backend Developer",
      "place": "San Francisco"
    },
    {
      "_id": "507f1f77bcf86cd799439022",
      "name": "John Doe",
      "email": "john@example.com",
      "role": "Frontend Developer",
      "place": "New York"
    }
  ]
}
```

**Status Codes:**
- `200` - Success
- `401` - Unauthorized

### Get My Connections
**GET** `/connections/my-connections`

**Response:**
```json
{
  "data": [
    {
      "_id": "507f1f77bcf86cd799439021",
      "name": "Jane Smith",
      "role": "Backend Developer",
      "place": "San Francisco",
      "connectionId": "607f1f77bcf86cd799439031",
      "connectedAt": "2024-01-25T10:30:00.000Z"
    }
  ]
}
```

**Status Codes:**
- `200` - Success
- `401` - Unauthorized

### Send Connection Request
**POST** `/connections/request`

**Request Body:**
```json
{
  "recipientId": "507f1f77bcf86cd799439021"
}
```

**Response:**
```json
{
  "message": "Connection request sent successfully"
}
```

**Status Codes:**
- `201` - Request sent
- `400` - Validation error
- `401` - Unauthorized
- `409` - Request already sent

### Respond to Connection Request
**PUT** `/connections/respond/:connectionId`

**Request Body:**
```json
{
  "action": "accept"
}
```

**Response:**
```json
{
  "message": "Connection request accepted successfully"
}
```

**Status Codes:**
- `200` - Request processed
- `400` - Invalid action
- `401` - Unauthorized
- `404` - Request not found

### Remove Connection
**DELETE** `/connections/remove/:connectionId`

**Response:**
```json
{
  "message": "Connection removed successfully"
}
```

**Status Codes:**
- `200` - Connection removed
- `401` - Unauthorized
- `404` - Connection not found

### Get Received Requests
**GET** `/connections/requests/received`

**Response:**
```json
{
  "data": [
    {
      "_id": "607f1f77bcf86cd799439041",
      "requester": {
        "_id": "507f1f77bcf86cd799439022",
        "name": "John Doe",
        "role": "UI/UX Designer",
        "place": "Chicago"
      },
      "status": "pending",
      "createdAt": "2024-01-26T10:30:00.000Z"
    }
  ]
}
```

**Status Codes:**
- `200` - Success
- `401` - Unauthorized

### Get Sent Requests
**GET** `/connections/requests/sent`

**Response:**
```json
{
  "data": [
    {
      "_id": "607f1f77bcf86cd799439042",
      "recipient": {
        "_id": "507f1f77bcf86cd799439023",
        "name": "Sarah Wilson",
        "role": "DevOps Engineer",
        "place": "Austin"
      },
      "status": "pending",
      "createdAt": "2024-01-26T11:30:00.000Z"
    }
  ]
}
```

**Status Codes:**
- `200` - Success
- `401` - Unauthorized

---

## 💬 Messages Endpoints

### Get Messages
**GET** `/messages/:connectionId`

**Response:**
```json
[
  {
    "_id": "707f1f77bcf86cd799439051",
    "sender": {
      "_id": "507f1f77bcf86cd799439011",
      "name": "Madesh S"
    },
    "content": "Hello there!",
    "createdAt": "2024-01-27T10:30:00.000Z"
  },
  {
    "_id": "707f1f77bcf86cd799439052",
    "sender": {
      "_id": "507f1f77bcf86cd799439021",
      "name": "Jane Smith"
    },
    "content": "Hi Madesh! How are you?",
    "createdAt": "2024-01-27T10:31:00.000Z"
  }
]
```

**Status Codes:**
- `200` - Success
- `401` - Unauthorized
- `404` - Connection not found

### Send Message
**POST** `/messages`

**Request Body:**
```json
{
  "recipientId": "507f1f77bcf86cd799439021",
  "content": "Hello, let's connect and discuss potential collaboration!"
}
```

**Response:**
```json
{
  "_id": "707f1f77bcf86cd799439053",
  "sender": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "Madesh S"
  },
  "content": "Hello, let's connect and discuss potential collaboration!",
  "createdAt": "2024-01-27T10:32:00.000Z"
}
```

**Status Codes:**
- `201` - Message sent
- `400` - Validation error
- `401` - Unauthorized

---

## ⚠️ Error Responses

### Standard Error Format
```json
{
  "message": "Error description",
  "code": "ERROR_CODE",
  "details": {
    "field": "Specific error details"
  }
}
```

### Common Status Codes
- `200` - Success
- `201` - Created
- `400` - Bad Request (Validation error)
- `401` - Unauthorized (Invalid/Missing token)
- `403` - Forbidden (Insufficient permissions)
- `404` - Not Found (Resource not found)
- `409` - Conflict (Duplicate resource)
- `500` - Internal Server Error

### Example Error Responses
```json
{
  "message": "Invalid email or password",
  "code": "INVALID_CREDENTIALS"
}
```

```json
{
  "message": "Email already exists",
  "code": "EMAIL_EXISTS"
}
```

```json
{
  "message": "JWT token expired",
  "code": "TOKEN_EXPIRED"
}
```

---

## 🌐 WebSocket Events

### Connection
```javascript
const socket = io('http://localhost:5000', {
  auth: {
    token: 'your-jwt-token'
  }
});
```

### Events Emitted by Server:
- `newMessage` - When a new message is received
- `userOnline` - When a connection comes online
- `userOffline` - When a connection goes offline
- `connectionRequest` - When a new connection request is received

### Events Sent by Client:
- `sendMessage` - Send a new message
- `typing` - Notify when user is typing
- `readReceipt` - Mark messages as read

---

## 📊 Rate Limiting

- **Authentication endpoints**: 5 requests per 15 minutes
- **API endpoints**: 100 requests per minute
- **Message endpoints**: 50 requests per minute

---

## 🔐 Security Notes

- All passwords are hashed using bcrypt
- JWT tokens expire after 24 hours
- API endpoints are protected with authentication middleware
- CORS is enabled for frontend domain
- Input validation is implemented on all endpoints

---

*Last Updated: oct 2024*  
*Maintained by: Madesh N*  
*Contact: madeshnickil@gmail.com*