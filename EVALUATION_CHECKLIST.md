# AP Capstone Evaluation Checklist

Use this checklist to ensure everything is ready for your evaluation.

---

## 🗄️ Database Setup (MongoDB Atlas)

- [ ] MongoDB Atlas account created
- [ ] Free tier cluster created
- [ ] Database user created with password
- [ ] Network access configured (0.0.0.0/0)
- [ ] Connection string obtained and tested
- [ ] Can access MongoDB Atlas dashboard
- [ ] Can view collections in database

---

## 🔧 Backend Deployment (Render/Railway)

- [ ] Code pushed to GitHub
- [ ] Render account created
- [ ] Web service created from GitHub repo
- [ ] Environment variables set:
  - [ ] `MONGODB_URI`
  - [ ] `JWT_SECRET`
  - [ ] `NODE_ENV=production`
  - [ ] `PORT=5000`
  - [ ] `JWT_EXPIRE=24h`
  - [ ] `FRONTEND_URL`
- [ ] Backend deployed successfully
- [ ] Backend URL accessible
- [ ] Health check endpoint works (`/api/health`)
- [ ] Can access Render dashboard during evaluation

---

## 🎨 Frontend Deployment (Netlify/Vercel)

- [ ] Frontend environment variable set (`REACT_APP_API_URL`)
- [ ] Netlify account created
- [ ] Site deployed from GitHub
- [ ] Build successful
- [ ] Frontend URL accessible
- [ ] Frontend connects to backend successfully
- [ ] Site loads without errors
- [ ] Can access Netlify dashboard during evaluation
- [ ] Site name customized (optional but recommended)

---

## 🔐 Authentication Testing

### Sign Up Flow
- [ ] Sign up form loads correctly
- [ ] Can enter name, email, password
- [ ] Form validation works (min 6 chars password)
- [ ] Submit button works
- [ ] Success message appears
- [ ] Redirects to dashboard
- [ ] New user appears in MongoDB database
- [ ] Password in database is HASHED (not plain text)
- [ ] All fields stored correctly (name, email, createdAt)

### Sign In Flow
- [ ] Sign in form loads correctly
- [ ] Can enter email and password
- [ ] Form validation works
- [ ] Submit button works
- [ ] Success message appears
- [ ] Redirects to dashboard
- [ ] JWT token is displayed
- [ ] User information shown correctly

### Error Handling
- [ ] Duplicate email shows error message
- [ ] Wrong password shows error message
- [ ] Invalid email format shows error
- [ ] Short password shows validation error
- [ ] Missing fields show validation error

---

## 🎯 JWT Token Verification

- [ ] Token displayed on dashboard
- [ ] "Verify Token on JWT.io" button works
- [ ] Token opens in jwt.io correctly
- [ ] **Header** section shows algorithm (HS256)
- [ ] **Payload** section contains:
  - [ ] `id` field (user ID)
  - [ ] `iat` field (issued at timestamp)
  - [ ] `exp` field (expiration timestamp)
- [ ] Token signature verified as valid
- [ ] Token not expired

---

## 📱 User Interface

- [ ] Design is responsive (works on mobile/tablet)
- [ ] No console errors in browser (F12)
- [ ] Smooth transitions between pages
- [ ] Loading states visible during API calls
- [ ] Success/error messages clearly displayed
- [ ] Dashboard shows user information
- [ ] Logout button works
- [ ] Navigation works (signup ↔ signin)

---

## 📝 GitHub Repository

- [ ] Repository is public (or evaluator has access)
- [ ] All code pushed to GitHub
- [ ] README.md includes:
  - [ ] Project proposal
  - [ ] Technology stack
  - [ ] Features list
  - [ ] Setup instructions
  - [ ] **Frontend deployment URL**
  - [ ] **Backend deployment URL**
  - [ ] API endpoints documentation
- [ ] `.gitignore` excludes sensitive files
- [ ] No `.env` files in repository
- [ ] Clean commit history
- [ ] Latest code deployed matches GitHub

---

## 🌐 URLs Ready for Evaluation

Write down your URLs here:

**Frontend URL**: ___________________________________

**Backend URL**: ___________________________________

**GitHub Repository**: ___________________________________

**MongoDB Atlas Login**: https://cloud.mongodb.com/

**Render Dashboard**: https://dashboard.render.com/

**Netlify Dashboard**: https://app.netlify.com/

---

## 📊 Demonstration Flow

### Step 1: Show Live Site
1. Open frontend URL in browser
2. Show responsive design (resize window)
3. Navigate to sign up page

### Step 2: Demonstrate Sign Up
1. Fill in sign up form with NEW credentials:
   - Name: [Your Name]
   - Email: evaluation@test.com
   - Password: eval123
2. Click Sign Up
3. Show successful redirect to dashboard

### Step 3: Verify Database Entry
1. Open MongoDB Atlas in new tab
2. Navigate to cluster → Browse Collections
3. Show the new user document
4. Point out HASHED password
5. Show all fields (name, email, createdAt)

### Step 4: Verify JWT Token
1. On dashboard, show JWT token
2. Click "Verify Token on JWT.io"
3. Show decoded header (algorithm)
4. Show decoded payload (id, iat, exp)
5. Point out token is valid

### Step 5: Demonstrate Sign In
1. Logout from dashboard
2. Go to sign in page
3. Use same credentials
4. Show successful login
5. Show dashboard appears again

### Step 6: Show Deployment Accounts
1. Open Render dashboard
2. Show backend service
3. Show environment variables
4. Open Netlify dashboard
5. Show frontend site
6. Show build logs (optional)

### Step 7: Show GitHub Repository
1. Open repository
2. Show README with deployment links
3. Show code structure
4. Show recent commits

### Step 8: Demonstrate Error Handling
1. Try signing up with same email
2. Show error message
3. Try wrong password on sign in
4. Show error message

---

## 🔧 Troubleshooting Checklist

If something doesn't work during evaluation:

### Frontend Issues
- [ ] Check browser console (F12)
- [ ] Verify backend URL in Netlify environment variables
- [ ] Try hard refresh (Cmd/Ctrl + Shift + R)
- [ ] Check Network tab for failed requests

### Backend Issues
- [ ] Check Render logs
- [ ] Verify MongoDB connection string
- [ ] Check CORS settings (FRONTEND_URL)
- [ ] Verify all environment variables set

### Database Issues
- [ ] Check MongoDB Atlas network access
- [ ] Wait 30 seconds for changes to propagate
- [ ] Refresh Collections view
- [ ] Verify connection string has database name

---

## 🎯 Key Points to Emphasize

During evaluation, highlight:

1. **Security**: Passwords are hashed, not stored in plain text
2. **Authentication**: JWT tokens with expiration
3. **Full Stack**: React frontend + Express backend + MongoDB
4. **Cloud Deployment**: All services in production
5. **Best Practices**: Environment variables, error handling, validation
6. **User Experience**: Responsive design, loading states, error messages
7. **Professional Setup**: Git version control, documentation, deployment

---

## ⏰ Pre-Evaluation (Day Before)

- [ ] Test complete flow 3 times
- [ ] Clear any test data from database (optional)
- [ ] Check all URLs are working
- [ ] Verify login credentials for all services
- [ ] Take screenshots of dashboards as backup
- [ ] Test on different browser (Chrome, Firefox, Safari)
- [ ] Test on mobile device
- [ ] Prepare fresh test email address
- [ ] Review project proposal in README
- [ ] Practice demonstration flow

---

## ⏰ Pre-Evaluation (1 Hour Before)

- [ ] Test complete flow once more
- [ ] Open all dashboards in separate tabs:
  - [ ] Frontend site
  - [ ] MongoDB Atlas
  - [ ] Render dashboard
  - [ ] Netlify dashboard
  - [ ] GitHub repository
  - [ ] jwt.io
- [ ] Check internet connection
- [ ] Close unnecessary applications
- [ ] Clear browser cache
- [ ] Have this checklist open

---

## 📋 During Evaluation

- [ ] Stay calm and confident
- [ ] Follow the demonstration flow
- [ ] Explain what you're doing at each step
- [ ] Point out key features (hashing, JWT, etc.)
- [ ] Show actual dashboards (proof of ownership)
- [ ] Handle errors gracefully if they occur
- [ ] Answer questions clearly
- [ ] Showcase your understanding of the technology

---

## ✅ Post-Evaluation

- [ ] Thank your evaluator
- [ ] Note any feedback received
- [ ] Address any issues found
- [ ] Keep the project deployed
- [ ] Update portfolio with project link

---

## 🎓 Confidence Boosters

Remember:
- You've built a complete full-stack application
- Your code follows industry best practices
- You understand the entire technology stack
- You can explain each component's purpose
- Your project demonstrates real-world skills
- You're prepared and ready!

---

**You've got this! Good luck! 🚀**

---

## Emergency Contacts

If you need help:
- MongoDB Atlas Support: https://support.mongodb.com/
- Render Status: https://status.render.com/
- Netlify Support: https://www.netlify.com/support/

---

**Last Updated**: _______________

**Evaluation Date**: _______________

**Evaluator Name**: _______________
