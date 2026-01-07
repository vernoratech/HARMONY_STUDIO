# ✨ HARMONY STUDIO

![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)

> **Where Passion Meets Purpose.** Use movement to transform your body, elevate your mind, and discover your rhythm.

HARMONY STUDIO is a premium wellness & dance studio website built with **React**, **Vite**, and **Tailwind CSS**. It features a modern, glassmorphism-inspired UI with smooth animations, interactive elements, and a fully responsive design.

---

## 🌟 Key Features

### 🎨 Premium UI/UX
- **Glassmorphism Design**: Frosted glass effects on navbars, cards, and overlays.
- **Gold & Dark Theme**: Luxurious color palette (`#F5A623` Gold + Dark backgrounds).
- **Smooth Animations**: Fade-ins, slide transitions, hover lifts, and glowing effects.
- **Responsive Layout**: Flawless experience across mobile, tablet, and desktop devices.
- **Custom Typography**: Integration of `Outfit` (Headings) and `Inter` (Body) Google Fonts.

### 🧩 Components & Pages
- **Interactive Navbar**: Scroll-aware, transparent-to-solid transition, and mobile drawer.
- **Hero Section**: Full-screen immersive hero with animated gradients and CTAs.
- **Services Showcase**: Detailed cards for Dance, Yoga, and Zumba with zoom effects.
- **Class Schedule**: Tab-based interactive weekly schedule with color-coded classes.
- **Pricing Plans**: 3-tier comparison with "Most Popular" highlighting.
- **Testimonials**: Carousel of member success stories.
- **Contact Form**: Stylish form with validation styling and map placeholder.

### 🛠 Technical Highlights
- **Tailwind CSS v4**: configured for high performance and modern utility usage.
- **SPA Routing**: Full client-side routing with `react-router-dom`.
- **Component Architecture**: Reusable UI components (`ServiceCard`, `InstructorCard`, `primary-btn`).
- **Data Driven**: Centralized data management for easy updates (schedule, prices, staff).
- **Vercel Ready**: Configured with `vercel.json` for seamless SPA deployment.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/vernoratech/HARMONY_STUDIO.git
   cd HARMONY_STUDIO
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

---

## 📂 Project Structure

```bash
src/
├── assets/          # Images and icons
├── components/      # Reusable UI components
│   ├── ui/          # Core atoms (Cards, Headings, Buttons)
│   ├── Navbar.jsx   # Responsive Navigation
│   └── Footer.jsx   # Site Footer
├── data/            # Centralized content (Schedule, Pricing, etc.)
├── pages/           # Route views (Home, About, Services...)
├── index.css        # Global styles & Tailwind directives
└── main.jsx         # Application entry point
```

---

## 🖌️ Design System

### Colors
- **Primary Gold**: `#F5A623` (Brand Accent)
- **Gold Light**: `#FFBE4D` (Hover States)
- **Dark Surface**: `#0A0A0A` (Backgrounds)
- **Glass Overlay**: `rgba(255, 255, 255, 0.1)` (Backdrop Blur)

### Typography
- **Headings**: `Outfit`, sans-serif (Bold, Modern)
- **Body**: `Inter`, sans-serif (Clean, Readable)

---

## 📦 Deployment

This project is configured for easy deployment on **Vercel**.

1. Push your code to a GitHub repository.
2. Log in to [Vercel](https://vercel.com) and import the project.
3. Vercel will detect Vite and deploy automatically.
4. The included `vercel.json` ensures all routes work correctly.

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

<p align="center">
  Built with ❤️ by the VernoraTech Team
</p>
