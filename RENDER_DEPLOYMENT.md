# Render Backend Deployment Guide for InnofyAI

This guide will help you deploy the InnofyAI Express.js backend to Render and connect it with your Netlify frontend.

## 🚀 Backend Deployment (Render)

### Method 1: Deploy via Render UI (Recommended)

1. **Prepare for Deployment**
   ```bash
   # Ensure all changes are committed
   git add .
   git commit -m "Add Render backend configuration"
   git push origin main
   ```

2. **Deploy to Render**
   - Go to [Render](https://render.com) and sign up/login
   - Click "New +" and select "Web Service"
   - Connect your GitHub account
   - Select your repository: `muheezokunade/innofyai-tech-hub-`
   - Configure the service:
     - **Name**: `innofyai-backend`
     - **Environment**: `Node`
     - **Build Command**: `npm run build:server`
     - **Start Command**: `npm start`
     - **Plan**: Free (or choose paid plan)

3. **Environment Variables**
   - In the Render dashboard, go to Environment
   - Add the following variables:
     ```
     NODE_ENV=production
     PORT=10000
     CORS_ORIGIN=https://your-netlify-app.netlify.app
     RATE_LIMIT_WINDOW_MS=900000
     RATE_LIMIT_MAX_REQUESTS=100
     ```

### Method 2: Deploy via render.yaml (Blueprints)

1. **Using the render.yaml file**
   - Render will automatically detect the `render.yaml` file
   - It will create the service with the specified configuration
   - You can modify the `render.yaml` file to customize the deployment

2. **Manual Blueprint Creation**
   - Go to Render dashboard
   - Click "New +" and select "Blueprint"
   - Connect your GitHub repository
   - Render will use the `render.yaml` configuration

## 🔧 Configuration Details

### Build Process
- **Build Command**: `npm run build:server`
  - Uses esbuild to compile TypeScript to JavaScript
  - Creates optimized production bundle
  - Outputs to `dist/` directory

### Runtime Configuration
- **Start Command**: `npm start`
  - Runs the compiled server from `dist/index.js`
  - Uses production environment variables

### Health Checks
- **Health Check Path**: `/api/health`
  - Returns 200 status with server information
  - Used by Render to monitor service health
  - Automatically restarts service if health check fails

## 🔗 Connecting Frontend to Backend

### 1. Update Frontend API Configuration

Create or update your API configuration in the frontend:

```typescript
// client/src/lib/api.ts
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const apiConfig = {
  baseURL: API_BASE_URL,
  endpoints: {
    health: '/api/health',
    status: '/api/status',
    info: '/api/info'
  }
};

export const apiClient = {
  async get(endpoint: string) {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);
    return response.json();
  },
  
  async post(endpoint: string, data: any) {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }
};
```

### 2. Set Environment Variables in Netlify

1. Go to your Netlify dashboard
2. Navigate to Site settings > Environment variables
3. Add the following variable:
   ```
   VITE_API_URL=https://your-render-app.onrender.com
   ```

### 3. Update CORS Configuration

The backend is already configured to accept requests from your Netlify domain. Update the CORS origin in `server/middleware/security.ts` if needed:

```typescript
const corsOptions = {
  origin: [
    'https://your-netlify-app.netlify.app',
    'http://localhost:5173'
  ],
  credentials: true
};
```

## 📋 Deployment Checklist

### Backend (Render)
- [ ] Repository connected to Render
- [ ] Build command: `npm run build:server`
- [ ] Start command: `npm start`
- [ ] Environment variables configured
- [ ] Health check endpoint working
- [ ] CORS origins updated
- [ ] Service is running and accessible

### Frontend (Netlify)
- [ ] Environment variable `VITE_API_URL` set
- [ ] API calls pointing to Render backend
- [ ] CORS errors resolved
- [ ] All features working with backend

### Post-Deployment Testing
- [ ] Health check endpoint: `https://your-app.onrender.com/api/health`
- [ ] API status endpoint: `https://your-app.onrender.com/api/status`
- [ ] Frontend can communicate with backend
- [ ] All API calls working correctly
- [ ] Error handling working properly

## 🔍 Troubleshooting

### Common Issues

1. **Build Fails**
   - Check build logs in Render dashboard
   - Ensure all dependencies are in package.json
   - Verify TypeScript compilation

2. **Service Won't Start**
   - Check start command in Render dashboard
   - Verify the dist/index.js file exists
   - Check environment variables

3. **Health Check Fails**
   - Verify `/api/health` endpoint returns 200
   - Check server logs for errors
   - Ensure port configuration is correct

4. **CORS Errors**
   - Verify CORS_ORIGIN environment variable
   - Check that frontend URL is in allowed origins
   - Test with curl or Postman

5. **API Calls Fail**
   - Check Render service URL is correct
   - Verify environment variables in Netlify
   - Test API endpoints directly

### Performance Optimization

1. **Enable Auto-Scaling**
   - Upgrade to paid plan for auto-scaling
   - Configure scaling rules based on traffic

2. **Database Connection** (if needed)
   - Use Render's PostgreSQL service
   - Configure connection pooling
   - Set up database environment variables

3. **Caching**
   - Implement Redis for session storage
   - Use CDN for static assets
   - Configure response caching

## 📊 Monitoring

1. **Render Dashboard**
   - Monitor service health
   - View logs and metrics
   - Set up alerts

2. **Health Monitoring**
   - Use `/api/health` endpoint
   - Set up external monitoring (UptimeRobot, etc.)
   - Monitor response times

3. **Error Tracking**
   - Implement error logging
   - Use services like Sentry
   - Monitor API errors

## 🔄 Continuous Deployment

Your backend will automatically redeploy when you push changes to the main branch. To configure:

1. Go to Render dashboard
2. Select your service
3. Go to Settings > Build & Deploy
4. Configure auto-deploy settings

## 📞 Support

- [Render Documentation](https://render.com/docs)
- [Render Community](https://community.render.com)
- [Node.js on Render](https://render.com/docs/deploy-node-express-app)

## 🚀 Quick Deploy Commands

```bash
# Deploy backend to Render
# 1. Push changes to GitHub
git add .
git commit -m "Deploy backend to Render"
git push origin main

# 2. Create service in Render dashboard
# 3. Set environment variables
# 4. Deploy

# Test the deployment
curl https://your-app.onrender.com/api/health
```

---

**Your InnofyAI backend will be live at: `https://your-app-name.onrender.com`** 