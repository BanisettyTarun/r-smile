import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Testimonials from '../components/Testimonials'
import SafetyInfo from '../components/SafetyInfo'
import OfficeShowcase from '../components/OfficeShowcase'
import VeteranDiscount from '../components/VeteranDiscount'
import WelcomeDr from '../components/WelcomeDr'
import Services from '../components/Services'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Banner />
      <div className="w-full">
        <Testimonials />
      </div>
      <div className="w-full">
        <SafetyInfo />
      </div>
      <div className="w-full">
        <OfficeShowcase />
      </div>
      <div className="w-full">
        <VeteranDiscount />
      </div>
      <div className="w-full flex justify-center items-center">
        <WelcomeDr />
      </div>
      <div className="w-full">
        <Services />
      </div>
    </div>
  )
} 