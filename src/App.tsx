import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import HowItWorksSection from './components/HowItWorksSection';
import StagesSection from './components/StagesSection';
import UspSection from './components/UspSection';
import TestimonialSection from './components/TestimonialSection';
import FaqSection from './components/FaqSection';
import FinalCtaSection from './components/FinalCtaSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-beige">
      <HeroSection />
      <AboutSection />
      <HowItWorksSection />
      <StagesSection />
      <UspSection />
      <TestimonialSection />
      <FaqSection />
      <FinalCtaSection />
      <Footer />
    </div>
  );
}

export default App;
