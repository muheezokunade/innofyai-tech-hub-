# InnofyAI - Tech Innovation Hub

A modern, full-stack web application showcasing innovative technology solutions and services. Built with React, TypeScript, Express.js, and modern web technologies.

## 🚀 Features

### Frontend
- **Modern React 18** with TypeScript for type safety
- **Responsive Design** with Tailwind CSS and shadcn/ui components
- **SEO Optimized** with meta tags, structured data, and sitemap
- **Performance Optimized** with lazy loading and code splitting
- **Accessibility** compliant with WCAG guidelines
- **Dark/Light Theme** support
- **Mobile-First** responsive design

### Backend
- **Express.js** server with TypeScript
- **Security Middleware** with Helmet, CORS, rate limiting
- **Input Validation** and sanitization
- **Error Handling** with proper logging
- **Production Ready** with Docker support

### SEO & Analytics
- **Meta Tags** optimization for search engines
- **Structured Data** (JSON-LD) for rich snippets
- **Sitemap.xml** and robots.txt
- **Open Graph** and Twitter Card support
- **Breadcrumbs** navigation
- **Internal Linking** strategy
- **Analytics** integration ready

## 🛠️ Tech Stack

### Frontend
- React 18
- TypeScript
- Vite (Build tool)
- Tailwind CSS
- shadcn/ui components
- React Router DOM
- React Helmet Async

### Backend
- Node.js
- Express.js
- TypeScript
- Helmet (Security)
- CORS
- Rate Limiting
- Input Sanitization

### Development Tools
- ESLint
- Prettier
- TypeScript
- Vite
- tsx (TypeScript execution)

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd TechInnovationHub-3
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment setup**
   ```bash
   cp env.example .env
   # Edit .env with your configuration
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

The application will be available at:
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

## 🚀 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build

# Production
npm run start        # Start production server
npm run deploy       # Deploy to production

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
```

## 📁 Project Structure

```
TechInnovationHub-3/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utilities and configurations
│   │   └── data/          # Static data and content
│   └── public/            # Static assets
├── server/                # Express backend
│   ├── middleware/        # Express middleware
│   ├── routes.ts          # API routes
│   └── index.ts           # Server entry point
├── shared/                # Shared types and schemas
├── scripts/               # Deployment and utility scripts
└── docs/                  # Documentation
```

## 🔒 Security Features

- **Helmet.js** for security headers
- **CORS** configuration
- **Rate Limiting** to prevent abuse
- **Input Sanitization** and validation
- **XSS Protection**
- **CSRF Protection**
- **Content Security Policy**

## 🚀 Deployment

### Docker Deployment

1. **Build Docker image**
   ```bash
   docker build -t innofyai .
   ```

2. **Run container**
   ```bash
   docker run -p 5000:5000 innofyai
   ```

### Manual Deployment

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm run start
   ```

### Environment Variables

Create a `.env` file with the following variables:

```env
NODE_ENV=production
PORT=5000
CORS_ORIGIN=http://localhost:5173
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## 🔍 SEO Features

- **Meta Tags** optimization
- **Structured Data** (JSON-LD)
- **Sitemap.xml** generation
- **Robots.txt** configuration
- **Canonical URLs**
- **Open Graph** tags
- **Twitter Cards**
- **Breadcrumbs** navigation
- **Internal Linking** strategy

## 📱 Responsive Design

- **Mobile-First** approach
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch-friendly** interface
- **Progressive Web App** ready

## 🎨 UI/UX Features

- **Modern Design** with shadcn/ui components
- **Dark/Light Theme** toggle
- **Smooth Animations** and transitions
- **Loading States** and skeletons
- **Error Boundaries** for graceful error handling
- **Toast Notifications** for user feedback

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Create an issue in the GitHub repository
- Contact: support@innofyai.com

## 🔄 Version History

- **v1.0.0** - Initial release with core features
- **v1.1.0** - Added SEO optimization and security features
- **v1.2.0** - Production deployment and Docker support

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide React](https://lucide.dev/)

---

**InnofyAI** - Transforming ideas into digital excellence. 