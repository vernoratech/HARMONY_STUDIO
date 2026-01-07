import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import SchedulePage from './pages/SchedulePage';
import AboutPage from './pages/AboutPage';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
};

// Page wrapper for transitions
const PageWrapper = ({ children }) => {
  return (
    <div className="page-enter-active">
      {children}
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black font-sans text-gray-900 selection:bg-[#F5A623]/20 selection:text-[#F5A623]">
        <ScrollToTop />
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
            <Route path="/services" element={<PageWrapper><ServicesPage /></PageWrapper>} />
            <Route path="/schedule" element={<PageWrapper><SchedulePage /></PageWrapper>} />
            <Route path="/about" element={<PageWrapper><AboutPage /></PageWrapper>} />
            <Route path="/pricing" element={<PageWrapper><PricingPage /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><ContactPage /></PageWrapper>} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
