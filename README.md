# McHans Cosmetics

## Project Overview

McHans Cosmetics is a modern, responsive cosmetics website built with React, Vite, and Tailwind CSS. The site showcases premium cosmetics products with a focus on accessibility for all users.

### What This Site Does
- **Product Showcase**: Displays a range of cosmetics products with detailed descriptions and images
- **Hero Section**: Welcoming landing area with brand messaging
- **About Sections**: Information about the products and the innovator behind the brand
- **Accessible Design**: Integrated with the Boafo Accessibility Widget to ensure the site is usable by everyone, including users with disabilities

### Tech Stack
- **React 18.3.1** - Frontend framework
- **Vite 5.4.10** - Build tool and dev server
- **Tailwind CSS 3.4.15** - Styling framework
- **Boafo Accessibility Widget 1.1.8** - Accessibility features
- **Lucide React 0.460.0** - Icons
- **Swiper 11.1.15** - Carousel/slider functionality

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/GROW-YAI/mchans_cosmeticss.git
   cd mchans_cosmeticss
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Copy the example environment file:
     ```bash
     cp .env.example .env
     ```
   - Get your Boafo API key:
     - Visit [boafo.co](https://boafo.co) to register
     - Log in to your dashboard
     - Copy your API key
   - Add your API key to the `.env` file:
     ```
     VITE_BOAFO_API_KEY=your_api_key_here
     ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   - Navigate to `http://localhost:5173`
   - Verify the Boafo accessibility widget loads correctly

## Boafo Widget Integration

This site uses the Boafo Accessibility Widget to provide comprehensive accessibility features for users with disabilities.

### How to Get Your Boafo API Key
1. Visit [boafo.co](https://boafo.co)
2. Register for an account
3. Log in to your dashboard
4. Copy your API key from the dashboard

### Boafo Widget Integration Guide
For detailed information about configuring and customizing the Boafo widget, refer to the official documentation:
[Boafo Widget Integration Guide](https://drive.google.com/file/d/1tvwK-sBZI2a4uldd6z5LD1iLblSl3WbG/view?usp=sharing)

## Project Structure
- `app/layout.tsx` - Root layout with widget initialization
- `app/components/BoafoWidgetInitializer.tsx` - Widget initialization logic
- `src/components/` - React components
- `public/assets/` - Static assets
- `tailwind.config.js` - Tailwind configuration

## Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Accessibility Features
The Boafo widget provides:
- Screen reader support
- Keyboard navigation
- Text resizing
- Color contrast adjustments
- Focus indicators
- And more accessibility tools

## Contributing
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License
This project is licensed under the MIT License.

