import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

export default function Contents() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 pt-8 pb-16">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:underline text-blue-700">R-Smile Dental Care</Link> <span className="mx-1">&gt;</span> <span>Contents</span>
        </nav>
        <div className="text-blue-800" style={{ fontFamily: 'Open Sans, sans-serif' }}>
          <div className="space-y-2">
            <Link to="/" className="block text-lg font-medium hover:underline">Home</Link>
            <div>
              <span className="font-medium">Our Staff</span>
              <div className="ml-6">
                <Link to="/staff/howard-cetel" className="block hover:underline">Dr. Howard Cetel</Link>
                <Link to="/staff/rashmi-srivastava" className="block hover:underline">Dr. Rashmi Srivastava</Link>
                <Link to="/staff/members" className="block hover:underline">Staff Members</Link>
              </div>
            </div>
            <div>
              <span className="font-medium">Our Office</span>
              <div className="ml-6">
                <a href="/office#forms" className="block hover:underline">Forms and Patient Education</a>
                <a href="/office#insurance" className="block hover:underline">Insurance and Billing</a>
                <a href="/office#gallery" className="block hover:underline">Office Gallery</a>
              </div>
            </div>
            <Link to="/specials" className="block font-medium hover:underline">Specials</Link>
            <div>
              <span className="font-medium">Services</span>
              <div className="ml-6">
                <a href="/services#invisalign" className="block hover:underline">Invisalign</a>
                <a href="/services#teeth-cleaning" className="block hover:underline">Teeth Cleaning</a>
                <a href="/services#teeth-whitening" className="block hover:underline">Teeth Whitening</a>
                <a href="/services#crowns" className="block hover:underline">Crowns</a>
                <a href="/services#root-canal" className="block hover:underline">Root Canal</a>
                <a href="/services#dental-implants" className="block hover:underline">Dental Implants</a>
                <a href="/services#dentures" className="block hover:underline">Dentures</a>
                <a href="/services#oral-surgery" className="block hover:underline">Oral Surgery</a>
                <a href="/services#emergency-care" className="block hover:underline">Emergency Care</a>
              </div>
            </div>
            <Link to="/blog" className="block font-medium hover:underline">Blog</Link>
            <Link to="/testimonials" className="block font-medium hover:underline">Testimonials</Link>
            <Link to="/contact" className="block font-medium hover:underline">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
} 