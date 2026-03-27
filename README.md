# McHans Cosmetics 

## Project Overview

McHans Cosmetics is a modern, responsive cosmetics website built with React and Vite. The site showcases premium cosmetics products with a focus on accessibility for all users.

### What This Site Does
- **Product Showcase**: Displays a range of cosmetics products with detailed descriptions and images
- **Hero Section**: Welcoming landing area with brand messaging
- **About Sections**: Information about the products and the innovator behind the brand
- **Accessible Design**: Integrated with the Boafo Accessibility Widget to ensure the site is usable by everyone, including users with disabilities

### Main Features
- 🎨 Modern, responsive UI with Tailwind CSS
- ♿ Full accessibility support via Boafo widget
- ⚡ Fast performance with Vite and React
- 📱 Mobile-first responsive design
- 🎯 Skip-to-content link for keyboard users
- 🌐 SEO-optimized structure

### Technologies Used
- **React** - Frontend UI library
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Boafo Accessibility Widget** - Accessibility overlay for all users
- **TypeScript** - Type definitions for better code quality

### Accessibility
This website uses the [Boafo Accessibility Widget](https://boafo.co) to make the site accessible to all users, including those with visual, motor, or cognitive disabilities. The widget provides features like:
- Screen reader optimization
- Keyboard navigation enhancements
- Font size adjustments
- High contrast modes
- And more...

---

## How to Get Your Boafo API Key

To use the Boafo accessibility widget on your own deployment:

1. Visit [boafo.co](https://boafo.co)
2. Register for an account
3. Log in to your dashboard
4. Copy your API key from the dashboard

---

## How to Integrate the Boafo Widget

For detailed integration instructions, refer to the official guide:

📄 **[Boafo Widget Integration Guide](https://drive.google.com/file/d/1tvwK-sBZI2a4uldd6z5LD1iLblSl3WbG/view?usp=sharing)**

### Quick Integration Summary

1. Install the package:
   ```bash
   npm install boafo-accessibility-widget
   ```

2. Initialize in your React component:
   ```tsx
   import { initializeBoafoWidget } from "boafo-accessibility-widget";
   
   // Call with your API key
   initializeBoafoWidget(import.meta.env.VITE_BOAFO_API_KEY);
   ```

3. Add your API key to the `.env` file:
   ```
   VITE_BOAFO_API_KEY=your_actual_api_key_here
   ```

---

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm or pnpm

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/GROW-YAI/mchans_cosmeticss.git
   cd mchans_cosmeticss
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   # Copy the example file
   cp .env.example .env
   
   # Edit .env and add your actual Boafo API key
   # VITE_BOAFO_API_KEY=your_actual_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173/` (or the port shown in your terminal)

### Build for Production

```bash
npm run build
# or
pnpm build
```

The built files will be in the `dist/` directory.

---

## Project Structure

```
mchans_cosmeticss/
├── app/                    # Next.js layout files (unused in Vite build)
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── AboutInnovator.jsx
│   │   ├── AboutProduct.jsx
│   │   ├── BoafoWidgetInitializer.tsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── NavBar.jsx
│   │   └── Products.jsx
│   ├── App.jsx            # Main app component
│   ├── App.css            # App styles
│   ├── index.css          # Global styles
│   └── main.jsx           # Entry point
├── .env                   # Environment variables (DO NOT COMMIT)
├── .env.example           # Example environment variables
├── .gitignore             # Git ignore rules
├── index.html             # HTML entry point
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── vite.config.js         # Vite configuration
```

---

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_BOAFO_API_KEY` | Your Boafo accessibility widget API key | Yes |

---

## License

This project is private and proprietary.

---

## Support

For issues with the Boafo accessibility widget, visit [boafo.co](https://boafo.co) or refer to the [integration guide](https://drive.google.com/file/d/1tvwK-sBZI2a4uldd6z5LD1iLblSl3WbG/view?usp=sharing).