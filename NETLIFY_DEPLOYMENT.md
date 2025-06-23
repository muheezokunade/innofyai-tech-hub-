# Netlify Deployment Guide for InnofyAI

This guide will help you deploy the InnofyAI frontend to Netlify and set up the backend on a separate service.

## 🚀 Frontend Deployment (Netlify)

### Method 1: Deploy via Netlify UI (Recommended)

1. **Prepare for Deployment**
   ```bash
   # Ensure all changes are committed
   git add .
   git commit -m "Prepare for Netlify deployment"
   git push origin main
   ```

2. **Deploy to Netlify**
   - Go to [Netlify](https://netlify.com) and sign up/login
   - Click "New site from Git"
   - Connect your GitHub account
   - Select your repository: `muheezokunade/innofyai-tech-hub-`
   - Configure build settings:
     - **Build command**: `npm run build:client`
     - **Publish directory**: `dist`
     - **Base directory**: Leave empty (root)
   - Click "Deploy site"

3. **Environment Variables** (Optional)
   - Go to Site settings > Environment variables
   - Add any environment variables your frontend needs
   - Example: `VITE_API_URL=https://your-backend-url.com`

### Method 2: Deploy via Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Deploy**
   ```bash
   # Build the project
   npm run build:client
   
   # Deploy to Netlify
   netlify deploy --prod --dir=dist
   ```

## 🔧 Backend Deployment

Since Netlify is primarily for static sites, you'll need to deploy your Express.js backend separately. Here are the recommended options:

### Option 1: Railway (Recommended)
1. Go to [Railway](https://railway.app)
2. Connect your GitHub repository
3. Select the repository
4. Railway will auto-detect it's a Node.js app
5. Set environment variables in Railway dashboard
6. Deploy

### Option 2: Render
1. Go to [Render](https://render.com)
2. Create a new Web Service
3. Connect your GitHub repository
4. Configure:
   - **Build Command**: `npm run build:server`
   - **Start Command**: `npm start`
   - **Environment**: Node
5. Deploy

### Option 3: Vercel
1. Go to [Vercel](https://vercel.com)
2. Import your GitHub repository
3. Configure as a Node.js project
4. Deploy

## 🔗 Connecting Frontend to Backend

1. **Update API URL in Frontend**
   ```typescript
   // In your API configuration
   const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
   ```

2. **Set Environment Variables**
   - In Netlify dashboard, go to Site settings > Environment variables
   - Add: `VITE_API_URL=https://your-backend-url.com`

3. **Update CORS in Backend**
   ```typescript
   // In server/middleware/security.ts
   const corsOptions = {
     origin: [
       'https://your-netlify-app.netlify.app',
       'http://localhost:5173'
     ],
     credentials: true
   };
   ```

## 📋 Deployment Checklist

### Frontend (Netlify)
- [ ] Repository connected to Netlify
- [ ] Build command: `npm run build:client`
- [ ] Publish directory: `dist`
- [ ] Environment variables configured
- [ ] Custom domain (optional)
- [ ] SSL certificate (automatic)

### Backend (Railway/Render/Vercel)
- [ ] Repository connected to platform
- [ ] Build command: `npm run build:server`
- [ ] Start command: `npm start`
- [ ] Environment variables configured
- [ ] CORS origins updated
- [ ] Database connection (if applicable)

### Post-Deployment
- [ ] Test all routes work correctly
- [ ] Verify API calls to backend
- [ ] Check SEO meta tags
- [ ] Test responsive design
- [ ] Verify security headers
- [ ] Monitor performance

## 🔍 Troubleshooting

### Common Issues

1. **Build Fails**
   - Check build logs in Netlify dashboard
   - Ensure all dependencies are in package.json
   - Verify Node.js version compatibility

2. **API Calls Fail**
   - Check CORS configuration in backend
   - Verify API URL in frontend environment variables
   - Ensure backend is deployed and accessible

3. **Routing Issues**
   - Verify netlify.toml redirects are configured
   - Check that SPA routing is working

4. **Environment Variables**
   - Ensure variables are prefixed with `VITE_` for frontend
   - Check that variables are set in Netlify dashboard

### Performance Optimization

1. **Enable Netlify Functions** (if needed)
   - Create `netlify/functions/` directory
   - Add serverless functions for API calls

2. **Image Optimization**
   - Use Netlify's image optimization
   - Implement lazy loading for images

3. **Caching**
   - Leverage Netlify's CDN
   - Configure cache headers in netlify.toml

## 📊 Monitoring

1. **Netlify Analytics**
   - Enable in Site settings
   - Monitor page views and performance

2. **Error Tracking**
   - Set up error monitoring (Sentry, LogRocket)
   - Monitor build failures

3. **Performance**
   - Use Lighthouse CI
   - Monitor Core Web Vitals

## 🔄 Continuous Deployment

Your site will automatically redeploy when you push changes to the main branch. To set up branch deployments:

1. Go to Site settings > Build & deploy
2. Configure branch deploy settings
3. Set up preview deployments for pull requests

## 📞 Support

- [Netlify Documentation](https://docs.netlify.com)
- [Netlify Community](https://community.netlify.com)
- [Railway Documentation](https://docs.railway.app)
- [Render Documentation](https://render.com/docs)

---

**Your InnofyAI application will be live at: `https://your-app-name.netlify.app`** 