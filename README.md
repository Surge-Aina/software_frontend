# Portfolio Frontend

A modern, responsive portfolio application built with React, TypeScript, and Vite. Features a dynamic UI with interactive components, smooth animations, and a professional design inspired by the "Athos Dark" template.

## 🚀 Features

- **Modern UI/UX**: Card-based layout with glassmorphism effects
- **Interactive Components**: Clickable project cards with detailed modals
- **Dynamic Styling**: Section-specific font size controls
- **Skill Management**: Star ratings, descriptions, and usage tracking
- **Responsive Design**: Mobile-first approach with smooth transitions
- **Real-time Updates**: Live editing capabilities for portfolio content
- **Professional Styling**: Gradient backgrounds, shimmer effects, and hover animations

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **CSS3** - Custom styling with Flexbox/Grid
- **React Router DOM** - Client-side routing
- **React Icons** - Icon library
- **Vitest** - Testing framework
- **React Testing Library** - Component testing

## 📦 Installation

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🎯 Available Scripts

```bash
# Start development server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm run test

# Run tests with UI
npm run test:ui

# Type checking
npm run type-check
```

## 🏗️ Project Structure

```
frontend/
├── public/                 # Static assets
├── src/
│   ├── components/        # Reusable components
│   ├── App.jsx           # Main application component
│   ├── App.css           # Global styles
│   ├── main.jsx          # Application entry point
│   └── test-setup.ts     # Test configuration
├── package.json          # Dependencies and scripts
├── vite.config.ts        # Vite configuration
├── vitest.config.ts      # Test configuration
└── README.md            # This file
```

## 🎨 UI Components

### Header Section
- User name and tagline
- Professional photo
- Base rem controls for global font sizing

### Skills Section
- Interactive skill cards with star ratings
- Skill descriptions and usage tracking
- Inline editing capabilities
- Modal view for detailed skill information

### Projects Section
- Card-based project display
- Tech stack tags
- Clickable project modals
- Image upload support

### Experience Section
- Timeline-style experience display
- Company and role information
- Duration and responsibilities

### Education Section
- Academic achievements
- Institution details
- Graduation dates

### Certifications Section
- Professional certifications
- Issuing organizations
- Certificate images

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the frontend directory:

```env
VITE_API_URL=http://localhost:5100
VITE_PORT=5173
```

### Vite Configuration
The application uses Vite with the following configuration:
- Development server on port 5173
- Proxy to backend API on port 5100
- Hot module replacement enabled
- TypeScript support

## 🧪 Testing

The application includes comprehensive testing setup:

```bash
# Run all tests
npm run test

# Run tests with coverage
npm run test -- --coverage

# Run tests in watch mode
npm run test -- --watch
```

### Test Structure
- **Unit Tests**: Component functionality
- **Integration Tests**: API interactions
- **UI Tests**: User interactions and accessibility

## 🎯 Key Features

### Section-Specific Controls
Each section has independent font size controls:
- About section
- Skills section
- Projects section
- Experience section
- Education section
- Certifications section

### Interactive Modals
- **Project Modals**: Detailed project information with images
- **Skill Modals**: Skill usage across projects and experience
- **Edit Modals**: Inline editing for portfolio content

### Dynamic Styling
- CSS custom properties for theme management
- Responsive design with mobile-first approach
- Smooth animations and transitions
- Professional color schemes

## 🔄 State Management

The application uses React hooks for state management:
- `useState` for local component state
- `useEffect` for side effects and API calls
- Custom hooks for reusable logic

## 🌐 API Integration

The frontend communicates with the backend API:
- **Base URL**: `http://localhost:5100`
- **Endpoints**: `/portfolio/*`
- **Methods**: GET, POST, PUT, DELETE
- **File Uploads**: Image uploads for projects and certifications

## 📱 Responsive Design

The application is fully responsive:
- **Desktop**: Full-featured layout with all controls
- **Tablet**: Optimized for touch interactions
- **Mobile**: Stacked layout with touch-friendly buttons

## 🎨 Styling

### Color Schemes
- **Primary**: Dark blue gradient (#0f2027 → #2c5364)
- **Accent**: Turquoise (#00adb5)
- **Text**: White (#ffffff)
- **Secondary**: Light gray (#eeeeee)

### Typography
- **Base Font**: System fonts with fallbacks
- **Headings**: Bold weights for hierarchy
- **Body Text**: Readable line heights and spacing

### Animations
- **Hover Effects**: Smooth transitions on interactive elements
- **Loading States**: Skeleton screens and spinners
- **Page Transitions**: Fade and slide animations

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options
- **Vercel**: Zero-config deployment
- **Netlify**: Drag and drop deployment
- **GitHub Pages**: Static site hosting
- **AWS S3**: Cloud storage hosting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new features
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Check the documentation
- Review the API documentation

---

**Built with ❤️ using React, TypeScript, and Vite**
