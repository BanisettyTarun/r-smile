import { Link } from 'react-router-dom';
import logo from '../assets/Logo.png';
import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const timeoutRef = useRef(null);

  const staffDropdown = [
    { label: 'DR. HOWARD CETEL', to: '/staff/howard-cetel' },
    { label: 'DR. RASHMI SRIVASTAVA', to: '/staff/rashmi-srivastava' },
    { label: 'STAFF MEMBERS', to: '/staff/members' },
  ];

  const officeDropdown = [
    { label: 'FORMS AND PATIENT EDUCATION', to: '/office#forms' },
    { label: 'INSURANCE AND BILLING', to: '/office#insurance' },
    { label: 'OFFICE GALLERY', to: '/office#gallery' },
  ];

  const servicesDropdown = [
    { label: 'INVISALIGN', to: '/services#invisalign' },
    { label: 'TEETH CLEANING', to: '/services#teeth-cleaning' },
    { label: 'TEETH WHITENING', to: '/services#teeth-whitening' },
    { label: 'CROWNS', to: '/services#crowns' },
    { label: 'ROOT CANAL', to: '/services#root-canal' },
    { label: 'DENTAL IMPLANTS', to: '/services#dental-implants' },
    { label: 'DENTURES', to: '/services#dentures' },
    { label: 'ORAL SURGERY', to: '/services#oral-surgery' },
    { label: 'VIEW MORE SERVICES', to: '/services' },
  ];

  const handleMouseEnter = (dropdown) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setOpenDropdown(dropdown), 200);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 300);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const renderDropdown = (items) => (
    <div className="absolute left-0 mt-2 w-64 rounded-xl shadow-xl bg-white ring-1 ring-blue-200 z-20 overflow-hidden transition-all duration-300 ease-in-out transform origin-top opacity-0 scale-y-90 translate-y-2 group-hover:opacity-100 group-hover:scale-y-100 group-hover:translate-y-0">
      <div className="py-2">
        {items.map((item) => (
          <Link
            key={item.label}
            to={item.to}
            className="block px-5 py-3 text-gray-800 text-sm font-medium bg-white hover:bg-blue-100 transition-colors duration-300"
            onClick={() => setOpenDropdown(null)}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <div>
      <nav className="bg-white shadow-lg px-28">
        <div className="max-w-7xl mx-auto py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex-shrink-0">
              <img src={logo} alt="Logo" className="h-20 w-auto transition-transform duration-300 hover:scale-110" />
            </Link>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 shadow-md hover:shadow-xl transform hover:scale-105 cursor-pointer">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="font-semibold tracking-tight">856-210-9508</span>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-xl transform hover:scale-105">
                REQUEST APPOINTMENT
              </button>
            </div>
          </div>
        </div>
      </nav>

      <nav className="shadow-xl relative" style={{ backgroundColor: '#0967AF' }}>
        <div className="max-w-7xl mx-auto px-12">
          <div className="flex space-x-4 py-4 relative">
            {/* HOME */}
            <Link
              to="/"
              className="relative text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 focus:text-sky-200 group"
            >
              HOME
              <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-1 w-2/3 h-0.5 bg-gradient-to-r from-sky-300 via-white to-sky-300 opacity-80 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
            </Link>
            {/* OUR STAFF (dropdown) */}
            <div
              className="relative group"
              onMouseEnter={() => handleMouseEnter('staff')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="relative text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 focus:text-sky-200 group focus:outline-none"
                type="button"
              >
                OUR STAFF
                <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-1 w-2/3 h-0.5 bg-gradient-to-r from-sky-300 via-white to-sky-300 opacity-80 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
              </button>
              {openDropdown === 'staff' && renderDropdown(staffDropdown)}
            </div>
            {/* OUR OFFICE (dropdown) */}
            <div
              className="relative group"
              onMouseEnter={() => handleMouseEnter('office')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="relative text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 focus:text-sky-200 group focus:outline-none"
                type="button"
              >
                OUR OFFICE
                <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-1 w-2/3 h-0.5 bg-gradient-to-r from-sky-300 via-white to-sky-300 opacity-80 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
              </button>
              {openDropdown === 'office' && renderDropdown(officeDropdown)}
            </div>
            {/* SPECIALS */}
            <Link
              to="/specials"
              className="relative text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 focus:text-sky-200 group"
            >
              SPECIALS
              <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-1 w-2/3 h-0.5 bg-gradient-to-r from-sky-300 via-white to-sky-300 opacity-80 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
            </Link>
            {/* SERVICES (dropdown) */}
            <div
              className="relative group"
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="relative text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 focus:text-sky-200 group focus:outline-none"
                type="button"
              >
                SERVICES
                <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-1 w-2/3 h-0.5 bg-gradient-to-r from-sky-300 via-white to-sky-300 opacity-80 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
              </button>
              {openDropdown === 'services' && renderDropdown(servicesDropdown)}
            </div>
            {/* BLOG */}
            <Link
              to="/blog"
              className="relative text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 focus:text-sky-200 group"
            >
              BLOG
              <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-1 w-2/3 h-0.5 bg-gradient-to-r from-sky-300 via-white to-sky-300 opacity-80 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
            </Link>
            {/* TESTIMONIALS */}
            <Link
              to="/testimonials"
              className="relative text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 focus:text-sky-200 group"
            >
              TESTIMONIALS
              <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-1 w-2/3 h-0.5 bg-gradient-to-r from-sky-300 via-white to-sky-300 opacity-80 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
            </Link>
            {/* CONTACT */}
            <Link
              to="/contact"
              className="relative text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 focus:text-sky-200 group"
            >
              CONTACT
              <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-1 w-2/3 h-0.5 bg-gradient-to-r from-sky-300 via-white to-sky-300 opacity-80 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
