# AP Capstone Project - Full Stack Authentication System

## Project Proposal

### Project Overview
This project is a full-stack web application demonstrating secure user authentication and authorization. The application implements industry-standard security practices including password hashing, JWT-based authentication, and secure session management.

### Problem Statement
Modern web applications require secure user authentication systems to protect user data and ensure only authorized users can access protected resources. This project addresses the need for a robust, scalable authentication solution that can serve as a foundation for larger applications.

### Objectives
1. Implement a secure user registration system with password hashing
2. Create a login system with JWT token generation and validation
3. Build a responsive frontend interface for user interaction
4. Deploy the application to production environments
5. Integrate a cloud-based database for data persistence

### Technology Stack

#### Frontend
- **React** - Modern JavaScript library for building user interfaces
- **Axios** - HTTP client for API communication
- **React Router** - Client-side routing
- **CSS3** - Styling and responsive design
- **Deployment**: Netlify/Vercel

#### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database for user data storage
- **Mongoose** - MongoDB object modeling
- **bcryptjs** - Password hashing library
- **jsonwebtoken** - JWT token generation and verification
- **cors** - Cross-origin resource sharing
- **dotenv** - Environment variable management
- **Deployment**: Render/Railway

#### Database
- **MongoDB Atlas** - Cloud-hosted MongoDB database
- **Deployment**: Atlas Cloud

### Features
1. **User Registration**
   - Email and password validation
   - Secure password hashing using bcrypt
   - Duplicate user prevention
   - Database persistence

2. **User Login**
   - Credential verification
   - JWT token generation
   - Secure token storage
   - Token expiration handling

3. **Security Features**
   - Password hashing with bcrypt (10 salt rounds)
   - JWT-based authentication
   - CORS protection
   - Environment variable protection
   - Input validation

4. **User Experience**
   - Responsive design for all devices
   - Clear error messaging
   - Loading states
   - Success notifications

### Architecture

```
Client (React)
    ↓
API Requests (Axios)
    ↓
Backend Server (Express)
    ↓
Database (MongoDB Atlas)
```

### API Endpoints

#### POST /api/auth/signup
- Creates a new user account
- Request Body: `{ email, password, name }`
- Response: `{ message, user: { id, email, name } }`

#### POST /api/auth/signin
- Authenticates existing user
- Request Body: `{ email, password }`
- Response: `{ message, token, user: { id, email, name } }`

#### GET /api/auth/verify (Protected)
- Verifies JWT token validity
- Headers: `Authorization: Bearer <token>`
- Response: `{ valid: true, user: { id, email, name } }`

### Database Schema

#### User Collection
```javascript
{
  _id: ObjectId,
  name: String (required),
  email: String (required, unique),
  password: String (required, hashed),
  createdAt: Date (default: Date.now)
}
```

### Deployment Links

**Frontend (Production)**: [Will be added after deployment]
**Backend (Production)**: [Will be added after deployment]
**GitHub Repository**: https://github.com/[your-username]/ap-capstone

### Setup Instructions

#### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB Atlas account
- Netlify/Vercel account
- Render/Railway account

#### Local Development Setup

1. **Clone the repository**
```bash
git clone <repository-url>
cd "AP Capstone"
```

2. **Backend Setup**
```bash
cd backend
npm install
# Create .env file with required variables
npm run dev
```

3. **Frontend Setup**
```bash
cd frontend
npm install
# Create .env file with backend URL
npm start
```

### Environment Variables

#### Backend (.env)
```
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/capstone
JWT_SECRET=your-secret-key-here
PORT=5000
NODE_ENV=production
```

#### Frontend (.env)
```
REACT_APP_API_URL=https://your-backend-url.com
```

### Testing Checklist

- [ ] Sign up with new user credentials
- [ ] Verify new user appears in MongoDB Atlas
- [ ] Confirm password is hashed in database
- [ ] Log in with created credentials
- [ ] Verify JWT token at jwt.io
- [ ] Check token payload contains user data
- [ ] Test error handling (wrong password, duplicate email)
- [ ] Verify CORS is properly configured
- [ ] Test responsive design on mobile/tablet
- [ ] Confirm all environment variables are set

### Expected Deliverables

1. ✅ Functional frontend deployed on Netlify/Vercel
2. ✅ Functional backend deployed on Render/Railway
3. ✅ MongoDB Atlas database configured and connected
4. ✅ Working signup functionality with password hashing
5. ✅ Working signin functionality with JWT generation
6. ✅ GitHub repository with complete code
7. ✅ README with project proposal and hosted links
8. ✅ All links functional and verified

### Security Considerations

- Passwords are never stored in plain text
- JWT tokens have expiration times
- Sensitive data protected with environment variables
- CORS configured to prevent unauthorized access
- Input validation on both client and server
- HTTPS used in production

### Future Enhancements

- Password reset functionality
- Email verification
- OAuth integration (Google, GitHub)
- User profile management
- Role-based access control
- Session management
- Two-factor authentication

### Author
[Your Name]

### License
MIT License

---

**Note**: This project is created for educational purposes as part of the AP Capstone evaluation.
