# Complete Deployment Guide for AP Capstone Project

This guide will walk you through deploying your full-stack authentication application step by step.

---

## 📋 Pre-Deployment Checklist

Before starting, ensure you have accounts for:
- [ ] MongoDB Atlas (free tier)
- [ ] Render or Railway (for backend)
- [ ] Netlify or Vercel (for frontend)
- [ ] GitHub account

---

## 🗄️ Step 1: Database Setup (MongoDB Atlas)

### 1.1 Create MongoDB Atlas Account
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
2. Sign up for a free account
3. Verify your email

### 1.2 Create a New Cluster
1. Click **"Build a Database"**
2. Choose **FREE** tier (M0 Sandbox)
3. Select a cloud provider (AWS recommended)
4. Choose a region closest to you
5. Name your cluster (e.g., "CapstoneCluster")
6. Click **"Create"**
7. Wait 3-5 minutes for cluster creation

### 1.3 Set Up Database Access
1. Go to **Database Access** (left sidebar)
2. Click **"Add New Database User"**
3. Choose **"Password"** authentication
4. Username: `capstone_user` (or your choice)
5. Password: Click **"Autogenerate Secure Password"** and COPY IT
6. Database User Privileges: **"Read and write to any database"**
7. Click **"Add User"**

### 1.4 Configure Network Access
1. Go to **Network Access** (left sidebar)
2. Click **"Add IP Address"**
3. Click **"Allow Access from Anywhere"** (0.0.0.0/0)
   - *Note: In production, you'd restrict this to specific IPs*
4. Click **"Confirm"**

### 1.5 Get Connection String
1. Go to **Database** (left sidebar)
2. Click **"Connect"** on your cluster
3. Choose **"Connect your application"**
4. Driver: **Node.js**, Version: **4.1 or later**
5. Copy the connection string - it looks like:
   ```
   mongodb+srv://capstone_user:<password>@capstone.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
6. Replace `<password>` with the password you copied earlier
7. Add database name before the `?`: 
   ```
   mongodb+srv://capstone_user:YOUR_PASSWORD@capstone.xxxxx.mongodb.net/capstone?retryWrites=true&w=majority
   ```
8. **SAVE THIS CONNECTION STRING** - you'll need it for backend deployment

---

## 🚀 Step 2: Backend Deployment (Render)

### 2.1 Prepare Your Code
1. Ensure all backend files are committed to GitHub
2. Push your code to GitHub:
   ```bash
   cd "AP Capstone"
   git init
   git add .
   git commit -m "Initial commit with complete project"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/ap-capstone.git
   git push -u origin main
   ```

### 2.2 Create Render Account
1. Go to [Render](https://render.com/)
2. Sign up with your GitHub account
3. Authorize Render to access your repositories

### 2.3 Create New Web Service
1. Click **"New +"** → **"Web Service"**
2. Connect your GitHub repository
3. If not visible, click **"Configure account"** and grant access
4. Select your **"ap-capstone"** repository

### 2.4 Configure Service
Fill in the following settings:
- **Name**: `capstone-backend` (or your choice)
- **Region**: Choose closest to you
- **Branch**: `main`
- **Root Directory**: `backend`
- **Runtime**: `Node`
- **Build Command**: `npm install`
- **Start Command**: `npm start`
- **Instance Type**: `Free`

### 2.5 Set Environment Variables
Click **"Advanced"** → **"Add Environment Variable"** and add:

| Key | Value |
|-----|-------|
| `NODE_ENV` | `production` |
| `PORT` | `5000` |
| `MONGODB_URI` | *Your MongoDB connection string from Step 1.5* |
| `JWT_SECRET` | *Generate with: `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`* |
| `JWT_EXPIRE` | `24h` |
| `FRONTEND_URL` | `*` (update later with your frontend URL) |

### 2.6 Deploy
1. Click **"Create Web Service"**
2. Wait 5-10 minutes for deployment
3. Once deployed, you'll see a URL like: `https://capstone-backend.onrender.com`
4. **COPY THIS URL** - you'll need it for frontend

### 2.7 Test Backend
1. Visit `https://your-backend-url.onrender.com/api/health`
2. You should see: `{"status":"success","message":"Server is running",...}`

---

## 🎨 Step 3: Frontend Deployment (Netlify)

### 3.1 Create Environment File
1. In your local project, create `frontend/.env`:
   ```bash
   cd frontend
   cp .env.example .env
   ```
2. Edit `frontend/.env`:
   ```
   REACT_APP_API_URL=https://your-backend-url.onrender.com
   ```
   Replace with your actual Render backend URL

### 3.2 Test Locally First
```bash
# In frontend directory
npm install
npm start
```
Visit `http://localhost:3000` and test signup/signin to ensure it works

### 3.3 Create Netlify Account
1. Go to [Netlify](https://www.netlify.com/)
2. Sign up with your GitHub account
3. Authorize Netlify

### 3.4 Deploy from GitHub
1. Click **"Add new site"** → **"Import an existing project"**
2. Choose **"Deploy with GitHub"**
3. Select your **"ap-capstone"** repository
4. Configure build settings:
   - **Branch**: `main`
   - **Base directory**: `frontend`
   - **Build command**: `npm run build`
   - **Publish directory**: `frontend/build`

### 3.5 Set Environment Variables
1. Go to **Site settings** → **Build & deploy** → **Environment**
2. Click **"Add a variable"**
3. Add:
   - **Key**: `REACT_APP_API_URL`
   - **Value**: `https://your-backend-url.onrender.com`

### 3.6 Deploy
1. Click **"Deploy site"**
2. Wait 3-5 minutes for deployment
3. Netlify will give you a URL like: `https://random-name.netlify.app`
4. You can customize this: **Site settings** → **Domain management** → **Change site name**

### 3.7 Update Backend CORS
1. Go back to Render dashboard
2. Click on your backend service
3. Go to **Environment**
4. Update `FRONTEND_URL` variable to your Netlify URL
5. Save changes (this will trigger a redeploy)

---

## ✅ Step 4: Testing & Verification

### 4.1 Test Sign Up
1. Open your Netlify URL
2. Click **"Sign Up"**
3. Fill in the form:
   - Name: Test User
   - Email: test@example.com
   - Password: test123
4. Click **"Sign Up"**
5. You should be redirected to the dashboard

### 4.2 Verify Database Entry
1. Go to MongoDB Atlas
2. Click **"Browse Collections"** on your cluster
3. You should see:
   - Database: `capstone`
   - Collection: `users`
   - 1 document with your test user
4. Click on the document and verify:
   - ✅ Email is correct
   - ✅ Password is **HASHED** (not plain text)
   - ✅ Name is stored
   - ✅ `createdAt` timestamp exists

### 4.3 Test Sign In
1. Click **"Logout"** (if logged in)
2. Click **"Sign In"**
3. Enter the credentials you just created
4. Click **"Sign In"**
5. You should see the dashboard again

### 4.4 Verify JWT Token
1. On the dashboard, you'll see your JWT token
2. Click **"Verify Token on JWT.io"**
3. This opens jwt.io with your token
4. In the **"Decoded"** section, verify:
   - ✅ **Header**: Algorithm is `HS256`
   - ✅ **Payload**: Contains `id` field
   - ✅ **Payload**: Contains `iat` (issued at) timestamp
   - ✅ **Payload**: Contains `exp` (expiration) timestamp
   - ✅ Token is **Valid** (not expired)

### 4.5 Test Error Handling
1. Try signing up with the same email again
   - ✅ Should show error: "User with this email already exists"
2. Try signing in with wrong password
   - ✅ Should show error: "Invalid email or password"
3. Try signing up with password less than 6 characters
   - ✅ Should show validation error

---

## 📝 Step 5: Update README

1. Open `README.md` in your project
2. Update the deployment links section:
   ```markdown
   ### Deployment Links

   **Frontend (Production)**: https://your-site-name.netlify.app
   **Backend (Production)**: https://capstone-backend.onrender.com
   **GitHub Repository**: https://github.com/YOUR_USERNAME/ap-capstone
   ```
3. Commit and push changes:
   ```bash
   git add README.md
   git commit -m "Add deployment links"
   git push
   ```

---

## 🎯 Final Evaluation Checklist

Before your capstone evaluation, verify:

### Frontend Deployment ✅
- [ ] Hosted link is functional
- [ ] Link belongs to your Netlify/Vercel account
- [ ] Backend URL is integrated and working in production

### Backend Deployment ✅
- [ ] Deployed from your Render/Railway account
- [ ] Database URL points to production (MongoDB Atlas)
- [ ] All API endpoints working

### Database Deployment ✅
- [ ] Link/credentials belong to your Atlas account
- [ ] Can access and view collections

### Sign-Up Verification ✅
- [ ] New signup creates entry in database
- [ ] Password is hashed (not plain text)
- [ ] All user fields are stored correctly

### Sign-In Verification ✅
- [ ] Login works with created credentials
- [ ] JWT token is generated
- [ ] Token verified at jwt.io
- [ ] Token contains valid payload (user id, iat, exp)

### GitHub Repository ✅
- [ ] Frontend URL in README
- [ ] Backend URL in README
- [ ] Project proposal in README
- [ ] All code pushed to GitHub
- [ ] Repository is public (or evaluator has access)

---

## 🔧 Troubleshooting

### Backend Issues
**Problem**: Backend not connecting to database
- Check MongoDB Atlas network access (0.0.0.0/0)
- Verify connection string has correct password
- Ensure database name is in connection string

**Problem**: CORS errors in frontend
- Update `FRONTEND_URL` in Render environment variables
- Redeploy backend after changing CORS settings

### Frontend Issues
**Problem**: API calls failing
- Check `REACT_APP_API_URL` is set correctly in Netlify
- Verify backend URL is accessible
- Check browser console for specific errors

**Problem**: Token not working
- Verify `JWT_SECRET` is set in backend
- Check token hasn't expired
- Ensure Authorization header format: `Bearer <token>`

### Database Issues
**Problem**: Can't see users in database
- Check database name matches in connection string
- Wait 30 seconds and refresh (propagation delay)
- Verify API calls are successful (check Network tab)

---

## 📞 Support Resources

- **MongoDB Atlas Docs**: https://docs.atlas.mongodb.com/
- **Render Docs**: https://render.com/docs
- **Netlify Docs**: https://docs.netlify.com/
- **JWT.io Debugger**: https://jwt.io/

---

## 🎓 What to Present During Evaluation

1. **Show the live site** - Navigate and demonstrate all features
2. **Show MongoDB Atlas** - Prove database entries with hashed passwords
3. **Show JWT token** - Use jwt.io to decode and verify
4. **Show Render dashboard** - Prove backend deployment from your account
5. **Show Netlify dashboard** - Prove frontend deployment from your account
6. **Show GitHub repo** - Display code and README with links
7. **Demonstrate signup flow** - Create a new user live
8. **Demonstrate signin flow** - Login with created credentials

---

## ✨ Tips for a Smooth Evaluation

- Test EVERYTHING the day before
- Have your MongoDB, Render, and Netlify dashboards open in tabs
- Keep jwt.io open in a tab
- Have a test email ready (not previously used)
- Clear browser cache if needed
- Take screenshots of all dashboards as backup
- Ensure stable internet connection

---

**Good luck with your evaluation! 🚀**
