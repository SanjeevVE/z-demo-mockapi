# Kashmir Tour Package Demo

A modern, scalable Next.js application showcasing a Kashmir tour package with professional architecture and maintainable code structure.

## 🚀 Features

- **Modern Architecture**: Clean separation of concerns with services, hooks, and components
- **Type Safety**: Full TypeScript implementation with proper interfaces
- **Error Handling**: Comprehensive error boundaries and API error handling
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Performance Optimized**: Next.js 15 with latest optimizations
- **Accessibility**: ARIA labels and keyboard navigation support
- **Form Validation**: Client-side validation with proper error messages
- **Social Sharing**: Integrated social media sharing functionality

## 🏗️ Architecture

### Directory Structure

```
src/
├── app/                 # Next.js app router
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Main page component
│   └── types.ts        # Global type definitions
├── components/         # Reusable UI components
│   ├── layout/         # Layout components (Header, Footer)
│   ├── ui/            # UI components (Hero, PackageCard, etc.)
│   ├── modals/        # Modal components
│   └── index.ts       # Component exports
├── hooks/             # Custom React hooks
│   ├── usePackageData.ts
│   ├── useModal.ts
│   ├── useCarousel.ts
│   └── index.ts
├── services/          # API services
│   ├── api.ts         # API client and services
│   └── index.ts
├── utils/             # Utility functions
│   ├── formatters.ts  # Data formatting utilities
│   ├── validators.ts  # Form validation utilities
│   └── index.ts
├── constants/         # Application constants
│   └── index.ts
└── types/             # Type definitions
    └── index.ts
```

### Key Architectural Patterns

1. **Service Layer**: Centralized API logic with error handling
2. **Custom Hooks**: Reusable state management logic
3. **Component Composition**: Modular, reusable components
4. **Type Safety**: Comprehensive TypeScript coverage
5. **Error Boundaries**: Graceful error handling
6. **Constants Management**: Centralized configuration

## 🛠️ Setup Instructions

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd z-demo-mockapi
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   # Copy the example environment file
   cp env.example .env.local
   
   # Edit .env.local with your configuration
   ```

4. **Development**
   ```bash
   npm run dev
   ```

5. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run type-check` - TypeScript type checking
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run analyze` - Analyze bundle size
- `npm run clean` - Clean build artifacts

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file with the following variables:

```env
# API Configuration
NEXT_PUBLIC_API_BASE_URL=https://68c41ec381ff90c8e61b4cab.mockapi.io

# App Configuration
NEXT_PUBLIC_APP_NAME="Kashmir: Heaven on Earth"
NEXT_PUBLIC_COMPANY_NAME="EASZ Trip"
NEXT_PUBLIC_SHARE_URL=https://wireframepro.mockflow.com

# Contact Information
NEXT_PUBLIC_CONTACT_EMAIL=easztrip@gmail.com
NEXT_PUBLIC_CONTACT_PHONE=+91 95000 41558
NEXT_PUBLIC_CONTACT_ADDRESS="2nd Avenue, Anna Salai, Teynampet, Chennai 600018."
```

## 🎨 Styling

The application uses **Tailwind CSS** for styling with:

- Custom color palette for brand consistency
- Responsive design utilities
- Custom animations and transitions
- Component-specific styling

## 📱 Features Overview

### Main Components

1. **Header**: Logo and share button
2. **Hero Carousel**: Image slider with navigation
3. **Package Card**: Tour information and pricing
4. **Info Sections**: Detailed tour information
5. **Footer**: Contact information
6. **Enquiry Modal**: Contact form with validation
7. **Share Modal**: Social media sharing options

### Key Functionality

- **Image Carousel**: Touch/swipe support with navigation dots
- **Form Validation**: Real-time validation with error messages
- **Social Sharing**: WhatsApp, Instagram, Facebook integration
- **Responsive Design**: Optimized for all screen sizes
- **Error Handling**: Graceful error states and retry mechanisms
- **Loading States**: Smooth loading indicators

## 🔒 Code Quality

### Linting & Formatting

- **ESLint**: Code quality and consistency
- **Prettier**: Code formatting
- **TypeScript**: Type safety and IntelliSense

### Best Practices

- **Component Composition**: Reusable, composable components
- **Custom Hooks**: Logic separation and reusability
- **Error Boundaries**: Graceful error handling
- **Type Safety**: Comprehensive TypeScript coverage
- **Accessibility**: ARIA labels and keyboard navigation
- **Performance**: Optimized images and lazy loading

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms

The application can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support, please contact:
- Email: easztrip@gmail.com
- Phone: +91 95000 41558

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**