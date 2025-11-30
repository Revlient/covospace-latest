import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import GallerySection from './components/sections/Gallery';
import Pricing from './components/sections/Pricing';
import ClientMarquee from './components/sections/ClientMarquee';
import Blog from './components/sections/Blog';
import Footer from './components/sections/Footer';
import { Routes, Route, Navigate } from 'react-router-dom';
import PrivateOffices from './pages/PrivateOffices';
import DedicatedDesk from './pages/DedicatedDesk';
import FlexiDesk from './pages/FlexiDesk';
import VirtualOffices from './pages/VirtualOffices';
import MeetingRooms from './pages/MeetingRooms';
import About from './pages/About';
import Location from './pages/Location';
import OurClients from './pages/OurClients';
import Contact from './pages/Contact';
import CompanyRegistration from './pages/CompanyRegistration';
import Gallery from './pages/Gallery';
import Careers from './pages/Careers';
import BlogsPage from './pages/Blogs';
import BlogDetail from './pages/BlogDetail';
import { QuotePanelProvider } from './components/ui/QuotePanelProvider';
import FloatingSocialMenu from './components/ui/FloatingSocialMenu';
import Terms from './components/sections/Terms';
import Privacy from './components/sections/Privacy';

function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <GallerySection />
      <Pricing />
      <ClientMarquee />
      <Blog />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen">
      <QuotePanelProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/private-offices" element={<PrivateOffices />} />
          <Route path="/dedicated-desk" element={<DedicatedDesk />} />
          <Route path="/flexi-desk" element={<FlexiDesk />} />
          <Route path="/virtual-offices" element={<VirtualOffices />} />
          <Route path="/meeting-rooms" element={<MeetingRooms />} />
          <Route path="/about" element={<About />} />
          <Route path="/location" element={<Location />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/our-clients" element={<OurClients />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/company-registration" element={<CompanyRegistration />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blogs/:slug" element={<BlogDetail />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/policy" element={<Privacy/>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <FloatingSocialMenu />
      </QuotePanelProvider>
    </div>
  );
}

export default App;