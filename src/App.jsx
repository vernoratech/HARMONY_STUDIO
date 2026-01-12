import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import SchedulePage from "./pages/SchedulePage";
import AboutPage from "./pages/AboutPage";
import PricingPage from "./pages/PricingPage";
import ContactPage from "./pages/ContactPage";
import GalleryPage from "./pages/GalleryPage";
import NotFoundPage from "./pages/NotFoundPage";
import InstructorDetailPage from "./pages/InstructorDetailPage";
import CookieConsent from "./components/ui/CookieConsent";

import SplashCursor from "./components/ui/SplashCursor";

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

// Page wrapper for transitions
const PageWrapper = ({ children }) => {
  return <div className="page-enter-active">{children}</div>;
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black font-sans text-gray-900 selection:bg-[#F5A623]/20 selection:text-[#F5A623]">
        <ScrollToTop />
        <Navbar />

        <main>
          <Routes>
            <Route
              path="/"
              element={
                <PageWrapper>
                  <HomePage />
                </PageWrapper>
              }
            />
            <Route
              path="/services"
              element={
                <PageWrapper>
                  <ServicesPage />
                </PageWrapper>
              }
            />
            <Route
              path="/services/:type"
              element={
                <PageWrapper>
                  <ServiceDetailPage />
                </PageWrapper>
              }
            />
            <Route
              path="/schedule"
              element={
                <PageWrapper>
                  <SchedulePage />
                </PageWrapper>
              }
            />
            <Route
              path="/about"
              element={
                <PageWrapper>
                  <AboutPage />
                </PageWrapper>
              }
            />
            <Route
              path="/pricing"
              element={
                <PageWrapper>
                  <PricingPage />
                </PageWrapper>
              }
            />
            <Route
              path="/contact"
              element={
                <PageWrapper>
                  <ContactPage />
                </PageWrapper>
              }
            />
            <Route
              path="/gallery"
              element={
                <PageWrapper>
                  <GalleryPage />
                </PageWrapper>
              }
            />
            <Route
              path="/instructors/:name"
              element={
                <PageWrapper>
                  <InstructorDetailPage />
                </PageWrapper>
              }
            />

            {/* 404 Catch-all - Must be last */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <Footer />
        <CookieConsent />
        <SplashCursor
          SIM_RESOLUTION={32}
          DYE_RESOLUTION={512}
          DENSITY_DISSIPATION={4}
          VELOCITY_DISSIPATION={1.5}
          PRESSURE={0.1}
          PRESSURE_ITERATIONS={10}
          CURL={2}
          SPLAT_RADIUS={0.3}
          SPLAT_FORCE={4000}
          COLOR_UPDATE_SPEED={15}
        />
      </div>
    </Router>
  );
}

export default App;
