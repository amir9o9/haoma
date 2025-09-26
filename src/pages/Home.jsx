import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import OurPath from"../components/OurPath"
import AboutUs from "../components/AboutUs"
import ContactUs from "../components/ContactUs"
import Regstraition from '../components/Regstraition'
import Footer from '../components/Footer'

function Home() {
  return (
    <div  className="min-h-screen overflow-x-hidden">    
        {/* navbar */}
        <Navbar/>
        {/* main content */}
        <main>
          <HeroSection/>
          <OurPath/>
          <AboutUs />
          <ContactUs/>
          <Regstraition/>
        </main>
        {/* footer */}
        <Footer/>
    </div>
  )
}

export default Home