import About from './components/About'
import Brands from './components/Brands'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Locations from './components/Locations'
import Navbar from './components/Navbar'
import ProductGrid from './components/ProductGrid'
import ServiceStrip from './components/ServiceStrip'
import SourcingBand from './components/SourcingBand'
import UtilityStrip from './components/UtilityStrip'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <UtilityStrip />
        <ProductGrid />
        <ServiceStrip />
        <SourcingBand />
        <HowItWorks />
        <About />
        <Brands />
        <Locations />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
