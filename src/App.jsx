import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ProblemSection from './components/ProblemSection'
import SolutionSection from './components/SolutionSection'
import HowItWorksSection from './components/HowItWorksSection'
import OneAppSection from './components/OneAppSection'
import HomePulseSection from './components/HomePulseSection'
import WhyGoServSection from './components/WhyGoServSection'
import VisionSection from './components/VisionSection'
import ComingSoonSection from './components/ComingSoonSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <OneAppSection />
      <HomePulseSection />
      <WhyGoServSection />
      <VisionSection />
      <ComingSoonSection />
      <Footer />
    </div>
  )
}

