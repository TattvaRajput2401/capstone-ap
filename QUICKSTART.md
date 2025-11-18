# Quick Start Guide - Local Development

This guide will help you run the project locally on your machine.

---

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** - [Download here](https://git-scm.com/)

---

## Step 1: Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/ap-capstone.git
cd "AP Capstone"
```

---

## Step 2: Set Up MongoDB Atlas

Follow **Step 1** in `DEPLOYMENT_GUIDE.md` to:
1. Create a MongoDB Atlas account
2. Create a free cluster
3. Set up database user
4. Configure network access
5. Get your connection string

---

## Step 3: Set Up Backend

### 3.1 Install Dependencies
```bash
cd backend
npm install
```

### 3.2 Create Environment File
```bash
cp .env.example .env
```

### 3.3 Edit .env File
Open `backend/.env` and update:
```env
MONGODB_URI=mongodb+srv://YOUR_USER:YOUR_PASSWORD@cluster.mongodb.net/capstone?retryWrites=true&w=majority
JWT_SECRET=your-generated-secret-key
PORT=5000
NODE_ENV=development
JWT_EXPIRE=24h
FRONTEND_URL=http://localhost:3000
```

**Generate JWT Secret:**
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### 3.4 Start Backend Server
```bash
npm start
# or for development with auto-reload:
npm run dev
```

You should see:
```
Server is running on port 5000
MongoDB Connected: cluster.xxxxx.mongodb.net
```

---

## Step 4: Set Up Frontend

### 4.1 Open New Terminal
Keep the backend running and open a new terminal window.

### 4.2 Install Dependencies
```bash
cd frontend
npm install
```

### 4.3 Create Environment File
```bash
cp .env.example .env
```

### 4.4 Edit .env File
Open `frontend/.env` and set:
```env
REACT_APP_API_URL=http://localhost:5000
```

### 4.5 Start Frontend
```bash
npm start
```

The app will open automatically at `http://localhost:3000`

---

## Step 5: Test the Application

### Sign Up
1. Click **"Sign Up"**
2. Enter:
   - Name: Your Name
   - Email: test@example.com
   - Password: test123
3. Click **"Sign Up"**
4. You'll be redirected to the dashboard

### Verify in Database
1. Go to MongoDB Atlas
2. Click **"Browse Collections"**
3. See your new user with hashed password

### Sign In
1. Logout from dashboard
2. Click **"Sign In"**
3. Use the credentials you created
4. You'll see the dashboard with JWT token

### Verify JWT Token
1. Click **"Verify Token on JWT.io"**
2. See decoded token with user ID and expiration

---

## Common Commands

### Backend
```bash
# Start production server
npm start

# Start development server (with nodemon)
npm run dev

# Generate JWT secret
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### Frontend
```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test
```

---

## Troubleshooting

### Backend won't start
- Check if MongoDB connection string is correct
- Ensure port 5000 is not already in use
- Verify all dependencies are installed: `npm install`

### Frontend won't connect to backend
- Ensure backend is running on port 5000
- Check `REACT_APP_API_URL` in `frontend/.env`
- Look for errors in browser console (F12)

### Database connection error
- Verify MongoDB Atlas network access includes 0.0.0.0/0
- Check username and password in connection string
- Ensure database name is included in connection string

---

## Project Structure

```
AP Capstone/
├── backend/
│   ├── models/
│   │   └── User.js           # User schema with password hashing
│   ├── routes/
│   │   └── auth.js           # Authentication routes
│   ├── middleware/
│   │   └── auth.js           # JWT verification middleware
│   ├── server.js             # Express server setup
│   ├── package.json          # Backend dependencies
│   └── .env                  # Environment variables (create this)
│
├── frontend/
│   ├── public/
│   │   └── index.html        # HTML template
│   ├── src/
│   │   ├── components/
│   │   │   ├── SignUp.js     # Sign up form
│   │   │   ├── SignIn.js     # Sign in form
│   │   │   └── Dashboard.js  # Protected dashboard
│   │   ├── api/
│   │   │   └── auth.js       # API client with axios
│   │   ├── App.js            # Main app with routing
│   │   ├── App.css           # Styles
│   │   └── index.js          # React entry point
│   ├── package.json          # Frontend dependencies
│   └── .env                  # Environment variables (create this)
│
├── README.md                 # Project documentation
├── DEPLOYMENT_GUIDE.md       # Deployment instructions
└── QUICKSTART.md             # This file
```

---

## Next Steps

Once your local development is working:
1. Follow `DEPLOYMENT_GUIDE.md` to deploy to production
2. Test all features in production environment
3. Update README.md with deployment URLs
4. Prepare for your capstone evaluation

---

## Need Help?

- Check `DEPLOYMENT_GUIDE.md` for detailed deployment steps
- Review `README.md` for project overview and architecture
- Check browser console (F12) for frontend errors
- Check terminal for backend errors

---

**Happy Coding! 💻**
